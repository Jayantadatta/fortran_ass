program a4q6
    implicit none
    integer :: n, k, m
    open(10, file='in4q6.txt')
    open(20, file='out4q6.txt')
    read(10,*) k
    write(20,'(a)') '    n          Mn   Prime?'
    do n = 0, k - 1
        m = 2**n - 1
        if (isprime(m)) then
            write(20,'(i5, i12, a)') n, m, '   Yes'
        else
            write(20,'(i5, i12, a)') n, m, '   No'
        end if
    end do
contains
    logical function isprime(m)
        integer, intent(in) :: m
        integer :: i
        isprime = (m >= 2)
        do i = 2, m - 1
            if (mod(m,i) == 0) isprime = .false.
        end do
    end function isprime
end program a4q6
