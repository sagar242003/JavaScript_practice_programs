
function createstring(arr, n, x, age) {
    console.log(n)
    console.log(x)

    console.log()

    console.log(arr[0])
    console.log(arr[1])
    console.log(arr[2])

    let d1 = new Date().getFullYear()
    let Byear = d1 - age
    let s2 = `Hello your birth year is ${Byear}`
    return s2
}

let name = "sagar"
let age = "20"

let s2 = `Hello ${name} your age is ${age}`
console.log(s2)

let arr1 = [10, 20, 30]

let year = createstring(arr1, 5, 10, age)
console.log(year)

