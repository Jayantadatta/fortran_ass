program a4q4
    implicit none
    integer :: i
    logical :: p, q, r1, r2, lhs, same
    open(20, file='out4q4.txt')
    write(20,'(a)') '         p         q     p<->q  ~(p<->q)        ~q    p<->~q'
    same = .true.
    do i = 0, 3
        p = (i < 2)
        q = (mod(i,2) == 0)
        call bicond(p, q, r1)
        call bicond(p, .not. q, r2)
        lhs = .not. r1
        write(20,'(6l10)') p, q, r1, lhs, .not. q, r2
        if (lhs .neqv. r2) same = .false.
    end do
    write(20,*)
    if (same) then
        write(20,*) '~(p <-> q) and p <-> ~q are equal in every row, so they are equivalent.'
    else
        write(20,*) '~(p <-> q) and p <-> ~q are not equivalent.'
    end if
contains
    subroutine bicond(a, b, r)
        logical, intent(in) :: a, b
        logical, intent(out) :: r
        r = (a .and. b) .or. ((.not. a) .and. (.not. b))
    end subroutine bicond
end program a4q4
