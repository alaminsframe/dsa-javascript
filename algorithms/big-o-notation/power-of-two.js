// function isPowerOfTwo(n){
//     for(let i= 0; i<=Math.ceil(Math.sqrt(n)); i++){
//         if(n === 2**i) return true;
//     }
//     return false;
// }

// bin-o = O(sqrt(n))



// function isPowerOfTwo(n){
//     if (n<1){
//         return false;
//     }
//     while (n>1){
//         if(n%2 !== 0){
//             return false;
//         }
//         n = n/2;
//     }
//     return true;
// }

// bin-o = O(logn)
    



function isPowerOfTwo(n){
    if(n<1){
        return false;
    }
    return (n & (n-1)) === 0 // it will be always 0 if the number is power of two 
}

// bin-o = O(1)

console.log(isPowerOfTwo(1));
console.log(isPowerOfTwo(2));
console.log(isPowerOfTwo(8));
console.log(isPowerOfTwo(3));
