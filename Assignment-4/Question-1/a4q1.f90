program a4q1
    implicit none
    integer :: i
    logical :: f, b, c, r1, r2, same
    open(20, file='out4q1.txt')
    write(20,*) 'F = fever, B = breathing trouble, C = chest pain'
    write(20,*) 'Rule 1 : (F and B) or (F and C) or (B and C)'
    write(20,*) 'Rule 2 : (F and B) or (C and (F or B))'
    write(20,*)
    write(20,'(a)') '  Fever Breath  Chest  Rule1  Rule2'
    same = .true.
    do i = 0, 7
        f = (i < 4)
        b = (mod(i,4) < 2)
        c = (mod(i,2) == 0)
        r1 = (f .and. b) .or. (f .and. c) .or. (b .and. c)
        r2 = (f .and. b) .or. (c .and. (f .or. b))
        write(20,'(5l7)') f, b, c, r1, r2
        if (r1 .neqv. r2) same = .false.
    end do
    write(20,*)
    if (same) then
        write(20,*) 'Rule 1 and Rule 2 are logically equivalent.'
    else
        write(20,*) 'Rule 1 and Rule 2 are NOT logically equivalent.'
    end if
end program a4q1
