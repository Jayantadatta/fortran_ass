// Assignment 3: interpolation.
window.EXPLAIN = Object.assign(window.EXPLAIN || {}, {
  a3q1: {
    logic: [
      `The years are equally spaced (h = 5), so Newton's forward formula can be used. 2007 is near the start of the table, which is where the forward formula works best.`,
      `A forward difference is "next value minus this value". The second differences are the differences of the first differences, and so on. This builds a triangle-shaped table.`,
      `p = (x - x0) / h = (2007 - 2000) / 5 = 1.4 says how many steps x is from the first point.`,
      `Formula: y = y0 + p (dy0) + p(p-1)/2! (d2y0) + p(p-1)(p-2)/3! (d3y0) + ... It uses only the top row of the table.`,
      `Each new coefficient is the old one times (p - k) / (k + 1), so it can be built step by step without factorials.`,
    ],
    en: [
      `Input file: the first line has n and the wanted x (<code>xp</code>); then one x, y pair per line.`,
      `<code>read(10,*) x(i), d(i,1)</code> puts the y values straight into column 1 of the table.`,
      `<code>d(i,j) = d(i+1,j-1) - d(i,j-1)</code> fills column j from column j-1. Each column is one shorter: <code>do i = 1, n - j + 1</code>.`,
      `Row i is printed with <code>(d(i,j), j = 1, n - i + 1)</code>, so only the filled part of the triangle shows.`,
      `<code>res = d(1,1)</code> starts with y0 and <code>term = 1.0d0</code>.`,
      `In the loop <code>term = term*(p - (j - 2))/(j - 1)</code> builds p, p(p-1)/2!, ... and <code>res = res + term*d(1,j)</code> adds each term using the top row.`,
    ],
    bn: [
      `Input file: প্রথম লাইনে n আর যে x-এ মান চাই (<code>xp</code>); তারপর প্রতি লাইনে একটা x, y জোড়া।`,
      `<code>read(10,*) x(i), d(i,1)</code> y-এর মানগুলো সরাসরি table-এর ১ম column-এ রাখে।`,
      `<code>d(i,j) = d(i+1,j-1) - d(i,j-1)</code> আগের column থেকে j নম্বর column বানায়। প্রতিটা column এক ঘর ছোট: <code>do i = 1, n - j + 1</code>।`,
      `Row i print হয় <code>(d(i,j), j = 1, n - i + 1)</code> দিয়ে, তাই triangle-এর শুধু ভরা অংশটাই দেখা যায়।`,
      `<code>res = d(1,1)</code> দিয়ে y0 থেকে শুরু, আর <code>term = 1.0d0</code>।`,
      `Loop-এ <code>term = term*(p - (j - 2))/(j - 1)</code> পরপর p, p(p-1)/2!, ... বানায়, আর <code>res = res + term*d(1,j)</code> উপরের row ব্যবহার করে প্রতিটা term যোগ করে।`,
    ],
  },
  a3q2: {
    logic: [
      `The years are equally spaced (h = 1) and 4.5 is near the end of the table, so use Newton's backward formula.`,
      `The difference table holds the same numbers as a forward table. The backward formula just reads them from the bottom: the differences that end at the last point.`,
      `p = (x - xn) / h = (4.5 - 5) / 1 = -0.5. It is negative because x is before the last point.`,
      `Formula: y = yn + p (del yn) + p(p+1)/2! (del2 yn) + p(p+1)(p+2)/3! (del3 yn) + ...`,
      `Note the plus signs: forward uses (p - 1), (p - 2); backward uses (p + 1), (p + 2).`,
    ],
    en: [
      `The table is built exactly like the forward one: <code>d(i,j) = d(i+1,j-1) - d(i,j-1)</code>.`,
      `To show it as a backward table, row i prints <code>(d(i-j+1,j), j = 1, i)</code>. Each difference is placed on the row where it ends.`,
      `<code>p = (xp - x(n))/h</code> measures from the last point. <code>res = d(n,1)</code> starts with yn.`,
      `<code>term = term*(p + (j - 2))/(j - 1)</code> builds p, p(p+1)/2!, ...`,
      `<code>res = res + term*d(n-j+1,j)</code>: <code>d(n-j+1,j)</code> is the last entry of column j, which is the backward difference at the last point.`,
    ],
    bn: [
      `Table ঠিক forward-এর মতোই বানানো হয়: <code>d(i,j) = d(i+1,j-1) - d(i,j-1)</code>।`,
      `Backward table হিসেবে দেখাতে row i-তে <code>(d(i-j+1,j), j = 1, i)</code> print হয়। প্রতিটা difference যে row-তে শেষ হয় সেখানেই বসে।`,
      `<code>p = (xp - x(n))/h</code> শেষ point থেকে মাপে। <code>res = d(n,1)</code> দিয়ে yn থেকে শুরু।`,
      `<code>term = term*(p + (j - 2))/(j - 1)</code> পরপর p, p(p+1)/2!, ... বানায়।`,
      `<code>res = res + term*d(n-j+1,j)</code>: <code>d(n-j+1,j)</code> হলো column j-এর শেষ মান, অর্থাৎ শেষ point-এর backward difference।`,
    ],
  },
  a3q3: {
    logic: [
      `The x values (0, 1, 2.5, 4, 6) are not equally spaced, so the forward and backward formulas cannot be used. Divided differences work for any spacing.`,
      `First divided difference: (f(x1) - f(x0)) / (x1 - x0), the slope between two neighbours.`,
      `Higher ones: (difference of two lower entries) / (x at the far end - x at the near end).`,
      `The top row gives the coefficients of the polynomial: P(x) = f[x0] + f[x0,x1](x - x0) + f[x0,x1,x2](x - x0)(x - x1) + ...`,
      `Five points give a polynomial of degree four. Put x = 3.0 into it to get the exchange rate.`,
    ],
    en: [
      `<code>dd(i,1)</code> holds f(x). The key line is <code>dd(i,j) = (dd(i+1,j-1) - dd(i,j-1))/(x(i+j-1) - x(i))</code>.`,
      `In that line <code>x(i+j-1) - x(i)</code> is the gap between the first and last x that the entry covers. This division is the only change from an ordinary difference table.`,
      `<code>(dd(1,j), j = 1, n)</code> prints the top row, which is the list of polynomial coefficients.`,
      `<code>res = dd(1,1)</code> and <code>term = 1.0d0</code> start the evaluation.`,
      `<code>term = term*(xp - x(j-1))</code> grows the product (x - x0)(x - x1)..., and <code>res = res + dd(1,j)*term</code> adds each term.`,
    ],
    bn: [
      `<code>dd(i,1)</code>-এ f(x) থাকে। মূল লাইন: <code>dd(i,j) = (dd(i+1,j-1) - dd(i,j-1))/(x(i+j-1) - x(i))</code>।`,
      `ওই লাইনে <code>x(i+j-1) - x(i)</code> হলো ওই entry যে x-গুলো জুড়ে আছে তার প্রথম আর শেষ x-এর দূরত্ব। সাধারণ difference table থেকে পার্থক্য শুধু এই ভাগটা।`,
      `<code>(dd(1,j), j = 1, n)</code> উপরের row print করে, যেটা polynomial-এর coefficient-এর list।`,
      `<code>res = dd(1,1)</code> আর <code>term = 1.0d0</code> দিয়ে মান বের করা শুরু।`,
      `<code>term = term*(xp - x(j-1))</code> গুণফল (x - x0)(x - x1)... বড় করে, আর <code>res = res + dd(1,j)*term</code> প্রতিটা term যোগ করে।`,
    ],
  },
  a3q4: {
    logic: [
      `First make the data: t = 0, 0.5, 1, 1.5, 2 and the function value at each.`,
      `Lagrange needs no difference table. P(x) = sum of y<sub>i</sub> L<sub>i</sub>(x).`,
      `L<sub>i</sub>(x) is a product over every other point j: (x - x<sub>j</sub>) / (x<sub>i</sub> - x<sub>j</sub>). It equals 1 at its own point and 0 at all the others.`,
      `So each data value is switched on at its own point and switched off at the rest; adding them gives the curve through all five points.`,
      `Put x = 1.25 to get the approximate value. Then compute the exact value from the function and take the absolute difference as the error.`,
    ],
    en: [
      `<code>x(0:4), y(0:4)</code>: the arrays are indexed from 0 to 4, matching x0 ... x4.`,
      `<code>x(i) = 0.5d0*i</code> and <code>y(i) = f(x(i))</code> build the five points inside the program; the input file gives only <code>xp</code> = 1.25.`,
      `For each i, <code>l = 1.0d0</code> and the inner loop multiplies <code>(xp - x(j))/(x(i) - x(j))</code>.`,
      `<code>if (j /= i)</code> skips j = i; without it there would be a division by zero.`,
      `<code>res = res + l*y(i)</code> adds one Lagrange term. <code>ex = f(xp)</code> is the exact value and <code>abs(ex - res)</code> the error, printed with <code>es14.4</code>.`,
    ],
    bn: [
      `<code>x(0:4), y(0:4)</code>: array-র index 0 থেকে 4, x0 ... x4-এর সাথে মিলিয়ে।`,
      `<code>x(i) = 0.5d0*i</code> আর <code>y(i) = f(x(i))</code> program-এর ভিতরেই পাঁচটা point বানায়; input file-এ শুধু <code>xp</code> = 1.25 থাকে।`,
      `প্রতিটা i-এর জন্য <code>l = 1.0d0</code>, আর ভিতরের loop <code>(xp - x(j))/(x(i) - x(j))</code> গুণ করে যায়।`,
      `<code>if (j /= i)</code> দিয়ে j = i বাদ দেওয়া হয়; না দিলে শূন্য দিয়ে ভাগ হয়ে যেত।`,
      `<code>res = res + l*y(i)</code> একটা Lagrange term যোগ করে। <code>ex = f(xp)</code> হলো exact মান আর <code>abs(ex - res)</code> error, যেটা <code>es14.4</code> দিয়ে print হয়।`,
    ],
  },
});
