//with while loop
function insertionSort(arr) {
    for (let i = 1; i < arr.length; i++) {
        let numberToInsert  = arr[i];
        let j = i-1;
        while (j>=0 && arr[j]>numberToInsert) {
            arr[j+1] = arr[j];
            j = j-1;
        }
        arr[j+1] = numberToInsert;
    }
    return arr;
}


// //with for loop
// function insertionSort(arr) {
//     let n = arr.length;
//     for (let i = 0; i < n; i++) {
//         for (let j = 0; j < n-i-1; j++) {
//             if (arr[j]>arr[j+1]) {
//                 [arr[j],arr[j+1]] = [arr[j+1],arr[j]];
//             }
//         }
//     }
//     return arr;
// }
console.log(insertionSort([34,42,23,56,2,-1,5,-3]));

//big-O = O(n^2)