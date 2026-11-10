program a1q6
    implicit none
    integer :: a, b, n, i, g, x(20)
    open(10, file='in1q6.txt')
    open(20, file='out1q6.txt')
    read(10,*) a, b
    write(20,*) '6(i)  gcd(', a, ',', b, ') =', gcd(a, b)
    read(10,*) n
    read(10,*) (x(i), i = 1, n)
    g = x(1)
    do i = 2, n
        g = gcd(g, x(i))
    end do
    write(20,*)
    write(20,*) '6(ii) Numbers:', (x(i), i = 1, n)
    write(20,*) 'GCD of all the numbers =', g
contains
    recursive integer function gcd(p, q) result(g2)
        integer, intent(in) :: p, q
        if (mod(p,q) == 0) then
            g2 = q
        else
            g2 = gcd(q, mod(p,q))
        end if
    end function gcd
end program a1q6
