//javascript automatically convert string into number 
console.log("12"/"2")

console.log()
//we can use the Number function to convert string into number 
let s1="12"
let x=Number(s1)
console.log(typeof x)

console.log()
//If we have the string which consist of partially of number and characters then we use parseint and parsefloat

let s2='12px'
let a=parseInt(s1)
let s3='1.2px'
let b=parseFloat(s2)
console.log(typeof a)
console.log(typeof b)