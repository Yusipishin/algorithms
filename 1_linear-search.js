const arr = [11, 43, 6, 23, 43, 5, 2, 6, 3];
let count = 0;

function linearSearch(arr, item) {
    for (let i = 0; i < arr.length; i++) {
        count++;
        if (arr[i] === item) return i
    }
    return null;
}

console.log(linearSearch(arr, 2))
console.log('Count = ', count)

