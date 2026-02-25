const cart = ["item1", "item2", "item3"]

const promise = createOrder(cart);
promise.then(function(orderId){
    console.log(orderId);
})


function createOrder(cart) {

    const pr = new Promise(function (resolve, reject) {

     
        const orderId = 12345;

        if (orderId) {
            resolve(orderId)
        }
    })

}

