let stocks = {
    fruit:["strawberry", "grapes", "banana", "apples"],
    liquid:["water", "ice"],
    holder:["cone","cup","stick"],
    toppings:["chocolate", "peanuts"],
}

let shop_open = false

// async function order(){
//     try{
//         await abc
//     }
//     catch(error){
//         console.log("funtion is not defined", error)
//     }
//     finally{
//         console.log("runs code anyways")
//     }
// }

// let toppings_choice = () => {
//     return new Promise( (resolve,reject)=>{
//         setTimeout(()=>{
//             resolve(console.log("which topping would you like to have"))
//         },3000)
//     } )
// }

// async function kitchen () {
//     console.log(" A ")
//     console.log(" B ")
//     await toppings_choice()
//     console.log(" D ")
//     console.log(" E ")
// }

// kitchen()

// console.log("cleaning the dishes")
// console.log("cleaning the table")
// console.log("taking the others orders")

function time(ms){
    return new Promise((resolve, reject)=>{
        if(shop_open){
            setTimeout(resolve, ms)
        }else{
            reject(console.log("shop closed"))
        }
    })
}

async function kitchen(){
    try{
        await time(2000)
        console.log(`${stocks.fruit[0]} has been selected`)
        // cut fruit
        await time(2000)
        console.log(`${stocks.fruit[0]} has been cut`)
        // add water and ice
        await time(1000)
        console.log(`${stocks.liquid[0]} and ${stocks.liquid[0]} added`)
        // start the machine
        await time(1000)
        console.log(`Machine has been started`)
        // select container
        await time(2000)
        console.log(`${stocks.holder[1]} has be selected`)
        // select topping
        await time(3000)
        console.log(`${stocks.toppings[0]} has been added as an topping`)
        // serve ice cream
        await time(2000)
        console.log(`Your ${stocks.fruit[0]} ice-cream with ${stocks.toppings[0]} toppings is ready`)
    }
    catch(error){
        console.log("customer left", error)
    }
}

kitchen()