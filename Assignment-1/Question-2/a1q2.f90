program a1q2
    implicit none
    character(len=80) :: s
    character(len=1) :: c(80), m(80), d(80), ch
    integer :: i, n, k, up, low, vow, con, dig, blank
    logical :: pal
    open(10, file='in1q2.txt')
    open(20, file='out1q2.txt')
    read(10,'(a)') s
    n = len_trim(s)
    do i = 1, n
        c(i) = s(i:i)
    end do
    up = 0
    low = 0
    vow = 0
    con = 0
    dig = 0
    blank = 0
    k = 0
    do i = 1, n
        ch = c(i)
        m(i) = ch
        if (ch >= 'A' .and. ch <= 'Z') up = up + 1
        if (ch >= 'a' .and. ch <= 'z') low = low + 1
        if (ch >= '0' .and. ch <= '9') dig = dig + 1
        if (ch == ' ') blank = blank + 1
        if (index('AEIOUaeiou', ch) > 0) then
            vow = vow + 1
            m(i) = '*'
        else if ((ch >= 'A' .and. ch <= 'Z') .or. (ch >= 'a' .and. ch <= 'z')) then
            con = con + 1
        end if
        if (ch /= ' ') then
            k = k + 1
            d(k) = ch
            if (ch >= 'A' .and. ch <= 'Z') d(k) = achar(iachar(ch) + 32)
        end if
    end do
    pal = .true.
    do i = 1, k/2
        if (d(i) /= d(k+1-i)) pal = .false.
    end do
    write(20,*) '(i) The name as it appears:'
    write(20,'(80a1)') (c(i), i = 1, n)
    write(20,*) 'The name in reverse order:'
    write(20,'(80a1)') (c(i), i = n, 1, -1)
    write(20,*)
    write(20,*) '(ii) Uppercase letters =', up
    write(20,*) '     Lowercase letters =', low
    write(20,*) '     Vowels            =', vow
    write(20,*) '     Consonants        =', con
    write(20,*) '     Digits            =', dig
    write(20,*) '     Blank spaces      =', blank
    write(20,*)
    write(20,*) '(iii) Name with every vowel replaced by *:'
    write(20,'(80a1)') (m(i), i = 1, n)
    write(20,*)
    if (pal) then
        write(20,*) '(iv) The name is a palindrome.'
    else
        write(20,*) '(iv) The name is not a palindrome.'
    end if
end program a1q2
