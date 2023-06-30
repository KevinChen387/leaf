with open("kad_list.txt", "w") as f:
    end_year = 2030   # >= 2020

    f.write("KAD List\nKAD = LAST MONTH + DATE NUMBER\n\n")
    m = 1
    y = 2020

    while y <= end_year:
        if m == 1:
            if y == 2020:
                kad = 14
            else:
                kad += 31
        if m == 2:
            if (y % 4 == 0 and y % 100 != 0 or y % 400 == 0):
                kad += 29
            else:
                kad += 28
        if m in [3, 5, 7, 8, 10, 12]:
            kad += 31
        if m in [4, 6, 9, 11]:
            kad += 30

        f.write("%d-%s: %d\n" % (y, str(m).zfill(2), kad))
        
        m += 1
        if m == 13:
            m = 1
            y += 1