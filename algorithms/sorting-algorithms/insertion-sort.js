//with while loop
function insertionSort(arr) {
    for (let i = 1; i < arr.length; i++) {
        let numberToInsert = arr[i];
        let j = i-1;
        while (j>=0 && arr[j]>numberToInsert) {
            arr[j+1] = arr[j];
            j = j-1;
        }
        arr[j+1] = numberToInsert;
    } 
    return arr;
}

console.log(insertionSort([32,42,23,56,2,-1,5,-3]));
//big-O = O(n^2)