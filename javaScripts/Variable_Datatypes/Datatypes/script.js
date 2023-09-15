

// ====================== Start Primitive Datatype ===========================

// String 

const firstName = "Sanchit"

const output = firstName

console.log(output, typeof output)

// Number

const age = 23
const current_age = 23.6

console.log(age, typeof age)
console.log(current_age, typeof current_age)

// boolean

const hasKids = false

console.log(hasKids, typeof hasKids)

// null 
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/typeof#typeof_null

const apt_number = null


console.log(apt_number, typeof apt_number)

// undefined

let score

console.log(score, typeof score)

// symbol

const id = Symbol('id');

console.log(id, typeof id)

// BigInt

const bigint = 900000000000000n

console.log(bigint, typeof bigint)

// ====================== End Primitive Datatype ===========================

// ====================== Start Reference Type ===============================

// Arrays

const arr = [1,23,4,5]

console.log(arr, typeof arr)

// Object

const obj = {
    first:"Sanchit",
    last:"Shinde"
}

console.log(obj.first,typeof obj.first)
console.log(obj, typeof obj)

// Function

function fun(){
    console.log("hello world")
}

console.log(fun, typeof fun)
console.log(fun(), typeof fun())

// ====================== End Reference Type ===============================




