
let arr3 = [
    { id: 100, name: 'abc', marks: 90 },
    { id: 200, name: 'xyz', marks: 40 },
    { id: 200, name: 'pqr', marks: 50 }
]

// let arr2=arr3.filter((item)=>item.marks<90)
// console.log(arr2)

arr2=arr3.filter((item)=>{
    if(item.marks<90){
        return item
    }
})
console.log(arr2)