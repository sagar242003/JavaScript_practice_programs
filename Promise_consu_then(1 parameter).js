let p = new Promise(function (resolve, reject) {

    console.log('Executor code')

    setTimeout(function () {
        resolve(console.log('Got data'))
        //reject(console.log('Error Occured'))

    }, 5000)

})
/*if we only need the resolve value then  put the second parameter null
and vise versa with second parameter */

p.then(function (value) {
    console.log("OK")
    console.log(value)
}, null)

// p.then(null, function (error) {
//     console.log("exception")
//     console.log(error)
// })