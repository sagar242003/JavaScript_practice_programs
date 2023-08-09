let p = new Promise(function (resolve, reject) {

    console.log('Executor code')

    setTimeout(function () {
       //resolve(console.log('Got data'))
        reject(console.log('Error Occured'))

    }, 5000)

})

p.catch(function(error){
    console.log('In catch')
    console.log(error)
})