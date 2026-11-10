program a4q7
    implicit none
    integer :: n, nmax, h, m
    logical :: equal
    open(10, file='in4q7.txt')
    open(20, file='out4q7.txt')
    read(10,*) nmax
    write(20,'(a)') '    n          Hn          Mn   Hn = Mn?'
    equal = .true.
    do n = 1, nmax
        h = hanoi(n)
        m = 2**n - 1
        if (h /= m) equal = .false.
        write(20,'(i5, 2i12, 6x, l1)') n, h, m, (h == m)
    end do
    write(20,*)
    if (equal) then
        write(20,*) 'Hn = Mn for every n. Both sequences are equal to 2^n - 1.'
    else
        write(20,*) 'Hn and Mn are not equal for every n.'
    end if
contains
    recursive integer function hanoi(k) result(r)
        integer, intent(in) :: k
        if (k == 1) then
            r = 1
        else
            r = 2*hanoi(k-1) + 1
        end if
    end function hanoi
end program a4q7
