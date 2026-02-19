let student={
    name:'poomani',
    age:21,
    grade:"A"
}
// 1.Create an object student with name, age, and grade. Print all values.
console.log(student)

// 2. Create an object car with brand, model, year. Print only the brand. 
console.log(student.age)

// 3.Create an object mobile with 3 properties and add one new property later. 
student.city='chennai'
console.log(student)

// 4.Create a book object and change its price property to a new value.
student.age=22
console.log(student)

// 5.Create an object employee and check if the key "salary" exists using in operator. 
if('grade'in student){
    console.log('grade exists')
}else{
    console.log('grade not exist')
}

// 6. Create an object product and delete the discount property using delete.
delete student.age
console.log(student)

// 7.Create an object user with name and email. Print all keys using for…in loop. 
for(let key in student){
    console.log(key)
}

// 8.Create an object dog with breed and age. Print "Puppy" if age < 2. 
let dog={breed:'labrator',age:1}
console.log(dog)
if(dog.age<2){
    console.log('puppy')
}else{
    console.log(dog)
}

// 9.Create an object calculator with two numbers and print their sum.
let cal={num1:1,num2:2,num3:3}
console.log(cal.num1+cal.num2+cal.num3)

// 10.create an object person with firstName and lastName. Print full name
let name={
    fname:'poomani',
    lname:'bharathi'
}
let fullname=name.fname+" "+name.lname
console.log(fullname)

// 11.Create an object marks with 5 subject marks. Find the total using loop.
let marks={
    tam:90,
    eng:80,
    math:85,
    sci:95,
    soc:70
} 
let total=0
for(let sub in marks){
      total+=marks[sub]
}
console.log(total)

// 12.Create an object bike and check if it has color property. 
if('city' in student){
    console.log('city is included in student')
}else{
    console.log('city is not included')
}

// 13. Create an object movie with title and rating. Print "Hit" if rating > 8.
let movie={title:'sirai',rating:10}
if(movie.rating>8){
    console.log('hit')
}else{
    console.log('not hit')
}

// 14. Create an object account with balance. Add ₹500 and print updated balance. 
let account={bal1:100,bal2:200}
console.log(account.bal1+500)
// account.bal1+=500

