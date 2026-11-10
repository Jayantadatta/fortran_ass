program a5q2
    implicit none
    integer :: i, j, n
    real(8) :: t, h, d(10,10), ex
    open(10, file='in_a5q2.txt')
    open(20, file='out_a5q2.txt')
    read(10,*) t, h, n
    write(20,'(a)') '      h        D(h)       Col 2        Col 3        Col 4'
    do i = 1, n
        d(i,1) = (q(t+h) - q(t-h))/(2*h)
        do j = 2, i
            d(i,j) = d(i,j-1) + (d(i,j-1) - d(i-1,j-1))/(4**(j-1) - 1)
        end do
        write(20,'(f8.4, 4f13.8)') h, (d(i,j), j = 1, i)
        h = h/2
    end do
    ex = 20*exp(-t/2)
    write(20,*)
    write(20,'(a, f10.4, a)') ' Approximate current at t = 4 s : ', d(n,n), ' mA'
    write(20,'(a, f10.4, a)') ' Exact current                  : ', ex, ' mA'
contains
    real(8) function q(z)
        real(8), intent(in) :: z
        q = 40*(1 - exp(-z/2))
    end function q
end program a5q2
