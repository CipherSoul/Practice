// without Template literals
let x
let name = "sanchit"
let age = 24
x = "Hello my name is "+ name + " and i am "+age+' years old'
console.log(x, typeof x)

// Template Literals ``
let z 
z = `hello my name is ${name} and i am ${age - 0.40} years old`
console.log(z,typeof z)

// Properties and Methods
const nam = "sanchit"
// what wrapper does is, it creats object of string in heap
const s = new String(" sanchit")

// access value using key and key is the number which index
let p = s[5]
p = s.__proto__
p = s.indexOf("s")

console.log(p)
console.log(s, typeof s)
console.log(nam.length)

