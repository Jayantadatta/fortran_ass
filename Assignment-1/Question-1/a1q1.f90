program a1q1
    implicit none
    integer :: a(4,4), b(4,4), i, j
    open(10, file='in1q1.txt')
    open(20, file='out1q1.txt')
    do i = 1, 4
        read(10,*) (a(i,j), j = 1, 4)
    end do
    b = a
    do i = 1, 4
        do j = 1, 4
            if (i == 1 .or. i == 4 .or. j == 1 .or. j == 4) b(i,j) = 0
        end do
    end do
    write(20,*) '(i) Matrix A'
    do i = 1, 4
        write(20,'(4i4)') (a(i,j), j = 1, 4)
    end do
    write(20,*)
    write(20,*) '(ii) Elements of the even rows'
    do i = 2, 4, 2
        write(20,'(4i4)') (a(i,j), j = 1, 4)
    end do
    write(20,*)
    write(20,*) '(iii) Elements of 1st row, 1st column, 4th row and 4th column'
    do i = 1, 4
        do j = 1, 4
            if (i == 1 .or. i == 4 .or. j == 1 .or. j == 4) then
                write(20,'(i4)', advance='no') a(i,j)
            else
                write(20,'(4x)', advance='no')
            end if
        end do
        write(20,*)
    end do
    write(20,*)
    write(20,*) '(iv) Matrix B (boundary elements replaced by 0)'
    do i = 1, 4
        write(20,'(4i4)') (b(i,j), j = 1, 4)
    end do
end program a1q1
