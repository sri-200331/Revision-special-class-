// interview task


// 1.print even numberusing array
let num=[1,2,3,4,5,6,7,8]
let num1=[]
for(let i=0;i<num.length;i++){
    if(num[i]%2===0){
        num1.push(num[i])
    }else{
        console.log('odd number')
    }
}
console.log(num1)



// 3.sort an array in ascending order
let arr1=[20,25,39,15,14,56,23]
for (let i = 0; i < arr1.length; i++) {
    for (let j = 0; j < arr1.length - 1 ; j++) {
        if (arr1[j] > arr1[j + 1]) {
            let temp = arr1[j];
            arr1[j] = arr1[j + 1];
            arr1[j + 1] = temp;
       
    }
}
}
console.log(arr1)






// 4.find the smallest element from array
let arr=[20,25,39,15,14,56,23]
let min=arr[0]
for(let i=0 ;i<arr.length;i++){
    if(arr[i]<min){
        min=arr[i]
    }

}
console.log(min)


//7.find a count of 6 in an array
let coun=[12,6,36,6,24,6,10,6,67,6] 
let count=0
for (let i=0;i<coun.length;i++){
    if(coun[i]===6){
        count++
    }
}
console.log(count)
