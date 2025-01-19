function recursiveBinarySearch(arr,target){
    return search(arr, target, 0, arr.length-1)
}
function search(arr,target,leftIndex,rightIndex){
    console.log('start',leftIndex);
    console.log('end',rightIndex);
    
    if(leftIndex>rightIndex) return -1;

    let midIndex =  Math.floor((leftIndex+rightIndex)/2);
    if(target===arr[midIndex])return midIndex;

    if(target<arr[midIndex]){
        return search(arr,target,leftIndex,midIndex-1)
    }else{
        return search(arr,target,midIndex+1,rightIndex)
    }
}


// console.log(recursiveBinarySearch(['a','b','c','d'],'d'));
// console.log(recursiveBinarySearch([42,43,45,47,48,49],49));
console.log(recursiveBinarySearch([2,3,5,7,8,12,43],49));