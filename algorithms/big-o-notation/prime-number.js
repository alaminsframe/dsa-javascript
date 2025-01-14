// function isPrime(n){
//     if (n<2) return `${n} is not prime`;
    
//     for(let i=2; i<n; i++){
//         if(n%i===0){
//             return `${n} is not prime`;
//         }
//     }
//     return `${n} is prime`;
    
// }

// Big-O = O(n)





function isPrime(n){
    if (n<2) return `${n} is not prime`;
    
    for(let i=2; i<=Math.sqrt(n); i++){
        //console.log(i);
        
        if(n%i===0){
            return `${n} is not prime`;
        }
    }
    return `${n} is prime`;
    
}


console.log(isPrime(89));


// Big-O = O(sqrt(n))