function rotateArray(arr, count) {
    for (let i = 0; i < count; i++) {
        const firstEl = arr[0];

        arr.splice(0, 1);
        arr.push(firstEl);
    }

    console.log(arr.join(" "));
}

rotateArray([51, 47, 32, 61, 21], 2);
rotateArray([32, 21, 61, 1], 4);
rotateArray([2, 4, 15, 31], 5);
