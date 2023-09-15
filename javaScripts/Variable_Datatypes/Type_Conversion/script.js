// Type Conversion is a method of converting the object to a different desired type if possible 
// and it is done explicitly by the user

let num = '100'

num = parseInt(num)
console.log(num, typeof num)
num = Number(num)
console.log(num, typeof num)
num = String(num)
console.log(num, typeof num)
num = BigInt(num)
console.log(num, typeof num)
num = Boolean(num)
console.log(num, typeof num)
num = num.toString()
console.log(num, typeof num)

// Another Boolean way in javascript Truthy and Falsy: 1 and any number above is truthy and zero is falsy
let amount = 1

amount = Boolean(amount)
console.log(amount, typeof amount)
amount = 0
amount = Boolean(amount)
console.log(amount, typeof amount)

// if the value is not a number in case were the value is string intrinsically but still if we try to 
// convert it to number than it will be NaN which is called not a number
// for example
let notNan = "hello"
notNan = parseInt(notNan)
console.log(notNan, typeof notNan)
// there five operations in where we'll get Nan
// those are
// when we try to get square root of negative number
let negativeNumber = Math.sqrt(-1)
console.log(negativeNumber, typeof negativeNumber)

// when we try to add a number with nan 
let AddNan = 1 + NaN
console.log(AddNan, typeof AddNan)

// when we try to add undefined with undefined
let undefined_With = undefined +undefined
console.log(undefined_With, typeof undefined_With)

// when we try to do arithmatic operation with string datatype using a number
// {let String_With_Number = 'foo' + 1
// console.log(String_With_Number, typeof String_With_Number)} ===> this was not the example but i noticed
// that when we add string with number the numeber gets converted to string datatype
let String_With_Number = 'foo'/3
console.log(String_With_Number, typeof String_With_Number)
