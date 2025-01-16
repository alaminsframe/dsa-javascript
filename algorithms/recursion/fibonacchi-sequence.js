function finbonacchi(n){
    if(n<2) return n;
    return finbonacchi(n-1)+finbonacchi(n-2)
}
console.log(finbonacchi(0));
console.log(finbonacchi(1));
console.log(finbonacchi(7));

//O(2^n) - Recursive