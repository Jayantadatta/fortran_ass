program a2q3
    implicit none
    integer :: n
    real(8) :: a, b, p, pold
    open(20, file='out2q3.txt')
    a = 1.0d0
    b = 2.0d0
    write(20,*) 'f(1) =', f(a), '  f(2) =', f(b)
    write(20,*) 'Opposite signs, so f(x) = 0 has a root in [1,2]'
    write(20,*)
    write(20,'(a)') ' Iteration NO.       a            b            Pn         |Pn-Pn-1|'
    n = 0
    pold = 0.0d0
    do
        n = n + 1
        p = (a*f(b) - b*f(a))/(f(b) - f(a))
        if (n == 1) then
            write(20,'(i8, 3f13.6, a)') n, a, b, p, '          ---'
        else
            write(20,'(i8, 3f13.6, es14.4)') n, a, b, p, abs(p - pold)
        end if
        if (n > 1 .and. abs(p - pold) < 1.0d-5) exit
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
        f = log(x) + x*x - 3.0d0
    end function f
end program a2q3
