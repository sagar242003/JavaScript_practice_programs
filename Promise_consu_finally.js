
let p = new Promise(function (resolve, reject) {

    console.log('Executor code')

    // setTimeout(function () {
    //     resolve(console.log('Got data from server'))
    // }, 5000)

    // setTimeout(()=> 
    //     resolve(console.log('Got data from server'))
    // , 5000)

    setTimeout(function () {
        reject(console.log('Error Occured'))
    }, 5000)

})

p.then(function (value) {
    console.log("OK")
    console.log(value)
}, function (error) {
    console.log("exception")
    console.log(error)
})

.finally(function () {
    console.log('always executed')
})