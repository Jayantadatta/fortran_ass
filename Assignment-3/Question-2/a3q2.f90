program a3q2
    implicit none
    integer :: i, j, n
    real(8) :: x(10), d(10,10), xp, h, p, term, res
    open(10, file='in_a3q2.txt')
    open(20, file='out_a3q2.txt')
    read(10,*) n, xp
    do i = 1, n
        read(10,*) x(i), d(i,1)
    end do
    do j = 2, n
        do i = 1, n - j + 1
            d(i,j) = d(i+1,j-1) - d(i,j-1)
        end do
    end do
    write(20,*) 'Backward difference table'
    write(20,'(a)') '  Years         y        del y     del2 y     del3 y     del4 y'
    do i = 1, n
        write(20,'(f7.1, 5f11.2)') x(i), (d(i-j+1,j), j = 1, i)
    end do
    h = x(2) - x(1)
    p = (xp - x(n))/h
    res = d(n,1)
    term = 1.0d0
    do j = 2, n
        term = term*(p + (j - 2))/(j - 1)
        res = res + term*d(n-j+1,j)
    end do
    write(20,*)
    write(20,'(a, f8.4)') ' p = (x - xn)/h = ', p
    write(20,'(a, f5.2, a, f12.2)') ' Maturity value for ', xp, ' years = Tk. ', res
end program a3q2
