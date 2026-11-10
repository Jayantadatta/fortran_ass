program a5q4
    implicit none
    integer :: n, i, wt(0:5)
    real(8) :: a, b, h, y, t, s, u, w, ex
    data wt /2, 5, 1, 6, 1, 5/
    open(10, file='in_a5q4.txt')
    open(20, file='out_a5q4.txt')
    read(10,*) a, b, n
    h = (b - a)/n
    ex = 60*log(6.76d0)
    t = f(a) + f(b)
    s = t
    u = t
    w = t
    do i = 1, n - 1
        y = f(a + i*h)
        t = t + 2*y
        if (mod(i,2) == 1) s = s + 4*y
        if (mod(i,2) == 0) s = s + 2*y
        if (mod(i,3) == 0) u = u + 2*y
        if (mod(i,3) /= 0) u = u + 3*y
        w = w + wt(mod(i,6))*y
    end do
    t = h/2*t
    s = h/3*s
    u = 3*h/8*u
    w = 3*h/10*w
    write(20,'(a)') ' Method              Value       Abs Error     % Error'
    write(20,'(a, 3f14.8)') ' Trapezoidal      ', t, abs(ex - t), abs(ex - t)/ex*100
    write(20,'(a, 3f14.8)') ' Simpson 1/3      ', s, abs(ex - s), abs(ex - s)/ex*100
    write(20,'(a, 3f14.8)') ' Simpson 3/8      ', u, abs(ex - u), abs(ex - u)/ex*100
    write(20,'(a, 3f14.8)') ' Weddle           ', w, abs(ex - w), abs(ex - w)/ex*100
    write(20,'(a, f14.8)') ' Exact            ', ex
contains
    real(8) function f(z)
        real(8), intent(in) :: z
        f = 120*z/(1 + z*z)
    end function f
end program a5q4
