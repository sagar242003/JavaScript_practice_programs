//Array in the JavaScript is used to group the similar or different datatype
//Array is declare by using the square brackets or by creating objects of array class

console.log("first Method")

let arr=[10,20,30]
console.log(arr)

console.log("Second Method")

let arr2=new Array(40,50,60,70)

console.log(arr2)

//#################################################################################

console.log("Methods or functions in the Array")

//push() function is used to add the element in the last 
console.log("push() function")
arr.push(15)
arr.push(25)
arr.push(35)

console.log(arr)

//pop() is used to delete the last element in the array
console.log("pop() function")
arr.pop()
console.log(arr)

//unshift() is used to add the element at the beginning
console.log("unshift() function")
arr.unshift(1)
arr.unshift(2)
console.log(arr)

//shift() function is used to delete the element at the beginning
console.log("shift() function")
arr.shift()
console.log(arr)

