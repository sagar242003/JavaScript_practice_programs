
let s1 = "Hello World"

console.log(s1)
let s2 = s1.toUpperCase();
console.log(s2)
s2 = s2.toLowerCase()
console.log(s2)

console.log("######################################")

let x = s1.indexOf('o')
console.log(x)

x = s1.lastIndexOf('o')
console.log(x)

console.log('All Index of l')
//let x=-1
do {
    x = s1.indexOf('l', x + 1)
    console.log(x)

} while (x != -1)

console.log()
//StartsWith
console.log(s1.startsWith('He'))
console.log(s1.startsWith('llo'))

console.log()

//endsWith
console.log(s1.endsWith('rld'))
console.log(s1.endsWith('ow'))

console.log()
//includes
console.log(s1.includes('llo'))
console.log(s1.includes(' '))
console.log(s1.includes('s'))

console.log()
//slice
console.log(s1.slice(0,4)) //last index-1
console.log(s1.slice(-4,-1)) //supports negative indexing

console.log()
//Substring
console.log(s1.substring(0,4))
console.log(s1.substring(4,0))  //index exchanging does not effect the output

let u=0
