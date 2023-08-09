//It is the special function which is used to introduces the delay

console.log('Started....')
setTimeout(function () {
    console.log('After 5 second...')
}, 5000)
console.log()

// console.log('By using Arrow function')

// console.log('Started....')
// setTimeout(() => {
//     console.log('After 5 second...')
// }, 5000)

let time=()=>{
    console.log('After 7 second...')
}
setTimeout(time,7000)

// let time=function(){
//     console.log('After 5 second...')
// }
// setTimeout(time,5000)