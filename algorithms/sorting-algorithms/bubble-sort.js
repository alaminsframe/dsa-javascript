//with do-while loop
// function bubbleSort(arr) {
//     let n = arr.length;
    
//     let swapped;
//     do {
//         swapped = false;
//         for (let i = 0; i < n-1; i++) {
//             if (arr[i]>arr[i+1]) {
//                 let temp = arr[i];
//                 arr[i] = arr[i+1];
//                 arr[i+1]= temp;

//                 swapped = true;
//             }
//         }
//         n--;
//     } while (swapped);

//     return arr;
// }


//with for loop
function bubbleSort(arr) {
    let n = arr.length;
    for (let i = 0; i < n; i++) {
        for (let j = 0; j < n-i-1; j++) {
            if (arr[j]>arr[j+1]) {
                [arr[j],arr[j+1]] = [arr[j+1],arr[j]];
            }
        }
    }
    return arr;
}

console.log(bubbleSort([34,42,23,46,21,53]));

//big-O = O(n^2)