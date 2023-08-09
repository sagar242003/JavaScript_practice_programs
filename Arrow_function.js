console.log("Single line Arrow Function")

let add = (a, b) => a + b
let area = (r) => 3.14 * r * r
let z = add(100, 200)
let y = area(5)

console.log(z)
console.log(y)

console.log("##############################")
console.log("Multiline Arrow Function")

let add1 = (a, b) => {
    let x = a + b
    return x
}
let area1 = (b) => {
    let l = 3.14 * b * b
    return l
}
let g = add1(100, 200)
let h = area1(5)

console.log(g)
console.log(h)