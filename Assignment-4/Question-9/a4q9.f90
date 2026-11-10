program a4q9
    implicit none
    integer :: n, nmax
    real(8) :: p
    open(10, file='in4q9.txt')
    open(20, file='out4q9.txt')
    read(10,*) p, nmax
    write(20,'(a)') ' Layer n   Crates n^2   Total crates Tn   Total cost Cn ($)'
    do n = 1, nmax
        write(20,'(i8, i12, i17, f20.2)') n, n*n, crates(n), cost(n)
    end do
contains
    recursive integer function crates(m) result(t)
        integer, intent(in) :: m
        if (m == 1) then
            t = 1
        else
            t = crates(m-1) + m*m
        end if
    end function crates
    recursive real(8) function cost(m) result(c)
        integer, intent(in) :: m
        if (m == 1) then
            c = p
        else
            c = cost(m-1) + p*m*m
        end if
    end function cost
end program a4q9
