// string function-length,charAt
// 1. Email Username Extractor :
//{ A user enters their email: "ramprasad@gmail.com". 
// Extract only the username (before @). 
// Convert the username to lowercase. 
// Display the length of the username. 
// (Use: substring(), toLowerCase(), length) }

let email='ramprasad@gmail.com'
let spl=email.split('@')[0]
// let spl=email.substring(0,email.indexOf("@"))
let username=spl.toLowerCase()
console.log(username.length)







//  2. Student Registration Form Validation 
// // You are building a student registration system. 
// // A student enters their full name with extra spaces. 
// // Convert the name to uppercase and remove extra spaces. 
// // Find the total length of the cleaned name. 
// // Display the first character of the name. 
// // (Use: trim(), toUpperCase(), length, charAt()) 

let StudName=' PoomaniBharathi '
let tname=StudName.trim()
let uname=tname.toUpperCase()
let lname=uname.length
let fname=uname.charAt(0)

console.log(uname)
console.log(lname)
console.log(fname)


// // 3.product Code Formatter 
// A product code is entered as " ab123cd ". 
// Remove extra spaces. 
// Convert it to uppercase. 
// Join it with "SKU-" in front of it. 
// Display the final formatted code. 
// (Use: trim(), toUpperCase(), concat()) 

let code=" ab123cd "
let tcode=code.trim()
let Uname=tcode.toUpperCase()
let addname='SKU-'
let joname=addname.concat(...Uname)
console.log(joname)



// // 4.Sentence Word Counter 
// A user enters a sentence: "React is very powerful library". 
// Split the sentence into words. 
// Find how many words are there. 
// Display the first word in uppercase. 
// (Use: split(), length, toUpperCase()

let user="React is very powerful library"
let sword=user.split(" ")
let position=sword.length
let firsword=sword[0].toUpperCase()
console.log(firsword)

// // 5.File Name Processor 
// A file name is given as "report_final_version.pdf". 
// Split the file name using "_". 
// Join the words using space " ". 
// Convert the result to lowercase. 
// Display the formatted file name. 
// (Use: split(), join(), toLowerCase())

let filename="report_final_version.pdf"
let spname=filename.split("_")
let janame=spname.join(" ")
let lowname=janame.toLowerCase()
console.log(lowname)


// // 6. Password Hint Generator 
// User enters a password " Welcome123 ". 
// Remove spaces. 
// Extract the first 4 characters. 
// Convert them to lowercase. 
// Display the hint. 
// (Use: trim(), substring(), toLowerCase())

let password=" Welcome123 "
let tpass=password.trim()
let extname=tpass.substring(0,4)
let lowpassname=extname.toLowerCase()
console.log(lowpassname)

