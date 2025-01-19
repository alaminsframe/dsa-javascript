function linearSearch(arr,n){
    for(let i=0; i<arr.length; i++){
        if(arr[i]===n){
            return i;
        }
    }
    return -1;
}
console.log(linearSearch(['a','b','c','d'],'d'));
console.log(linearSearch([0,1,2,3,4,6,8],4));
console.log(linearSearch([1,2,3,4,6,8],21));

//big-O = O(n)
