function isYearLeap(year) {
    const firstCondition = year % 4 == 0 && year % 100 != 0;
    const secondCondition = year % 400 == 0;

    if (firstCondition || secondCondition) {
        console.log("yes");
    } else {
        console.log("no");
    }
}

isYearLeap(1984);
isYearLeap(2003);
isYearLeap(4);
