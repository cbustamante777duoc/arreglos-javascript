
const car = [
    {
        title:'product 1',
        price: 599.99,
        amount: 1,
    },
    {
        title:'product 2',
        price: 499.99,
        amount: 2,
    },
    {
        title:'product 3',
        price: 699.99,
        amount: 4,
    },
    {
        title:'product 4',
        price: 399.99,
        amount: 3,
    },
]

// let total = car.reduce((total, cartItem)=>{
//     const {amount, price} = cartItem; //desturacion
//     total.totalItem += amount; //total de la cantidad
//     total.cartTotal += price * amount; //suma todos los precio y  * cantidad
//     return total
// },{
//     //retorna dos objetos nuevos
//     totalItem: 0,
//     cartTotal:0,
// })
let {totalItem,cartTotal} = car.reduce((total, cartItem)=>{
    const {amount, price} = cartItem; //destruturacion
    total.totalItem += amount; //total de la cantidad
    total.cartTotal += price * amount; //suma todos los precio y * cantidad
    return total
},{
    //retorna dos objetos nuevos
    totalItem: 0,
    cartTotal:0,
})

// cartTotal = Math.floor(cartTotal)
cartTotal = parseFloat( cartTotal.toFixed(2));
console.log(totalItem, cartTotal);