// Question statements (rewritten from the AMTH 250 assignment sheets) and the exam cheat sheet.
window.QUESTIONS = {
  a1q1: { t: 'Matrix read, even rows, boundary', topic: 'Arrays, file I/O', h: `Read the matrix A from a file and store it as matrix A.
<pre>     4 7 2 5
A =  1 6 8 3
     9 2 5 7
     3 8 1 4</pre>
In the output file: <ol type="i"><li>Write A in matrix form.</li><li>Write only the elements whose row number is even.</li>
<li>Write only the elements of the 1st row, 1st column, 4th row and 4th column (leave the inside blank).</li>
<li>Construct a new matrix B by replacing all boundary elements with 0, keeping the others unchanged, and write B.</li></ol>` },
  a1q2: { t: 'Character array operations', topic: 'Characters, counting', h: `Store the name <b>Department of Applied Mathematics, University of Dhaka</b> in a one-dimensional character array. Then:
<ol type="i"><li>Print the name as it appears and in reverse order.</li>
<li>Count and print the number of uppercase letters, lowercase letters, vowels, consonants, digits and blank spaces.</li>
<li>Replace every vowel with <b>*</b> and print the modified name.</li>
<li>Decide whether the array is a palindrome (ignore blanks and letter case) and print a message.</li></ol>` },
  a1q3: { manual: true, t: 'Random matrix with F, E, ES descriptors', topic: 'Format descriptors', h: `Generate a 7 &times; 7 matrix of random real numbers. Store it in three files <b>a1q3_F.txt</b>, <b>a1q3_E.txt</b>, <b>a1q3_ES.txt</b> using
<ol type="i"><li>the F descriptor, 10 decimal places</li><li>the E descriptor, 8 decimal places</li><li>the ES descriptor, 7 decimal places</li></ol>
Find the Mean, Maximum and Minimum of the numbers (write them to <b>out1q3.txt</b>).<br><i>The numbers are random, so the checker compares the file names and layout only.</i>` },
  a1q4: { t: 'Divisors subroutine, perfect numbers', topic: 'Subroutine', h: `<ol type="i"><li>Using a <b>subroutine</b>, compute the number of positive divisors &tau;(n) and the sum of positive divisors &sigma;(n) of a given positive integer n.</li>
<li>A perfect number satisfies &sigma;(n) = 2n. Using the subroutine from (i), find and print the first 4 perfect numbers.</li></ol>Input: n = 28.` },
  a1q5: { t: 'Mobius function', topic: 'Function', h: `The M&ouml;bius function is
<pre>        1        if n = 1
mu(n) = (-1)^k   if n is the product of k distinct primes
        0        otherwise</pre>
Write a FORTRAN <b>function</b> that returns &mu;(n) for a positive integer n. (Example: &mu;(30) = -1, &mu;(12) = 0, &mu;(6) = 1.)<br>Input file: how many numbers, then the numbers.` },
  a1q6: { t: 'Recursive GCD, GCD of an array', topic: 'Recursive function', h: `<ol type="i"><li>For positive integers a and b:
<pre>gcd(a,b) = b                  if (a mod b) = 0
gcd(a,b) = gcd(b, a mod b)    if (a mod b) /= 0</pre>
Using a <b>recursive function</b>, take a and b as input and give their GCD.</li>
<li>Using the same function, read n positive integers into an array and compute the GCD of all n numbers by applying the two-number GCD repeatedly across the array.</li></ol>` },

  a2q1: { t: 'Bisection method', topic: 'Root finding', h: `Show that f(x) = x<sup>3</sup> &minus; 4x &minus; 9 = 0 has a root in [2, 3]. Use the <b>Bisection method</b> to find the root accurate to within 10<sup>&minus;4</sup>. Table heading:
<pre>Iteration NO.   a   b   Pn   |Pn - Pn-1| / |Pn|</pre>` },
  a2q2: { t: 'Secant method', topic: 'Root finding', h: `Use the <b>Secant method</b> to find an approximate root of e<sup>&minus;x</sup> &minus; x = 0 in [0, 1], correct to six decimal places. Show the results in a table with suitable headings.` },
  a2q3: { t: 'False position method', topic: 'Root finding', h: `Use the <b>False Position (Regula Falsi) method</b> to solve ln x + x<sup>2</sup> &minus; 3 = 0 in [1, 2]. Continue until the answer is accurate within 10<sup>&minus;5</sup>. Table heading:
<pre>Iteration NO.   a   b   Pn   |Pn - Pn-1|</pre>` },
  a2q4: { t: 'Fixed point iteration', topic: 'Root finding', h: `Use <b>Fixed Point Iteration</b> to approximate the root of x<sup>3</sup> + x &minus; 1 = 0 on [0, 1], accurate to within 10<sup>&minus;4</sup>. Take g(x) = 1 / (1 + x<sup>2</sup>). Table heading:
<pre>Iteration NO.   Pn-1   Pn   |Pn - Pn-1| / |Pn|</pre>` },
  a2q5: { t: 'Newton-Raphson, four guesses', topic: 'Root finding', h: `Find the real root of e<sup>x</sup> &minus; 3x = 0 correct to five decimal places by the <b>Newton-Raphson method</b> with the initial guesses
x<sub>0</sub> = 0.0, &minus;1.0, 2.0, &minus;2.50. Show a separate table for each guess with heading:
<pre>Iteration NO.   Pn-1   Pn   |Pn - Pn-1| / |Pn|</pre>` },

  a3q1: { t: 'Newton forward interpolation (GDP)', topic: 'Interpolation', h: `GDP (billion USD) at five-year intervals:
<pre>Year  2000   2005   2010   2015   2020    2025
GDP   52.4   61.8   75.6   93.2   118.5   149.7</pre>
Using <b>Newton's forward difference</b> formula, estimate the GDP in <b>2007</b>. Construct and display the complete difference table, then compute the value.` },
  a3q2: { t: 'Newton backward interpolation (deposit)', topic: 'Interpolation', h: `Maturity value of a fixed deposit of Tk. 100,000:
<pre>Years   1        2        3        4        5
Value   106500   113420   120790   128620   136950</pre>
Using <b>Newton's backward difference</b> formula, construct and display the complete difference table, then estimate the maturity value for <b>4.5 years</b>.` },
  a3q3: { t: 'Newton divided difference (exchange rate)', topic: 'Interpolation', h: `Exchange rate (Tk./USD) at times x (hours after opening):
<pre>x      0.0      1.0      2.5      4.0      6.0
f(x)   118.20   118.45   118.93   119.36   120.05</pre>
Use <b>Newton's divided difference</b> formula to construct the interpolating polynomial of degree four. Show the complete divided difference table and estimate the rate at <b>x = 3.0</b>.` },
  a3q4: { t: 'Lagrange interpolation', topic: 'Interpolation', h: `f(t) = 0.3 t e<sup>0.15 t&sup2;</sup>. Using the data at t = 0.0, 0.5, 1.0, 1.5, 2.0 apply <b>Lagrange's interpolation</b> formula to approximate f(1.25). The program should:
<ol type="a"><li>Calculate the function values at the five points.</li><li>Find the approximate value of f(1.25).</li><li>Calculate the exact value from the function.</li><li>Report the absolute error.</li></ol>` },

  a4q1: { t: 'Hospital rules truth table', topic: 'Logic', h: `A hospital flags a patient as urgent <i>if at least two of the three symptoms fever, breathing trouble and chest pain are present</i>. A doctor proposes: <i>flag the patient if fever and breathing trouble together, or if chest pain is present with at least one of the other two</i>. Write both rules as logical expressions, construct the truth table, and decide whether the two rules are logically equivalent.` },
  a4q2: { t: 'Thermostat rules, tautology', topic: 'Logic', h: `AC rule with W = the room is warm, H = someone is home, AC = AC is on.<br><b>Version A:</b> turn on the AC only if it is warm and someone is home.<br><b>Version B:</b> do not turn on the AC whenever it is not warm, or whenever nobody is home.<br>Translate both into logical expressions, build the truth table for both, and determine whether (A) &harr; (B) is a tautology.` },
  a4q3: { t: 'Truth table: implication and biconditional', topic: 'Logic', h: `Construct a truth table for p &rarr; q and p &harr; q. Also show that p &harr; q &equiv; (p &and; q) &or; (&not;p &and; &not;q).` },
  a4q4: { t: 'Negated biconditional with subroutine', topic: 'Logic, subroutine', h: `Prove that &not;(p &harr; q) &equiv; p &harr; &not;q. Use a <b>subroutine</b> to calculate the biconditionals.` },
  a4q5: { t: 'Tower of Hanoi', topic: 'Recursive function', h: `H<sub>n</sub> = 2H<sub>n&minus;1</sub> + 1, H<sub>1</sub> = 1 is the number of moves for n disks. Using a <b>recursive function</b>, compute H<sub>n</sub> for n = 1, 2, &hellip;, 10. If each move takes 3 seconds and costs $0.02, tabulate n, H<sub>n</sub>, time (in minutes) and cost.` },
  a4q6: { t: 'Mersenne numbers and primes', topic: 'Loops, primes', h: `The Mersenne numbers are M<sub>n</sub> = 2<sup>n</sup> &minus; 1, n = 0, 1, 2, &hellip; Generate the first 15 Mersenne numbers and determine which of them are prime.` },
  a4q7: { t: 'Hanoi vs Mersenne', topic: 'Recursive function', h: `Using the recursive function from Q5 and the formula from Q6, compute H<sub>n</sub> and M<sub>n</sub> for n = 1, 2, &hellip;, 10, print them side by side and check whether H<sub>n</sub> = M<sub>n</sub> for every n. State your conclusion.` },
  a4q8: { t: 'Rumor spread recurrence', topic: 'Recursive function', h: `I<sub>n</sub> = I<sub>n&minus;1</sub> + k I<sub>n&minus;1</sub> (N &minus; I<sub>n&minus;1</sub>) / N, where I<sub>n</sub> is the number of people who have heard the rumor after n days. For N = 1000, k = 0.3, I<sub>0</sub> = 5 use a <b>recursive function</b> to compute I<sub>n</sub> for n = 1, &hellip;, 20 and tabulate it with the percentage of the village that has heard the rumor.` },
  a4q9: { t: 'Crate pyramid', topic: 'Recursive function', h: `The n-th layer of a pyramid contains n<sup>2</sup> crates, so T<sub>n</sub> = T<sub>n&minus;1</sub> + n<sup>2</sup>, T<sub>1</sub> = 1. Each crate costs c dollars: C<sub>n</sub> = C<sub>n&minus;1</sub> + c n<sup>2</sup>, C<sub>1</sub> = c = $15. Use a <b>recursive function</b> and make a table for n = 1, &hellip;, 20 with columns: layer (n), crates in the n-th layer (n<sup>2</sup>), total crates (T<sub>n</sub>), total cost (C<sub>n</sub>).` },
  a4q10: { t: 'Second order recurrence vs exact', topic: 'Recurrence', h: `a<sub>n</sub> = 2a<sub>n&minus;1</sub> &minus; a<sub>n&minus;2</sub> + 3 with a<sub>0</sub> = 1, a<sub>1</sub> = 5. Find a<sub>n</sub> for n = 1, &hellip;, 50. Compare with the exact solution a<sub>n</sub> = (3/2) n<sup>2</sup> + (5/2) n + 1. Show the results in a suitable table with suitable descriptors.` },
  a4q11: { t: 'Binomial expansion table', topic: 'Recursive factorial', h: `The (r+1)-th term of (x + y)<sup>n</sup> is T<sub>r+1</sub> = C(n, r) x<sup>n&minus;r</sup> y<sup>r</sup>. Use a <b>recursive function</b> for factorials, use it to find C(n, r), and build the table below. For x = 3, y = 2, n = 5:
<pre>r   Term T(r+1)   Coefficient C(n,r)   Value of term
0   1             1                    243
1   2             5                    810
2   3             10                   1080 ...</pre>` },

  a5q1: { t: 'Three and five point derivatives', topic: 'Numerical differentiation', h: `Displacement x(t) = 8 e<sup>&minus;t/4</sup> cos(2t) (cm, s). The velocity is v(t) = dx/dt. Generate the displacement values and approximate the velocity at <b>t = 2 s</b> using
<ol type="i"><li>Three-point midpoint formula, h = 0.25</li><li>Three-point endpoint formula, h = 0.25</li><li>Five-point midpoint formula, h = 0.50</li><li>Five-point endpoint formula, h = 0.50</li></ol>
Tabulate the method, step size, approximate velocity, exact velocity and absolute error.` },
  a5q2: { t: 'Richardson extrapolation', topic: 'Numerical differentiation', h: `Charge on a capacitor q(t) = 40 (1 &minus; e<sup>&minus;t/2</sup>) (mC, s). The current is i(t) = dq/dt. Using <b>Richardson extrapolation</b>, approximate the current at <b>t = 4 s</b> to four decimal places. Begin with h = 0.4 and successively halve h. Display the extrapolation table.` },
  a5q3: { t: 'Velocity and acceleration from a table', topic: 'Numerical differentiation', h: `Displacement s (m) of a vehicle at times t (s):
<pre>t   0.0    0.2    0.4    0.6    0.8    1.0    1.2
s   0.00   1.18   2.72   4.68   7.04   9.80   12.96</pre>
Use suitable numerical differentiation formulas to find the velocity and acceleration at <b>t = 0 s</b> and <b>t = 1.2 s</b>.` },
  a5q4: { t: 'Trapezoidal, Simpson, Weddle', topic: 'Numerical integration', h: `Heat-transfer rate q(t) = 120 t / (1 + t<sup>2</sup>). Total heat in the first 2.4 units of time: Q = &int;<sub>0</sub><sup>2.4</sup> 120 t / (1 + t<sup>2</sup>) dt. Use 30 equal subintervals with
<ol type="a"><li>Composite trapezoidal rule</li><li>Composite Simpson's 1/3 rule</li><li>Composite Simpson's 3/8 rule</li><li>Composite Weddle's rule</li></ol>
The exact value is Q = 60 ln(6.76). Compare the approximations in a table including absolute and percentage errors.` },
  a5q5: { t: 'Romberg integration', topic: 'Numerical integration', h: `Power P(t) = t<sup>2</sup> cos(t) watts. Energy E = &int;<sub>0</sub><sup>&pi;/4</sup> t<sup>2</sup> cos(t) dt. Using <b>Romberg integration</b>, approximate E correct to five decimal places. Display the complete Romberg table and compare with the exact value E = &radic;2 (&pi;<sup>2</sup>/32 + &pi;/4 &minus; 1).` },
};

window.CHEATSHEET = `
<h3>Program skeleton</h3>
<pre>program a1q1
    implicit none
    integer :: i, j, n
    real(8) :: x, a(10), d(10,10)
    open(10, file='in1q1.txt')
    open(20, file='out1q1.txt')
    read(10,*) n
    ...
    write(20,*) 'text', x
contains
    real(8) function f(x)
        real(8), intent(in) :: x
        f = x**3 - 4.0d0*x - 9.0d0
    end function f
end program a1q1</pre>
<p>Declarations first, then statements. Functions and subroutines go after <b>contains</b>, before <b>end program</b>.</p>

<h3>Reading and writing</h3>
<pre>read(10,*) n, xp                    ! free format
read(10,*) (a(i,j), j = 1, 4)        ! one row of a matrix
read(10,'(a)') s                     ! a whole line of text
write(20,*)                          ! blank line
write(20,'(4i4)') (a(i,j), j = 1, 4)
write(20,'(i4)', advance='no') k     ! stay on the same line</pre>

<h3>Format descriptors</h3>
<pre>i5        integer, width 5
f10.4     real, width 10, 4 decimals
e16.8     0.12345678E+01
es15.7    1.2345678E+00
a   a10   text
l8        logical T / F
4x        four blanks
3f12.6    repeat 3 times
'(a, f8.4)'   text then number</pre>
<p>Stars (*****) in the output mean the width is too small.</p>

<h3>Loops and decisions</h3>
<pre>do i = 1, n            do i = n, 1, -1        do
    ...                    ...                    ...
end do                 end do                     if (abs(p - pold) < tol) exit
                                              end do
if (x > 0) then        if (cond) y = 1
    ...
else if (x == 0) then
    ...
else
    ...
end if</pre>
<p>Compare with == /= &lt; &lt;= &gt; &gt;= and join with .and. .or. .not. Logical equality is .eqv. and .neqv.</p>

<h3>Subprograms</h3>
<pre>subroutine divisors(n, tau, sigma)
    integer, intent(in)  :: n
    integer, intent(out) :: tau, sigma
    ...
end subroutine divisors
call divisors(n, t, s)

recursive integer function gcd(a, b) result(g)
    integer, intent(in) :: a, b
    if (mod(a,b) == 0) then
        g = b
    else
        g = gcd(b, mod(a,b))
    end if
end function gcd</pre>

<h3>Useful intrinsics</h3>
<pre>abs sqrt exp log sin cos tan atan   mod(a,b)   max min
real(i,8)  int(x)  nint(x)          sum(a) maxval(a) minval(a)
len_trim(s)  index(s,c)  achar  iachar        call random_number(a)
pi = 4.0d0*atan(1.0d0)              1.0d-5 means 1 x 10^-5</pre>

<h3>Root finding</h3>
<pre>Bisection       p = (a + b)/2 ; if f(a)*f(p) < 0 then b = p else a = p
False position  p = (a*f(b) - b*f(a)) / (f(b) - f(a)) ; same bracket update
Secant          p2 = p1 - f(p1)*(p1 - p0) / (f(p1) - f(p0))
Fixed point     p = g(p0)
Newton-Raphson  p = p0 - f(p0)/df(p0)
Stop when abs(p - pold) < tol   (or abs(p - pold)/abs(p))</pre>

<h3>Interpolation</h3>
<pre>Difference table   d(i,j) = d(i+1,j-1) - d(i,j-1)
Forward    p = (x - x1)/h ; y = sum of  p(p-1)..(p-j+2)/(j-1)! * d(1,j)
Backward   p = (x - xn)/h ; y = sum of  p(p+1)..(p+j-2)/(j-1)! * d(n-j+1,j)
Divided    d(i,j) = (d(i+1,j-1) - d(i,j-1)) / (x(i+j-1) - x(i))
           y = sum of  d(1,j) * (x-x1)(x-x2)..(x-x(j-1))
Lagrange   L(i) = product over j /= i of (x - x(j))/(x(i) - x(j)) ; y = sum f(i)*L(i)</pre>

<h3>Differentiation</h3>
<pre>3-pt midpoint   ( f(x+h) - f(x-h) ) / (2h)
3-pt endpoint   ( -3f(x) + 4f(x+h) - f(x+2h) ) / (2h)
5-pt midpoint   ( f(x-2h) - 8f(x-h) + 8f(x+h) - f(x+2h) ) / (12h)
5-pt endpoint   ( -25f(x) + 48f(x+h) - 36f(x+2h) + 16f(x+3h) - 3f(x+4h) ) / (12h)
2nd derivative  ( f(x-h) - 2f(x) + f(x+h) ) / h**2
Richardson      N(i,1) from h/2**(i-1) ; N(i,j) = N(i,j-1) + (N(i,j-1) - N(i-1,j-1)) / (4**(j-1) - 1)</pre>

<h3>Integration (h = (b-a)/n)</h3>
<pre>Trapezoidal    h/2  * ( f0 + 2*(f1 + .. + f(n-1)) + fn )
Simpson 1/3    h/3  * ( f0 + 4*odd + 2*even + fn )                n even
Simpson 3/8    3h/8 * ( f0 + 3*(not multiple of 3) + 2*(multiple of 3) + fn )   n multiple of 3
Weddle         3h/10 * sum over blocks of 6: f0 + 5f1 + f2 + 6f3 + f4 + 5f5 + f6
Romberg        R(k,1) trapezoid with 2**(k-1) strips ; R(k,j) = R(k,j-1) + (R(k,j-1) - R(k-1,j-1)) / (4**(j-1) - 1)</pre>
`;

window.CHECKLIST = `
<ol>
<li><b>File &rarr; New &rarr; Empty file</b> (Ctrl+Shift+N), then save it at once as <b>a1q1.f90</b>. Without the .f90 ending Code::Blocks will not colour or build it.</li>
<li>Put every question in its own folder. The input file must sit in the <b>same folder</b> as the .f90 file.</li>
<li>Create the input file the same way (New &rarr; Empty file), type the data, save with the exact name from the sheet (in1q1.txt, in_a3q1.txt ...).</li>
<li>First lines, every time: <b>program name</b>, <b>implicit none</b>, declarations, the two <b>open</b> lines.</li>
<li>Press <b>F9</b> (Build and run). Read the first error only, fix it, press F9 again.</li>
<li>The black window shows nothing for these programs. Open the <b>out...txt</b> file to see the result. Use File &rarr; Open, or reload it if it is already open.</li>
<li>If the build says "Permission denied", the black console window from the last run is still open. Close it.</li>
<li>Save with <b>Ctrl+S</b> often. Check the output file name once more before you submit.</li>
</ol>
<h3>Shortcuts that work the same here</h3>
<pre>F9            Build and run          Ctrl+S         Save
Ctrl+F9       Build                  Ctrl+Shift+N   New empty file
Ctrl+F10      Run                    Ctrl+Z / Y     Undo / redo
Ctrl+F11      Rebuild                Tab / Shift+Tab   Indent / unindent selection
Ctrl+Shift+C  Comment selection      Ctrl+Shift+X   Uncomment selection</pre>
`;
