function printSmallestNum(...nums) {
    let smallestNum = nums[0];

    nums.slice(1).forEach((num) => {
        if (num < smallestNum) {
            smallestNum = num;
        }
    });

    console.log(smallestNum);
}

printSmallestNum(2, 5, 3);
printSmallestNum(600, 342, 123);
printSmallestNum(25, 21, 4);
printSmallestNum(2, 2, 2);
