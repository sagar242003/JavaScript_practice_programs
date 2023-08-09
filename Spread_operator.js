
let arr = [1, 2, 3, 4, 5]
let x = Math.max(...arr)

console.log()

//1
let arr2 = [...arr]
console.log(x)
console.log(arr2)

console.log()

//2
let arr3 = [10, 20, 30, 40, 50]
let arr4 = [60, 70, 80, 90, 100]

let arr5 = [...arr3, ...arr4]
console.log(arr5)

console.log()

// //3

let ob1 = {
    id: 100,
    fname: 'xyz'
};

let ob = { ...ob1 }; // Use the spread operator on the object to create a new object.

console.log(ob.id);   // Output: 100
console.log(ob.name); // Output: undefined (since 'name' property is not present in the original object ob1)

