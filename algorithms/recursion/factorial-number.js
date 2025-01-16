function factorial(n){
    if(n<1) return 1;
    return n*factorial(n-1)
}
console.log(factorial(0));
console.log(factorial(1));
console.log(factorial(2));
console.log(factorial(5));

//bit-O = O(n) - Recursive