program a3q3
    implicit none
    integer :: i, j, n
    real(8) :: x(10), dd(10,10), xp, term, res
    open(10, file='in_a3q3.txt')
    open(20, file='out_a3q3.txt')
    read(10,*) n, xp
    do i = 1, n
        read(10,*) x(i), dd(i,1)
    end do
    do j = 2, n
        do i = 1, n - j + 1
            dd(i,j) = (dd(i+1,j-1) - dd(i,j-1))/(x(i+j-1) - x(i))
        end do
    end do
    write(20,*) 'Divided difference table'
    write(20,'(a)') '     x        f(x)        1st DD      2nd DD      3rd DD      4th DD'
    do i = 1, n
        write(20,'(f7.2, 5f12.6)') x(i), (dd(i,j), j = 1, n - i + 1)
    end do
    write(20,*)
    write(20,*) 'P(x) = f[x0] + f[x0,x1](x-x0) + f[x0,x1,x2](x-x0)(x-x1) + ...'
    write(20,'(a, 5f12.6)') ' Coefficients:', (dd(1,j), j = 1, n)
    res = dd(1,1)
    term = 1.0d0
    do j = 2, n
        term = term*(xp - x(j-1))
        res = res + dd(1,j)*term
    end do
    write(20,*)
    write(20,'(a, f5.2, a, f10.5, a)') ' Exchange rate at x = ', xp, ' hours : ', res, ' Tk./USD'
end program a3q3
