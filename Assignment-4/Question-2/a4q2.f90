program a4q2
    implicit none
    integer :: i
    logical :: w, h, ac, va, vb, taut
    open(20, file='out4q2.txt')
    write(20,*) 'W = room is warm, H = someone is home, AC = AC is turned on'
    write(20,*) 'Version A : AC -> (W and H)'
    write(20,*) 'Version B : (not W or not H) -> not AC'
    write(20,*)
    write(20,'(a)') '      W      H     AC      A      B  A<->B'
    taut = .true.
    do i = 0, 7
        w = (i < 4)
        h = (mod(i,4) < 2)
        ac = (mod(i,2) == 0)
        va = (.not. ac) .or. (w .and. h)
        vb = (.not. ((.not. w) .or. (.not. h))) .or. (.not. ac)
        write(20,'(6l7)') w, h, ac, va, vb, (va .eqv. vb)
        if (va .neqv. vb) taut = .false.
    end do
    write(20,*)
    if (taut) then
        write(20,*) 'A <-> B is true in every row, so it is a tautology.'
    else
        write(20,*) 'A <-> B is not a tautology.'
    end if
end program a4q2
