const arr = [1,2,3,4,5,6,7,8];
let count = 0;

function binarySearch(arr, item) {
    let middle,
        start = 0,
        end = arr.length;
    while (start <= end) {
        count++;
        middle = Math.floor((start + end) / 2)
        if (arr[middle] === item) {
            return middle;
        }
        if (item < arr[middle]) {
            end = middle - 1
        } else {
            start = middle + 1
        }
    }
    return -1
}

console.log('Position = ', binarySearch(arr,9))
console.log('Count = ', count)