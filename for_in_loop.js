
//consider an Array

let arr=[10,20,30,40]
let x=0

for (const k in arr) {
    x=x+k
    console.log(k)
}
console.log(x)

//The answer of the x=00123 here the indexes or the keys is present 
//in the form of the string which gets concat 0+0+1+2+3=00123

//for in loop is only allowed in the arrays and objects