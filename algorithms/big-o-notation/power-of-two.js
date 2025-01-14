function isPowerOfTwo(n){
    for(let i= 0; i<=Math.ceil(Math.sqrt(n)); i++){
        if(n === 2**i) return true;
    }
    return false;
}

console.log(isPowerOfTwo(1));
console.log(isPowerOfTwo(2));
console.log(isPowerOfTwo(16));
console.log(isPowerOfTwo(15));
