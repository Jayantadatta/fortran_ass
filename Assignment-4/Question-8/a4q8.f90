program a4q8
    implicit none
    integer :: n, days
    real(8) :: pop, k, i0, x
    open(10, file='in4q8.txt')
    open(20, file='out4q8.txt')
    read(10,*) pop, k, i0, days
    write(20,'(a)') '  Day             In    Percentage heard'
    do n = 1, days
        x = rumor(n)
        write(20,'(i5, f16.4, f14.4, a)') n, x, x/pop*100.0d0, ' %'
    end do
contains
    recursive real(8) function rumor(m) result(r)
        integer, intent(in) :: m
        real(8) :: prev
        if (m == 0) then
            r = i0
        else
            prev = rumor(m-1)
            r = prev + k*prev*(pop - prev)/pop
        end if
    end function rumor
end program a4q8
