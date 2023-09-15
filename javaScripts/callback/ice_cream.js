let stocks = {
    fruit:["strawberry", "grapes", "banana", "apples"],
    liquid:["water", "ice"],
    holder:["cone","cup","stick"],
    toppings:["chocolate", "peanuts"],

}



let order = (fruit_name, production) =>{
    setTimeout(()=>{
        console.log(`${stocks.fruit[fruit_name]}`)
        production()

    }, 2000)
}

let production = () =>{
    return setTimeout(()=>{
        console.log("Production has started")
        setTimeout(()=>{
            console.log("The fruit has been chopped")
            setTimeout(()=>{
                console.log(`${stocks.liquid[0]} and ${stocks.liquid[0]} has been adding`)
                setTimeout(()=>{
                    console.log("The Machine has been started")
                    setTimeout(()=>{
                        console.log(`Ice-Cream has been put in ${stocks.holder[1]}`)
                        setTimeout(()=>{
                            console.log(`${stocks.toppings[0]} has been added as an topping`)
                            setTimeout(()=>{
                                console.log(`Your ${stocks.fruit[0]} Ice-Cream with ${stocks.toppings[0]} toppings in a ${stocks.holder[1]} is ready `)
                            },2000)
                        },3000)
                    },2000)
                    
                },1000)
            },1000)
        }, 2000)
    },0)
}

document.addEventListener("DOMContentLoaded", function(){
    const showButton = document.getElementById("place_order")
    const outPut = document.getElementById("output")

    const msg = order(0,production)

    showButton.addEventListener("click", function(){
        order("strawberry",production)
        outPut.textContent = `hello ${msg}`
    })
})