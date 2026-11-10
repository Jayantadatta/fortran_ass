program a5q1
    implicit none
    integer :: k
    real(8) :: t, h, g, a, ex
    open(10, file='in_a5q1.txt')
    open(20, file='out_a5q1.txt')
    read(10,*) t, h, g
    ex = vel(t)
    write(20,*) 'Displacement values used (h = 0.25)'
    write(20,'(a)') '       t          x(t)'
    do k = -1, 2
        write(20,'(f10.4, f14.8)') t + k*h, x(t + k*h)
    end do
    write(20,*)
    write(20,*) 'Displacement values used (h = 0.50)'
    write(20,'(a)') '       t          x(t)'
    do k = -2, 4
        write(20,'(f10.4, f14.8)') t + k*g, x(t + k*g)
    end do
    write(20,*)
    write(20,'(a)') ' Method                   h      Approx v(2)    Exact v(2)     Abs Error'
    a = (x(t+h) - x(t-h))/(2*h)
    write(20,'(a, f6.2, 3f14.8)') ' Three-point midpoint ', h, a, ex, abs(ex - a)
    a = (-3*x(t) + 4*x(t+h) - x(t+2*h))/(2*h)
    write(20,'(a, f6.2, 3f14.8)') ' Three-point endpoint ', h, a, ex, abs(ex - a)
    a = (x(t-2*g) - 8*x(t-g) + 8*x(t+g) - x(t+2*g))/(12*g)
    write(20,'(a, f6.2, 3f14.8)') ' Five-point midpoint  ', g, a, ex, abs(ex - a)
    a = (-25*x(t) + 48*x(t+g) - 36*x(t+2*g) + 16*x(t+3*g) - 3*x(t+4*g))/(12*g)
    write(20,'(a, f6.2, 3f14.8)') ' Five-point endpoint  ', g, a, ex, abs(ex - a)
contains
    real(8) function x(z)
        real(8), intent(in) :: z
        x = 8*exp(-z/4)*cos(2*z)
    end function x
    real(8) function vel(z)
        real(8), intent(in) :: z
        vel = 8*exp(-z/4)*(-cos(2*z)/4 - 2*sin(2*z))
    end function vel
end program a5q1
