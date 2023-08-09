
let s1 = "Hello"

console.log(s1[0])
console.log(s1.at(0))
console.log(s1[-1])
console.log(s1.at(-1))
console.log(s1.at(-2))

//by using loop
console.log("by using loop")

for (let i = 0; i < s1.length; i++) {
    console.log(s1[i])
}

console.log("Negative indexing loop print")
for (let j = -1; j >= (-s1.length); j--) {
    console.log(s1.at(j))
}

console.log("using for in loop in which the index of string is printed")
for (let x in s1) {
    console.log(x)
}
console.log("using for of loop the elements of string is printed")
for (let y of s1) {
    console.log(y)
}