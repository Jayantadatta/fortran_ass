program a1q4
    implicit none
    integer :: n, tau, sigma, count
    open(10, file='in1q4.txt')
    open(20, file='out1q4.txt')
    read(10,*) n
    call divisors(n, tau, sigma)
    write(20,*) '4(i)  n =', n
    write(20,*) 'Number of divisors (tau)  =', tau
    write(20,*) 'Sum of divisors (sigma)   =', sigma
    write(20,*)
    write(20,*) '4(ii) First 4 perfect numbers:'
    count = 0
    n = 1
    do while (count < 4)
        call divisors(n, tau, sigma)
        if (sigma == 2*n) then
            write(20,*) n
            count = count + 1
        end if
        n = n + 1
    end do
contains
    subroutine divisors(m, t, s)
        integer, intent(in) :: m
        integer, intent(out) :: t, s
        integer :: i
        t = 0
        s = 0
        do i = 1, m
            if (mod(m,i) == 0) then
                t = t + 1
                s = s + i
            end if
        end do
    end subroutine divisors
end program a1q4
