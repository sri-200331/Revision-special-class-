//Array methods- push(),pop(),unshift(),shift(),map(),filter()

// array.splice(start, deleteCount, item1, item2, ...)
// array.unshift(element1, element2, ...) add element in first
// 


// 1.Given the array [1, 2, 4, 5], insert the number 3 between 4 and 5.
let numb=[1,2,4,5]
numb.splice(3,0,3)
console.log(numb)

// 2.remove the 3rd element from [10,20,30,40,50]
let num=[10,20,30,40,50]
num.splice(2,1)
console.log(num)

// 3.replace second element int the array[5,10,15]with 20
let arr=[5,10,15]
arr[1]=20
console.log(arr)

// 4..add the element 7 and 8 at end of the array
let num1=[1,2,3,4,5,6]
num1.push(7,8)
console.log(num1)

// 5..insertthe element 99 at the beginning of the array[10,20,30]
let ins=[10,20,30]
ins.unshift(99)
console.log(ins)


// 6.remove the last  element from the array
let last=[2,4,6,8,10]
last.pop()
console.log(last)

// 7.replace all the occurences of 5 with 50 in the array[5,10,5,20,5]
let occur=[5,10,5,20,5]
let replace=occur.map((i)=>i===5? 50:i)
console.log(replace)

// 8.insert 0 at index 2 in the array
let arrt=[3,6,9,12,15]
arrt[2]=0
console.log(arrt)

// 9.remove all even number from the array
let even=[1,2,3,4,5,6,7,8,9,10]
for(let i=1;i<=even.length;i++){
    if(i%2==1){
        console.log(i)
    }
}

// 10.insert 15 between 10 and 20
let bet=[5,10,20,30]
bet.splice(2,0,15)
console.log(bet)


// 11.Remove the element at index 3 from the array
let rem=[10,20,30,40,50]
rem.splice(3,1)
console.log(rem)


// 12.Replace the last element in the array [1, 2, 3, 4, 5] with 10
let rep=[1,2,3,4,5]
rep[4]=10
console.log(rep)

// 13.add the elements 8, 9, and 10 at the beginning of the array [1, 2, 3, 4, 5].
let add=[1, 2, 3, 4, 5]
add.unshift(7,8,9)
console.log(add)

// 14.Remove the first occurrence of 7 from the array [7, 14, 21, 7, 28].
let remo=[7,14,21,7,28]
let remo1=remo.indexOf(7)

if(remo1!==-1){
   remo.splice(remo1,1)
}
console.log(remo)

// 15.Insert the elements 25 and 30 at the end of the array [10, 20].
let inse=[10,20]
inse.push(25,30)
console.log(inse)


// 16.Replace all occurrences of 0 with 1 in the array [0, 1, 0, 1, 0].
let occir=[0,1,0,1,0]
let occir1=occir.map((occ)=>occ===0?1:occ)
console.log(occir1)

// 17.Given the array [5, 10, 15, 20, 25], insert 12 between 10 and 15.
let arry=[5,10,15,20,25]
arry.splice(2,0,12)
console.log(arry)

// 18..Remove the second-to-last element from the array [2, 4, 6, 8, 10].


