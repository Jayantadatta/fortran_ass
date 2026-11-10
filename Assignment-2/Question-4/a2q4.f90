program a2q4
    implicit none
    integer :: n
    real(8) :: pold, p, err
    open(20, file='out2q4.txt')
    write(20,'(a)') ' Iteration NO.     Pn-1          Pn        |Pn-Pn-1|/|Pn|'
    pold = 0.5d0
    n = 0
    do
        n = n + 1
        p = g(pold)
        err = abs(p - pold)/abs(p)
        write(20,'(i8, 2f13.6, es16.4)') n, pold, p, err
        if (abs(p - pold) < 1.0d-4) exit
        pold = p
    end do
    write(20,*)
    write(20,'(a, f10.5)') ' Approximate root = ', p
contains
    real(8) function g(x)
        real(8), intent(in) :: x
        g = 1.0d0/(1.0d0 + x*x)
    end function g
end program a2q4
