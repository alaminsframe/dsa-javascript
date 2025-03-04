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


//The map() function creates a new array by applying a given function to every element in the array. It does not change the original array.
const numbers = [1, 2, 3, 4, 5];
const doubled = numbers.map(num => num * 2);  
console.log(doubled); // [2, 4, 6, 8, 10]


//The filter() function creates a new array with all elements that pass the test implemented by the provided function. It’s used when you want to filter out certain values from the array based on a condition.
const numbers2 = [1, 2, 3, 4, 5, 6];
const evens = numbers2.filter(num => num % 2 === 0);
console.log(evens); // [2, 4, 6]


//The reduce() function applies a reducer function to each element of the array, accumulating the result into a single value. It’s useful for operations like summing up values, finding averages, or combining data.
const numbers3 = [1, 2, 3, 4, 5];
const sum = numbers3.reduce((acc, num) => acc + num, 0);
console.log(sum); // 15




//The concat() method is used to merge two or more arrays. It does not change the original arrays but returns a new array that contains the values of the arrays being concatenated.
const array1 = [1, 2, 3];
const array2 = [4, 5, 6];
const combined = array1.concat(array2);
console.log(combined); // [1, 2, 3, 4, 5, 6]


//Big-O time complexity

// Accessing an element: O(1)
// Inserting at the end: O(1) (amortized)
// Removing from the end: O(1)
// Inserting at the beginning: O(n)
// Removing from the beginning: O(n)
// Finding an element: O(n)
// Iterating over the array: O(n)
// Concatenating arrays: O(n + m)
// Splicing elements: O(n)
// Sorting the array: O(n log n) (average)
