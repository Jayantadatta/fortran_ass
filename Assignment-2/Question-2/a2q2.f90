program a2q2
    implicit none
    integer :: n
    real(8) :: x0, x1, x2
    open(20, file='out2q2.txt')
    x0 = 0.0d0
    x1 = 1.0d0
    write(20,'(a)') ' Iteration NO.    x(n-1)        x(n)        x(n+1)       f(x(n+1))    |x(n+1)-x(n)|'
    n = 0
    do
        n = n + 1
        x2 = x1 - f(x1)*(x1 - x0)/(f(x1) - f(x0))
        write(20,'(i8, 4f13.8, es14.4)') n, x0, x1, x2, f(x2), abs(x2 - x1)
        if (abs(x2 - x1) < 0.5d-6) exit
        x0 = x1
        x1 = x2
    end do
    write(20,*)
    write(20,'(a, f10.6)') ' Root (six decimal places) = ', x2
contains
    real(8) function f(x)
        real(8), intent(in) :: x
        f = exp(-x) - x
    end function f
end program a2q2
