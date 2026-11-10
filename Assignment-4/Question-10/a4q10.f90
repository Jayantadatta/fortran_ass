program a4q10
    implicit none
    integer :: n, nmax
    integer(8) :: a(0:100)
    real(8) :: ex
    open(10, file='in4q10.txt')
    open(20, file='out4q10.txt')
    read(10,*) a(0), a(1), nmax
    do n = 2, nmax
        a(n) = 2*a(n-1) - a(n-2) + 3
    end do
    write(20,'(a)') '    n          an     Exact an    Difference'
    do n = 1, nmax
        ex = 1.5d0*n*n + 2.5d0*n + 1.0d0
        write(20,'(i5, i12, f14.2, f12.2)') n, a(n), ex, a(n) - ex
    end do
end program a4q10
