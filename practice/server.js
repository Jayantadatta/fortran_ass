// Fortran Practice Lab - local server (no dependencies).
// Serves the practice page and compiles/runs your code with the same gfortran Code::Blocks uses.
const http = require('http');
const fs = require('fs');
const path = require('path');
const { spawn } = require('child_process');

const PORT = Number(process.env.PORT) || 5290;
const ROOT = path.resolve(__dirname, '..');          // folder with Assignment-1 ... Assignment-5
const PUBLIC = path.join(__dirname, 'public');
const WS = path.join(__dirname, 'workspace');        // your practice attempts are saved here
const PROGRESS = path.join(WS, 'progress.json');
fs.mkdirSync(WS, { recursive: true });

function findCompiler() {
  const candidates = [
    process.env.GFORTRAN,
    'C:/Program Files/CodeBlocks/MinGW/bin/gfortran.exe',
    'C:/Program Files (x86)/CodeBlocks/MinGW/bin/gfortran.exe',
    'C:/MinGW/bin/gfortran.exe',
  ].filter(Boolean);
  for (const c of candidates) if (fs.existsSync(c)) return c;
  return 'gfortran';
}
const GFORTRAN = findCompiler();
const ENV = { ...process.env, GFORTRAN_UNBUFFERED_ALL: 'y' };
if (path.isAbsolute(GFORTRAN)) ENV.PATH = path.dirname(GFORTRAN) + path.delimiter + (process.env.PATH || '');
for (const k of Object.keys(ENV)) if (k.toLowerCase() === 'path' && k !== 'PATH') delete ENV[k];

const safeName = n => typeof n === 'string' && /^[\w.\- ]{1,60}$/.test(n) && !n.startsWith('.');
const safeId = n => typeof n === 'string' && /^[\w\-]{1,40}$/.test(n);

function listProblems() {
  const out = [];
  for (const ad of fs.readdirSync(ROOT)) {
    const am = /^Assignment-(\d+)$/.exec(ad);
    if (!am) continue;
    for (const qd of fs.readdirSync(path.join(ROOT, ad))) {
      const qm = /^Question-(\d+)$/.exec(qd);
      if (!qm) continue;
      const dir = path.join(ROOT, ad, qd);
      const p = { id: `a${am[1]}q${qm[1]}`, a: +am[1], q: +qm[1], source: '', solution: '', inputs: [], expected: [] };
      for (const f of fs.readdirSync(dir).sort()) {
        const full = path.join(dir, f);
        if (!fs.statSync(full).isFile()) continue;
        const text = fs.readFileSync(full, 'utf8').replace(/\r\n/g, '\n');
        if (/\.f90$/i.test(f)) { p.source = f; p.solution = text; }
        else if (/^in/i.test(f)) p.inputs.push({ name: f, content: text });
        else if (/\.txt$/i.test(f)) p.expected.push({ name: f, content: text });
      }
      if (p.source) out.push(p);
    }
  }
  return out.sort((x, y) => x.a - y.a || x.q - y.q);
}

function run(cmd, args, opts, timeoutMs, stdin) {
  return new Promise(resolve => {
    const t0 = Date.now();
    let out = '', err = '', timedOut = false, done = false;
    let child;
    try { child = spawn(cmd, args, { ...opts, windowsHide: true }); }
    catch (e) { return resolve({ code: -1, out: '', err: String(e.message), ms: 0, timedOut: false, failed: true }); }
    const cap = (s, d) => (s.length < 300000 ? s + d : s);
    child.stdout.on('data', d => { out = cap(out, d); });
    child.stderr.on('data', d => { err = cap(err, d); });
    const timer = setTimeout(() => { timedOut = true; child.kill(); }, timeoutMs);
    const finish = (code, failed) => {
      if (done) return; done = true; clearTimeout(timer);
      resolve({ code, out: out.replace(/\r\n/g, '\n'), err: err.replace(/\r\n/g, '\n'), ms: Date.now() - t0, timedOut, failed });
    };
    child.on('error', e => { err += String(e.message); finish(-1, true); });
    child.on('close', code => finish(code === null ? -1 : code, false));
    child.stdin.on('error', () => {});
    child.stdin.end(stdin || '');
  });
}

let busy = Promise.resolve();   // one build at a time
async function build(body) {
  const { id, source, files, doRun, stdin } = body;
  if (!safeId(id) || !safeName(source) || !/\.(f90|f95|f03|f|for)$/i.test(source) || typeof files !== 'object' || !files)
    return { error: 'Bad request: the source file must be saved with a .f90 name.' };
  const names = Object.keys(files);
  if (names.length > 20 || !names.every(safeName) || !(source in files)) return { error: 'Bad file names.' };
  const dir = path.join(WS, id);
  fs.mkdirSync(dir, { recursive: true });
  // start clean so stale output files never fake a result
  for (const f of fs.readdirSync(dir)) { try { fs.rmSync(path.join(dir, f), { recursive: true, force: true }); } catch {} }
  for (const n of names) fs.writeFileSync(path.join(dir, n), String(files[n]).replace(/\r?\n/g, '\r\n'));
  const exe = source.replace(/\.[^.]+$/, '') + '.exe';
  const args = ['-Wall', '-g', '-fcheck=bounds', '-fdiagnostics-color=never', source, '-o', exe];
  const c = await run(GFORTRAN, args, { cwd: dir, env: ENV }, 60000);
  const res = {
    dir,
    compile: { cmd: `gfortran.exe -Wall -g ${source} -o ${exe}`, ok: c.code === 0 && !c.failed, output: (c.err + c.out).trim(), ms: c.ms,
               missing: c.failed ? 'gfortran was not found. Install MinGW gfortran or set the GFORTRAN environment variable.' : '' },
    run: null, outputs: [],
  };
  if (res.compile.ok && doRun) {
    const r = await run(path.join(dir, exe), [], { cwd: dir, env: ENV }, 10000, stdin);
    res.run = { code: r.code, stdout: r.out, stderr: r.err, ms: r.ms, timedOut: r.timedOut };
    for (const f of fs.readdirSync(dir).sort()) {
      if (f in files || /\.(exe|o|mod)$/i.test(f)) continue;
      const full = path.join(dir, f);
      const st = fs.statSync(full);
      if (!st.isFile()) continue;
      res.outputs.push({ name: f, content: st.size > 400000 ? '(file too large to show)' : fs.readFileSync(full, 'utf8').replace(/\r\n/g, '\n') });
    }
  }
  return res;
}

function readBody(req) {
  return new Promise((resolve, reject) => {
    let s = '';
    req.on('data', d => { s += d; if (s.length > 3e6) { reject(new Error('too large')); req.destroy(); } });
    req.on('end', () => { try { resolve(JSON.parse(s || '{}')); } catch (e) { reject(e); } });
  });
}
const TYPES = { '.html': 'text/html; charset=utf-8', '.js': 'text/javascript; charset=utf-8', '.css': 'text/css; charset=utf-8', '.svg': 'image/svg+xml' };
const json = (res, obj, code = 200) => { res.writeHead(code, { 'Content-Type': 'application/json; charset=utf-8', 'Cache-Control': 'no-store' }); res.end(JSON.stringify(obj)); };

const server = http.createServer(async (req, res) => {
  try {
    const url = new URL(req.url, 'http://localhost');
    // only this computer may talk to the server
    const host = (req.headers.host || '').split(':')[0];
    if (!['localhost', '127.0.0.1'].includes(host)) return json(res, { error: 'forbidden' }, 403);
    if (req.method === 'POST') {
      const origin = req.headers.origin;
      if (origin && !/^http:\/\/(localhost|127\.0\.0\.1):\d+$/.test(origin)) return json(res, { error: 'forbidden' }, 403);
    }
    if (url.pathname === '/api/problems') return json(res, { problems: listProblems(), compiler: GFORTRAN, workspace: WS });
    if (url.pathname === '/api/progress' && req.method === 'GET')
      return json(res, fs.existsSync(PROGRESS) ? JSON.parse(fs.readFileSync(PROGRESS, 'utf8')) : {});
    if (url.pathname === '/api/progress' && req.method === 'POST') {
      fs.writeFileSync(PROGRESS, JSON.stringify(await readBody(req), null, 1));
      return json(res, { ok: true });
    }
    if (url.pathname === '/api/build' && req.method === 'POST') {
      const body = await readBody(req);
      const job = busy.then(() => build(body));
      busy = job.catch(() => {});
      return json(res, await job);
    }
    let file = url.pathname === '/' ? '/index.html' : decodeURIComponent(url.pathname);
    const full = path.join(PUBLIC, path.normalize(file));
    if (!full.startsWith(PUBLIC) || !fs.existsSync(full) || !fs.statSync(full).isFile()) { res.writeHead(404); return res.end('Not found'); }
    res.writeHead(200, { 'Content-Type': TYPES[path.extname(full)] || 'application/octet-stream', 'Cache-Control': 'no-store' });
    fs.createReadStream(full).pipe(res);
  } catch (e) {
    json(res, { error: String(e.message || e) }, 500);
  }
});
// "--open": show the lab in its own window (Edge app mode keeps F9, Ctrl+Shift+N etc. for the lab)
function openWindow() {
  if (!process.argv.includes('--open') || process.platform !== 'win32') return;
  const url = `http://localhost:${PORT}`;
  const c = spawn('cmd', ['/c', 'start', '', 'msedge', `--app=${url}`], { stdio: 'ignore', windowsHide: true });
  c.on('exit', code => { if (code) spawn('cmd', ['/c', 'start', '', url], { stdio: 'ignore', windowsHide: true }); });
  c.on('error', () => {});
}
server.on('error', e => {
  if (e.code === 'EADDRINUSE') { console.log(`\n  Practice Lab is already running: http://localhost:${PORT}\n`); openWindow(); setTimeout(() => process.exit(0), 1500); return; }
  else console.error(e);
  process.exit(e.code === 'EADDRINUSE' ? 0 : 1);
});
server.listen(PORT, '127.0.0.1', () => {
  console.log(`\n  Fortran Practice Lab is running:  http://localhost:${PORT}`);
  console.log(`  Compiler : ${GFORTRAN}`);
  console.log(`  Attempts : ${WS}`);
  console.log('\n  Keep this window open while you practice. Close it to stop.\n');
  openWindow();
});
