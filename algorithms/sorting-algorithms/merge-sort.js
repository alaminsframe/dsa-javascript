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
