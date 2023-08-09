
console.log('Rest operator with destructuring...')
let arr=[10,20,30,40,50,60,70,80]

let [a,b,...arr1]=arr

console.log(a)
console.log(b)
console.log(arr.length)

console.log(arr1)
console.log(arr1.length)

console.log()

for (const x of arr) {
    console.log(x)
}
