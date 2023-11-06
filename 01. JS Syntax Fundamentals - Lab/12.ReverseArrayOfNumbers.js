function reverseArray(n, arr) {
    const slicedArr = arr.slice(0, n);

    console.log(slicedArr.reverse());
}

reverseArray(3, [10, 20, 30, 40, 50]);
reverseArray(4, [-1, 20, 99, 5]);
reverseArray(2, [66, 43, 75, 89, 47]);
