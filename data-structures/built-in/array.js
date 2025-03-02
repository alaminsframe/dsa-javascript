let arr = [1, 2, 3, 4, 5];  // An array of numbers
let names = ['Alice', 'Bob', 'Charlie'];  // An array of strings
let mixed = [1, 'hello', true, null];  // A mixed array with different data types

arr.push(4);  // Adds 4 to the end of the array
arr.pop();  // Removes the last element (4)
arr.unshift(0);  // Adds 0 to the beginning of the array
arr.shift();  // Removes the first element


let arr2 = [1, 2, 3, 4, 5];
arr2.splice(2, 1, 6);  // Removes 1 element at index 2 and adds 6
console.log(arr2);  // [1, 2, 6, 4, 5]

let sliced = arr2.slice(1, 4);  // Extracts elements from index 1 to 3
console.log(sliced);  // [2, 6, 4]


