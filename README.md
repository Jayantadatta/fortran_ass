# Fortran Assignments (AMTH 250, Math Lab II)

Easy Fortran 90 programs for Assignments 1 to 5.
Department of Applied Mathematics, University of Dhaka, Second Year B.S. (Honors) 2025-2026.

Every question has its own folder with the program (`.f90`), the input file (`in...txt`, where the question needs input) and the output file (`out...txt`) produced by that program.

```
Assignment-1/Question-1/ ... Question-6/     (a1qY.f90, in1qY.txt, out1qY.txt)
Assignment-2/Question-1/ ... Question-5/     (a2qY.f90, out2qY.txt)
Assignment-3/Question-1/ ... Question-4/     (a3qY.f90, in_a3qY.txt, out_a3qY.txt)
Assignment-4/Question-1/ ... Question-11/    (a4qY.f90, in4qY.txt, out4qY.txt)
Assignment-5/Question-1/ ... Question-5/     (a5qY.f90, in_a5qY.txt, out_a5qY.txt)
```

File names follow each assignment sheet.

## How to run

Open a terminal inside a question folder, so the program finds its input file there.

```
gfortran a1q1.f90 -o run
./run          (Windows: run.exe)
```

In Code::Blocks: save the program as `.f90`, keep the input file in the same folder as the program, then Build and Run (F9). Open the `out...` file to see the result.

## Notes

- Assignment 1 Q3 writes the three matrix files `a1q3_F.txt`, `a1q3_E.txt`, `a1q3_ES.txt`; mean, maximum and minimum go to `out1q3.txt`. The matrix is random, so the numbers change if the random generator is seeded differently.
- Assignment 2 Q1 stops when the half-width of the bracketing interval is below 1e-4. Q2 stops when two successive iterates differ by less than 0.5e-6. Q3, Q4 and Q5 stop when `|Pn - Pn-1|` is below 1e-5, 1e-4 and 0.5e-5.
- Assignment 2 Q5 lists four initial guesses, so the output has four tables (the sheet says three). The equation has two real roots: 0.61906 and 1.51213.
- Assignment 4 Q2 uses three variables W (warm), H (home) and AC (AC on): A = AC -> (W and H), B = (not W or not H) -> not AC.

