program a5q3
    implicit none
    integer :: i, n
    real(8) :: t(20), s(20), h
    open(10, file='in_a5q3.txt')
    open(20, file='out_a5q3.txt')
    read(10,*) n
    read(10,*) (t(i), s(i), i = 1, n)
    h = t(2) - t(1)
    write(20,'(a)') '   t (s)   s (m)'
    do i = 1, n
        write(20,'(f8.2, f8.2)') t(i), s(i)
    end do
    write(20,*)
    write(20,'(a, f9.4, a)') ' Velocity at t = 0 s       : ', (-3*s(1) + 4*s(2) - s(3))/(2*h), ' m/s'
    write(20,'(a, f9.4, a)') ' Velocity at t = 1.2 s     : ', (3*s(n) - 4*s(n-1) + s(n-2))/(2*h), ' m/s'
    write(20,'(a, f9.4, a)') ' Acceleration at t = 0 s   : ', (2*s(1) - 5*s(2) + 4*s(3) - s(4))/h**2, ' m/s^2'
    write(20,'(a, f9.4, a)') ' Acceleration at t = 1.2 s : ', (2*s(n) - 5*s(n-1) + 4*s(n-2) - s(n-3))/h**2, ' m/s^2'
end program a5q3
