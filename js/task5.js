// functions(even or odd, sum of 1 to N, factorial, array sum, largest of three, move zeros to end of the 
// array,  index of 2 elements whose sum is equal to target, reverse a string, reverse a word.)


// 1.Even or Odd Function 
// Create a function that takes a number and prints whether it’s even or odd.
function EvenOdd(num){
    let msg
    if(num%2==0){
       msg='this is even number'
    }else{
       msg='this is odd number'
    }
    // return msg
    console.log(msg)
}
EvenOdd(13)
EvenOdd(20)




// 2.Sum of 1 to N 
// Create a function that takes a number n and uses a loop to find the sum of numbers 
// from 1 to n. 
function Sum(n){
    let sum=0
    for (let i=0;i<=n;i++){
        sum+=i
    }
    console.log(sum)
}
Sum(5)
// (1+2+3+4+5=15)
Sum(10)
// (1+2+3+4+5+6+7+8+9+10=55)





// 3.Factorial Function 
// Write a function that returns the factorial of a number using a for loop. 

function factor(n){
    let fact=1
    for(let i=1;i<=n;i++){
        fact*=i
    }
    console.log(fact)

}
factor(5)
factor(4)
factor(3)
factor(0)
// when factor(0)
// (i = 1
// n = 0
// 1 <= 0  ❌ False  so 1 print agitum)

// // i = 1
// fact = fact * i
// fact = 1 * 1 = 1

// i = 2
// fact = 1 * 2 = 2

// i = 3
// fact = 2 * 3 = 6





// 4.Array Sum Function 
// Write a function that accepts an array and returns the sum of all numbers.
// calculate sum of an array using  a loop
let arr=[1,2,3,4,5]
function array(arr){
    let total=0
    for (let i=0;i<arr.length;i++){
        total+=arr[i]
    }
    console.log(total)
}
array(arr)
// total = 0
// i=0 → total = 0+1(arr[0th index]) = 1
// i=1 → total = 1+2(arr[1st index]) = 3
// i=2 → total = 3+3(arr[2nd index]) = 6
// i=3 → total = 6+4(arr[3rd index]) = 10
// i=4 → total = 10+5(arr[4th index]) = 15





// 5.Largest of Three Numbers 
// Write a function that uses if-else to find the largest among 3 numbers.


function largest(a,b,c){
    if(a>b && a>c ){
        return a
    }else if(b>c){
        return b
    }else{
        return c
    }

}

console.log(largest(52,67,23))


// 6.Count Even Numbers 
// Create a function that takes an array and returns how many numbers are even. 
let count=[1,2,3,4,5,6,7,8,9,10,11,12]
function Evennum(count){
    let total=0
    for(let num of count){
        if(num%2===0){
            total++
        }
    }
    return total
    
}
console.log(Evennum(count))






// move all zeros to the end of the array using loop 
let arry=[0,1,0,3,12,0,37,82,0,83,0,2]
let j=0
for (let i=0;i<arry.length;i++){
    if(arry[i]!==0){
        let temp=arry[i]
        arry[i]=arry[j]
        arry[j]=temp
        j++
    }
}
console.log(arry)


// find the index of 2 elements whose sum is equal to target
function twosum(arr,target){
    for (let i=0;i<arr.length;i++){
        for (let j=i+1;j<arr.length;i++){
            if(arr[i]+arr[j]===target){
                return [i,j]
            }
        }
    }
}
console.log(twosum([1,2,3,4,5],6))



// reverse a string
let str='hello'
let reversed=""
for(let i=str.length-1;i>=0;i--){
    reversed+=str[i]
}
console.log(reversed)


// reverse a word
let strn='java is easy'
let word=strn.split(' ')
    // split('')space vitama pana letters reverse agum 'ysae si avaj'  and space vita words reverse agum.
let reverse=''
for(let i=word.length-1;i>=0;i--){
        reverse+=word[i]+""
}
console.log(reverse.trim())
























