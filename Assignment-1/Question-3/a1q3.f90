program a1q3
    implicit none
    real(8) :: a(7,7)
    integer :: i, j
    open(11, file='a1q3_F.txt')
    open(12, file='a1q3_E.txt')
    open(13, file='a1q3_ES.txt')
    open(20, file='out1q3.txt')
    call random_number(a)
    do i = 1, 7
        write(11,'(7f15.10)') (a(i,j), j = 1, 7)
        write(12,'(7e16.8)') (a(i,j), j = 1, 7)
        write(13,'(7es15.7)') (a(i,j), j = 1, 7)
    end do
    write(20,*) 'Mean    =', sum(a)/49.0d0
    write(20,*) 'Maximum =', maxval(a)
    write(20,*) 'Minimum =', minval(a)
end program a1q3
