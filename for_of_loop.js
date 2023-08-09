//consider an Array
console.log("Array Output")

let arr=[10,20,30,40]
let x=0

for (const k of arr) {
    x=x+k
    console.log(k)
}
console.log("The sum of array elements is "+x)

//here in the for of loop the values is gets iterated and the values is get added
console.log()
//###############################################################################

//consider Map

/*Map is the alternate and the advanced version of the Objects because in the objects we can have only
 one type of key i.e. String but in the Map the key can be of aany datatype and various operation can 
 hava the different functions*/


console.log("Map Output")

let m1=new Map([['id',400],['name','test']])       //In this we can predefined the values of the Map
m1.set('id',100)                                   //By ising the set() we can add the objects in the Map
m1.set('name','xyz')
m1.set('addr','pune')
console.log(m1)

console.log('The keys of the Map using keys()')
for (const k of m1.keys()) {
    console.log(k)
}
console.log('The values of the Map using values()')
for (const v of m1.values()) {
    console.log(v)
}


console.log()
//#####################################################################

//set
//Set does not allowed the duplicate members
console.log('Set output')
let s1=new Set([10,20,30,10,20,30])

console.log(s1)

for (const x of s1) {
    console.log(x)
}

// for (const k in s1) {
//    console.log(k)
// }
//for of loop is not valid in the Set and Map

