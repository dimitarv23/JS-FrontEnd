function sortNumbers(nums) {
    let outputArr = [];
    let index = 1;

    while (nums.length > 0) {
        let num;

        if (index % 2 == 0) {
            num = Math.max.apply(null, nums);
        } else {
            num = Math.min.apply(null, nums);
        }

        outputArr.push(num);
        const numIndex = nums.indexOf(num);
        nums.splice(numIndex, 1);

        index++;
    }

    return outputArr;
}

const test1 = sortNumbers([1, 65, 3, 52, 48, 63, 31, -3, 18, 56]);
console.log(test1);
