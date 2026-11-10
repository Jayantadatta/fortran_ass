program a4q3
    implicit none
    integer :: i
    logical :: p, q, imp, bic, other, same
    open(20, file='out4q3.txt')
    write(20,'(a)') '       p       q    p->q   p<->q  (p^q)v(~p^~q)'
    same = .true.
    do i = 0, 3
        p = (i < 2)
        q = (mod(i,2) == 0)
        imp = (.not. p) .or. q
        bic = (p .eqv. q)
        other = (p .and. q) .or. ((.not. p) .and. (.not. q))
        write(20,'(4l8, l15)') p, q, imp, bic, other
        if (bic .neqv. other) same = .false.
    end do
    write(20,*)
    if (same) then
        write(20,*) 'p <-> q and (p ^ q) v (~p ^ ~q) are equal in every row, so they are equivalent.'
    else
        write(20,*) 'p <-> q and (p ^ q) v (~p ^ ~q) are not equivalent.'
    end if
end program a4q3
