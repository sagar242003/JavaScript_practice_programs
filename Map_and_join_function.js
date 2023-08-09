console.log("Map function")
let arr=[1,2,3,4,5,6,7]
console.log(arr)

arr.map((n)=>console.log(n*n))

//Alternate Method
// arr.map((n)=>{
//     console.log(n*n)
// })
console.log()
let arr3=[{id:100,name:'abc'},{id:200,name:'xyz'}]

arr3.map((obj)=>{
    console.log(obj.id)
    console.log(obj.name)
})

console.log("Join function")

let arr2=['L','R','R','L']
let s1=arr2.join('')  //parameter represents the inside '' this only can be added
console.log(s1)

