// function isPowerOfTwo(n){
//     for(let i= 0; i<=Math.ceil(Math.sqrt(n)); i++){
//         if(n === 2**i) return true;
//     }
//     return false;
// }

// bin-o = O(sqrt(n))



function isPowerOfTwo(n){
    if (n<1){
        return false;
    }
    while (n>1){
        if(n%2 !== 0){
            return false;
        }
        n = n/2;
    }
    return true;
}
// bin-o = O(logn)
    



// console.log(isPowerOfTwo(1));
// console.log(isPowerOfTwo(2));
console.log(isPowerOfTwo(32));
// console.log(isPowerOfTwo(15));
