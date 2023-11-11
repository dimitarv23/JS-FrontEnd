function getEveryNthElement(arr, repeatStep) {
    const output = [];

    for (let i = 0; i < arr.length; i += repeatStep) {
        output.push(arr[i]);
    }

    return output;
}

const test1 = getEveryNthElement(["5", "20", "31", "4", "20"], 2);
console.log(test1);

const test2 = getEveryNthElement(["dsa", "asd", "test", "tset"], 2);
console.log(test2);

const test3 = getEveryNthElement(["1", "2", "3", "4", "5"], 6);
console.log(test3);
