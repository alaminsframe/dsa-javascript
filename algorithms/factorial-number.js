// function factorial(n){
//     let fac=1;
//     for(let i=n; i>=2; i--){
//      fac*=i;
//     }
//     return fac;
// }
// console.log(factorial(4));



// function factorial(n){
//     if (n <= 1) return 1;
//     return n * factorial(n - 1);
  
// }


function factorial(n){
    let factor = 1;
    for(let i=2; i<=n; i++){
        //console.log(i);
        
        factor*=i;
    }
    return factor;
}
console.log(factorial(5));



// Big-O = O(n)
