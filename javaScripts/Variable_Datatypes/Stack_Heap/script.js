// These values are stored on stack memory cause they are primitive datatypes

const stack_memory = "sanchit"

let stack_memory_ = stack_memory

console.log(stack_memory)
console.log(stack_memory_)

// These values are stored on heap memory cause they are reference type or non-primitive types

const person = {
    name:"Sanchit",
    last:"Shinde"
}

console.log(person)

// So in the primitive datatype the data which is stored on the stack is solid for example
stack_memory_ = "shinde"
console.log(stack_memory, stack_memory_)

// But in reference type the data in heap memory is referenced and when one reference changes some values 
//  the change is reflected in all reference for example
let someone = person
console.log(person, someone)
someone.name = 'yash'
console.log(person, someone)
// i.e because the someone and person are refering to the same object that is why change by one is relected in all
