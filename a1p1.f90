program q1
implicit none
integer::A(4,4),B(4,4),i,j

! opening file
open(11,file='in1q1.txt',status='old')
!reading it
    do i=1,4
        read(11,*)(A(i,j),j=1,4)
    end do
close(11)
! creating output file
open(20,file='out1q1.txt',status='replace')
! i
write(20,*)'Matrix:'
    do i=1,4
        write(20,*)(A(i,j),j=1,4)
    end do
! ii
write(20,*)'Row is even here:'
    do i=2,4,2
        write(20,*)(A(i,j),j=1,4)
    end do
! iii
write(20,*)'1st row and 1st column,4th row and 4th column'
    do i=1,4
        do j=1,4
            if (i==1 .or. j==1 .or. i==4 .or. j==4)then
                write(20,'(I5)',Advance='No')A(i,j)
            else
                write(20,'(A5)', Advance='No') ' '
            end if
        end do
        write(20,*)
    end do
! iv
write(20,*)'making all boundary elements 0'
    B=A
    do i=1,4
        do j=1,4
            if (i==1 .or. j==1 .or. i==4 .or. j==4)then
                B(i,j)=0
            end if
        end do
    end do
    do i=1,4
    write(20,*)(B(i,j),j=1,4)
    end do
end program
