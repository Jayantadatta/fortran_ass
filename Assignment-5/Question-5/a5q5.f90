program a5q5
    implicit none
    integer :: i, j, k
    real(8) :: a, b, h, s, tol, r(8,8), ex, pi
    open(10, file='in_a5q5.txt')
    open(20, file='out_a5q5.txt')
    read(10,*) a, b, tol
    pi = 4*atan(1.0d0)
    ex = sqrt(2.0d0)*(pi**2/32 + pi/4 - 1)
    r(1,1) = (b - a)/2*(f(a) + f(b))
    write(20,'(a)') ' Romberg table'
    write(20,'(i3, f13.8)') 1, r(1,1)
    do k = 2, 8
        h = (b - a)/2**(k-1)
        s = 0
        do i = 1, 2**(k-2)
            s = s + f(a + (2*i-1)*h)
        end do
        r(k,1) = r(k-1,1)/2 + h*s
        do j = 2, k
            r(k,j) = r(k,j-1) + (r(k,j-1) - r(k-1,j-1))/(4**(j-1) - 1)
        end do
        write(20,'(i3, 6f13.8)') k, (r(k,j), j = 1, k)
        if (abs(r(k,k) - r(k-1,k-1)) < tol) exit
    end do
    write(20,*)
    write(20,'(a, f10.5, a)') ' Romberg value E = ', r(k,k), ' J'
    write(20,'(a, f10.5, a)') ' Exact value   E = ', ex, ' J'
    write(20,'(a, es12.4)') ' Absolute error   = ', abs(ex - r(k,k))
contains
    real(8) function f(z)
        real(8), intent(in) :: z
        f = z*z*cos(z)
    end function f
end program a5q5
