function mergeSort(arr) {
    if (arr.length <2) {
        return arr;
    }
    const mid = Math.floor(arr.length/2);
    const lefArr = arr.slice(0, mid)
    const rightArr = arr.slice(mid)
    return merge(mergeSort(lefArr), mergeSort(rightArr));
}
function merge(lefArr, rightArr) {
    const result =[];
    while (lefArr.length && rightArr.length) {
        if (lefArr[0] < rightArr[0]) {
            result.push(lefArr.shift())
        }else(
            result.push(rightArr.shift())
        )
    }
    return [...result, ...lefArr, ...rightArr];
}

console.log(mergeSort([32,42,23,56,2,-1,5,-3]));

// another approach

/*
function mergeSort(arr) {
    // If the array has only one element, it's already sorted
    if (arr.length <= 1) {
        return arr;
    }

    // Divide the array into two halves
    const middle = Math.floor(arr.length / 2);
    const left = arr.slice(0, middle);
    const right = arr.slice(middle);

    // Recursively sort both halves
    return merge(mergeSort(left), mergeSort(right));
}

function merge(left, right) {
    let result = [];
    let leftIndex = 0;
    let rightIndex = 0;

    // Compare elements from both halves and merge them in sorted order
    while (leftIndex < left.length && rightIndex < right.length) {
        if (left[leftIndex] < right[rightIndex]) {
            result.push(left[leftIndex]);
            leftIndex++;
        } else {
            result.push(right[rightIndex]);
            rightIndex++;
        }
    }

    // If there are remaining elements in the left array, add them to the result
    return result.concat(left.slice(leftIndex)).concat(right.slice(rightIndex));
}

// Example usage:
const arr = [38, 27, 43, 3, 9, 82, 10];
console.log(mergeSort(arr)); // Output will be a sorted array
*/