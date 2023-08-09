
let obj={id:100,fname:"abc",address:"xyz"}
console.log(obj)

console.log()

let {id,fname,address}=obj
// let {address,id,fname}=obj       
//In the object destructuring the sequence of the variable name doesn't matter

console.log(obj)

console.log(id)
console.log(fname)
console.log(address)

console.log("############################################")
console.log()
console.log("we can change the variable name")

let obj2={id1:300,lname:'sagar',addr:'pune'}

console.log()

let {id1:sid,lname:sname,addr:dd}=obj2

console.log(sid)
console.log(dd)
console.log(sname)
