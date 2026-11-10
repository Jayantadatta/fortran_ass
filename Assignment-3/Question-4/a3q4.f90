program a3q4
    implicit none
    integer :: i, j
    real(8) :: x(0:4), y(0:4), xp, l, res, ex
    open(10, file='in_a3q4.txt')
    open(20, file='out_a3q4.txt')
    read(10,*) xp
    write(20,*) '(a) Function values at the interpolation points'
    write(20,'(a)') '   i      xi        f(xi)'
    do i = 0, 4
        x(i) = 0.5d0*i
        y(i) = f(x(i))
        write(20,'(i4, f9.2, f14.8)') i, x(i), y(i)
    end do
    res = 0.0d0
    do i = 0, 4
        l = 1.0d0
        do j = 0, 4
            if (j /= i) l = l*(xp - x(j))/(x(i) - x(j))
        end do
        res = res + l*y(i)
    end do
    ex = f(xp)
    write(20,*)
    write(20,'(a, f6.2, a, f14.8)') ' (b) Approximate f(', xp, ') =', res
    write(20,'(a, f6.2, a, f14.8)') ' (c) Exact f(', xp, ')       =', ex
    write(20,'(a, es14.4)') ' (d) Absolute error        =', abs(ex - res)
contains
    real(8) function f(t)
        real(8), intent(in) :: t
        f = 0.3d0*t*exp(0.15d0*t*t)
    end function f
end program a3q4
