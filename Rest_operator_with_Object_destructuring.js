
let obj = { id: 100, fname: 'abc', address: 'xyz' }

console.log('Print Object')
console.log(obj)

console.log()

let { id, ...obj2 } = obj

console.log('Print obj2')
console.log(obj2)

console.log()

console.log(obj.id)
console.log(obj.fname)
console.log(obj.address)

console.log()

console.log(obj['id'])
console.log(obj['fname'])
console.log(obj['address'])

