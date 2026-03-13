// interview task(ascending, print even number, smallest number from an array, count of 6 in an array,
// palindrome, largest number of an array, count no. of vowels  in string, remove duplicates,
//  frequency of an element, prime, fibonacci, swap without third variable, second largest)


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


// palindrome
let str='level'
let isPalindrome=true

for(let i=0;i<str.length/2;i++){
    if(str[i]!==str[str.length-1-i]){
        isPalindrome=false
        break
    }
}
console.log(isPalindrome?'palindrome':'not a palindrome')


// largest number from an array without using math.max

let arrl=[10,20,30,40,50]
let largestl=arrl[0]
for (let i=0;i<arrl.length;i++){
    if(arrl[i]>largestl){
        largestl=arrl[i]
    }
}
console.log(largestl)



// count number of vowels in a string without using includes
let string='javascript'
let count1=0
let vowels='aeiouAEIOU'
for(let i=0;i<string.length;i++){
    for(let j=0;j<vowels.length;j++){
        if(string[i]===vowels[j]){
            count1++
        }
    }
}
console.log(count1)



// remove duplicaates(without set)
let dup=[1,2,2,3,4,5,5]
let unique=[]

for(let i=0;i<dup.length;i++){
    let found=false
    for(let j=0;j<unique.length;j++){
        if(dup[i]==unique[j]){
            found=true
            break
        }
    }
    if(!found){
        unique.push(dup[i])
    }
}
console.log(unique)


// frequency of each element(array)
let freq=[1,2,3,3,1,4]
let frequency={}

for(let i=0;i<freq.length;i++){
    if(frequency[freq[i]]){
        frequency[freq[i]]++
    }else{
        frequency[freq[i]]=1
    }
}
console.log(frequency)

// frequency(string)
let string1='hello'
let counts={}
for(let i=0;i<string1.length;i++){
    let char=string1[i]
    if(counts[char]){
        counts[char]++
    }else{
        counts[char]=1
    }
}
console.log(counts)





// primenumber
let numb=7
let isPrime=true

if(num<=1) isPrime=false

for(let i=2;i<numb;i++){
    if(numb%i==0){
        isPrime=false
        break
    }
}
console.log(isPrime?'prime':'not a prime')





// fibonacci series(n terms)
let n=6
let a=0,b=1
 for(let i=1;i<=n;i++){
    console.log(a)
    let next =a+b
    a=b
    b=next
 }





// swap without third variable
let c=5
let d=10

c=c+d
d=c-d
c=c-d
console.log(c,d)




// second largest
let sec=[10,20,30,40]
let first=sec[0]
let second=sec[0]

for(let i=0;i<sec.length;i++){
    if(sec[i]>first){
        second=first
        first=sec[i]
    }else if(sec[i]>second && sec[i]!==first){
        second=sec[i]
    }
}
console.log(second)






