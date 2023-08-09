
let arr3 = [{ id: 100, name: 'abc' }, { id: 200, name: 'xyz' }]

let ob = arr3.find((item, index) => {
    console.log('index number : ' + index)
    if (item.id == 800) {     //answer is undefined if id==800
        return item
    }
})

if (ob == undefined) {
    console.log('Record not found!!!')
}
else {
    console.log('Record found!!!')
    console.log(ob)
}