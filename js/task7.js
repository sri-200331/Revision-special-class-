// flattened map without using the map (built-in mehtod)
let arr=[1,[2,3],4]
let myMap=function(arr,method){
    console.log(Array.isArray(arr1))
    let flattened=[]
    for(let n of arr){
        result.push(method(n))
    }
    return result
}
let addTwo=(n)=>{
    return n+2
}
console.log(myMap([1,2],addTwo))