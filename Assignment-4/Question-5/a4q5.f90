program a4q5
    implicit none
    integer :: n, nmax, h
    real(8) :: sec, price, tmin, cost
    open(10, file='in4q5.txt')
    open(20, file='out4q5.txt')
    read(10,*) nmax, sec, price
    write(20,'(a)') '    n          Hn    Time (min)    Cost ($)'
    do n = 1, nmax
        h = hanoi(n)
        tmin = h*sec/60.0d0
        cost = h*price
        write(20,'(i5, i12, f14.2, f12.2)') n, h, tmin, cost
    end do
contains
    recursive integer function hanoi(m) result(r)
        integer, intent(in) :: m
        if (m == 1) then
            r = 1
        else
            r = 2*hanoi(m-1) + 1
        end if
    end function hanoi
end program a4q5
