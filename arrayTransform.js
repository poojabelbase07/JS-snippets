/*Q.1) Given an integer array arr and a mapping function fn, return a new array with a transformation applied to each element.
The returned array should be created such that returnedArray[i] = fn(arr[i], i).*/

//Solution :

let map = function(arr,fn){
   
    let result =[];

    for(let i=0; i<arr.length;i++)
    {
        result.push(fn(arr[i],i));
    }

    return result;
};
