let p = new Promise(function (resolve, reject) {

    //executor code 
    //producing code
    //get data from server 
    console.log('Executor code')
    setTimeout(() => console.log('Execute after 5 seconds...'), 5000)
})