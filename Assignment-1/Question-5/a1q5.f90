program a1q5
    implicit none
    integer :: i, k, n(20)
    open(10, file='in1q5.txt')
    open(20, file='out1q5.txt')
    read(10,*) k
    read(10,*) (n(i), i = 1, k)
    write(20,*) '     n    mu(n)'
    do i = 1, k
        write(20,'(2i8)') n(i), mobius(n(i))
    end do
contains
    integer function mobius(m)
        integer, intent(in) :: m
        integer :: r, p, c
        r = m
        c = 0
        do p = 2, m
            if (mod(r,p) == 0) then
                r = r/p
                if (mod(r,p) == 0) then
                    mobius = 0
                    return
                end if
                c = c + 1
            end if
        end do
        mobius = (-1)**c
    end function mobius
end program a1q5
