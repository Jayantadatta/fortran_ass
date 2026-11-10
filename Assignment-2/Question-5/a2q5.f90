program a2q5
    implicit none
    integer :: i, n
    real(8) :: x0(4), pold, p, err
    open(20, file='out2q5.txt')
    x0(1) = 0.0d0
    x0(2) = -1.0d0
    x0(3) = 2.0d0
    x0(4) = -2.5d0
    do i = 1, 4
        write(20,'(a, f6.2)') ' Initial guess x0 = ', x0(i)
        write(20,'(a)') ' Iteration NO.     Pn-1          Pn        |Pn-Pn-1|/|Pn|'
        pold = x0(i)
        n = 0
        do
            n = n + 1
            p = pold - f(pold)/df(pold)
            err = abs(p - pold)/abs(p)
            write(20,'(i8, 2f13.6, es16.4)') n, pold, p, err
            if (abs(p - pold) < 0.5d-5) exit
            pold = p
        end do
        write(20,'(a, f10.5)') ' Root = ', p
        write(20,*)
    end do
contains
    real(8) function f(x)
        real(8), intent(in) :: x
        f = exp(x) - 3.0d0*x
    end function f
    real(8) function df(x)
        real(8), intent(in) :: x
        df = exp(x) - 3.0d0
    end function df
end program a2q5
