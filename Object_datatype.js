
//Object Creation
console.log("Object Creation")
let obj={'id':100,'name':'xyz'} 

//In the object the keys is can be only the string types we can 
//assign the values but we can not get the values of the integer keys like obj.10

console.log(obj)
console.log(typeof obj)

let obj2={2:'abc'}
console.log(obj2) //if we try to assign the obj2.2 it will give the error

//#####################################################################
console.log()

//Accessing Object Values
console.log("Accessing Object Values")
console.log(obj['id'])
console.log(obj['name'])

console.log()
//#######################################################################
console.log("for in is used to iterate the values of the keys")

for (const k in obj) {
    console.log(k)
}

console.log()
//#######################################################################
console.log("for of is used to iterate the values present in the object")

for (const x of Object.values(obj)) {
    console.log(x)
}

console.log()
//#######################################################################

