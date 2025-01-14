function isPrime(n){
    if (n<2) return `${n} is not prime`;
    
    for(let i=2; i<n; i++){
        if(n%i===0){
            return `${n} is not prime`;
        }else{
            return`${n} is prime`;
        }
    }
    
}

console.log(isPrime(11));


// Big-O = O(n)