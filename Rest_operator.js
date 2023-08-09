
//Rest operator is used to pack the values

//1
let arr=[10,20,30,40,50]

let [a,b,...arr2]=arr
console.log(a)
console.log(b)
console.log(arr2)
console.log(arr)

console.log()

//2
function show(...name){
    console.log(name)
}
show('abc')
console.log()
show("abc","xyz","pqr")     //will get the output in the form of the array