program a3q1
    implicit none
    integer :: i, j, n
    real(8) :: x(10), d(10,10), xp, h, p, term, res
    open(10, file='in_a3q1.txt')
    open(20, file='out_a3q1.txt')
    read(10,*) n, xp
    do i = 1, n
        read(10,*) x(i), d(i,1)
    end do
    do j = 2, n
        do i = 1, n - j + 1
            d(i,j) = d(i+1,j-1) - d(i,j-1)
        end do
    end do
    write(20,*) 'Forward difference table'
    write(20,'(a)') '    Year          y         dy        d2y        d3y        d4y        d5y'
    do i = 1, n
        write(20,'(f8.1, 6f11.4)') x(i), (d(i,j), j = 1, n - i + 1)
    end do
    h = x(2) - x(1)
    p = (xp - x(1))/h
    res = d(1,1)
    term = 1.0d0
    do j = 2, n
        term = term*(p - (j - 2))/(j - 1)
        res = res + term*d(1,j)
    end do
    write(20,*)
    write(20,'(a, f8.4)') ' p = (x - x0)/h = ', p
    write(20,'(a, f8.1, a, f10.4, a)') ' GDP in the year ', xp, ' = ', res, ' billion USD'
end program a3q1
