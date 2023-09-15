// Type Coercion in javascript is process that is when a javascript forcefully or coercively converts the 
// type of the data

let x = 5 + '5' // so in this case javascript converts the datatype coercively
console.log(x, typeof x)
x = 5 * 5 // so in this case the javascript engine converts the datatype coercively to number as it would
// not make any sense to multiply the string
console.log(x, typeof x)
x = 5 / '5' // Same as above
console.log(x, typeof x)
x = 5 - '5' // Same as above
console.log(x, typeof x)
x = Number(null)
console.log(x, typeof x)
x = Number(NaN)
console.log(x, typeof x)
x = Number(undefined)
console.log(x,typeof x)
x = Number(true)
console.log(x,typeof x)
x = Number(false)
console.log(x, typeof x)
x = 5 + false
console.log(x,typeof x)
x = 5 + true
console.log(x, typeof x)