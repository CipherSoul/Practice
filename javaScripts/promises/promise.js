let stocks = {
    fruit:["strawberry", "grapes", "banana", "apples"],
    liquid:["water", "ice"],
    holder:["cone","cup","stick"],
    toppings:["chocolate", "peanuts"],
}

let shop_open = true

let order = (time,work)=>{
    return new Promise((resolve, reject)=>{
        if(shop_open){
            setTimeout(()=>{
                resolve(work())
            },time)
        }else{
            reject("Sorry the shop is closed")
        }
    })
}


document.addEventListener("DOMContentLoaded", ()=>{
    const showButton = document.getElementById("btn")
    const show = document.getElementById("display")

    let msg = order(2000,()=>{return `${stocks.fruit[0]} was selected`})
    showButton.addEventListener("click", ()=>{
        order(2000,()=>console.log(`${stocks.fruit[0]} was selected`))
            .then(()=>{
                return order(0,()=>console.log("Production has Started"))
            })

            .then(()=>{
                return order(2000, ()=>console.log("Chopping the fruit"))
            })

            .then(()=>{
                return order(1000, ()=>console.log(`${stocks.liquid[0]} + ${stocks.liquid[1]} Was Added`))
            })

            .then(()=>{
                return order(1000, ()=>console.log("Machine has being started"))
            })

            .then(()=>{
                return order(3000, ()=>console.log(`Ice-Cream has been added into the ${stocks.holder[1]}`))
            })

            .then(()=>{
                return order(2000, ()=>console.log(`${stocks.toppings[0]} has been added as an topping!`))
            })

            .then(()=>{
                return order(1000, ()=>console.log(`Your order for ${stocks.fruit[0]} Ice-Cream with ${stocks.toppings[0]} toppings is ready and served into the ${stocks.holder[1]}`))
            })

            .catch(()=>{
                console.log("Customer left")
            })

            .finally(()=>{
                console.log("Its 10 pm shop's closed")
            })
    })
})