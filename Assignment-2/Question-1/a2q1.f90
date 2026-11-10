program a2q1
    implicit none
    integer :: n
    real(8) :: a, b, p, pold, err
    open(20, file='out2q1.txt')
    a = 2.0d0
    b = 3.0d0
    write(20,*) 'f(2) =', f(a), '  f(3) =', f(b)
    write(20,*) 'Opposite signs, so f(x) = 0 has a root in [2,3]'
    write(20,*)
    write(20,'(a)') ' Iteration NO.       a            b            Pn        |Pn-Pn-1|/|Pn|'
    n = 0
    pold = 0.0d0
    do
        n = n + 1
        p = (a + b)/2.0d0
        err = abs(p - pold)/abs(p)
        if (n == 1) then
            write(20,'(i8, 3f13.6, a)') n, a, b, p, '          ---'
        else
            write(20,'(i8, 3f13.6, es14.4)') n, a, b, p, err
        end if
        if ((b - a)/2.0d0 < 1.0d-4) exit
        if (f(a)*f(p) < 0.0d0) then
            b = p
        else
            a = p
        end if
        pold = p
    end do
    write(20,*)
    write(20,'(a, f10.6)') ' Approximate root = ', p
contains
    real(8) function f(x)
        real(8), intent(in) :: x
        f = x**3 - 4.0d0*x - 9.0d0
    end function f
end program a2q1
