function cartesianProduct(arr1,arr2) {
    const result =[];
    for (let i = 0; i < arr1.length; i++) {
        for (let j = 0; j < arr2.length; j++) {
            result.push([arr1[i],arr2[j]])
        }
    }
    return result;
}
console.log(cartesianProduct([1],[3,4]));
// Big-O = O(n^2)