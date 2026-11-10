program a4q11
    implicit none
    integer :: a, b, n, r
    integer(8) :: c, v, total
    open(10, file='in4q11.txt')
    open(20, file='out4q11.txt')
    read(10,*) a, b, n
    write(20,*) 'Expansion of (a + b)^n  with  a =', a, ' b =', b, ' n =', n
    write(20,'(a)') '    r   Term Tn+1   Coefficient C(n,r)   Value of term'
    total = 0
    do r = 0, n
        c = fact(n)/(fact(r)*fact(n-r))
        v = c*int(a,8)**(n-r)*int(b,8)**r
        total = total + v
        write(20,'(i5, i9, i18, i18)') r, r + 1, c, v
    end do
    write(20,*)
    write(20,*) 'Sum of all terms =', total, '   (a+b)^n =', int(a+b,8)**n
contains
    recursive integer(8) function fact(m) result(f)
        integer, intent(in) :: m
        if (m <= 1) then
            f = 1
        else
            f = m*fact(m-1)
        end if
    end function fact
end program a4q11
