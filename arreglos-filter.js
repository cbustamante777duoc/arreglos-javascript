const frutas = ["platano", "perra", "frutilla"];

const users = [
    { uid: 1, name: "John", age: 34 },
    { uid: 2, name: "Amy", age: 20 },
    { uid: 3, name: "camperCat", age: 10 },
];

const orders = [
    { drink: "Cappuccino", name: "John Appleseed" },
    { drink: "Espresso", name: "Mya Stuart" },
    { drink: "Cappuccino", name: "Emma Berry" },
];  

//usuarios mayores a 30
const menor30 = users.filter(item => item.age < 30);
//usuarios menores a 30
const mayor30 = users.filter(item => item.age > 30);
//de esta manera se puede eliminar un usuario
const usuariofiltrado = users.filter(item => item.uid !== 3);
//usuario diferentes a John
const usuarioDiferentesJohn = users.filter(item => item.name !== "John");

console.log(usuarioDiferentesJohn);

//MIOS

//filtrando fruta mayores a 5 caracteres
const frutaFiltrada = frutas.filter(item => item.length > 5);
console.log(frutaFiltrada);

//filtrando todas las diferentes a platano
const frutaFiltrada2 = frutas.filter(item =>(item !=='platano'));
console.log(frutaFiltrada2);


//filtrar solo que hayan tomado Cappuccino
const order = orders.filter(item =>(item.drink==='Cappuccino'));
console.log(order);


//filtra a todos los que no sea Mya
const mya = order.filter(item =>(item.name !== 'Mya'));
console.log(mya);


//filtrar por la persona que se tomo el expresso
const expresso = orders.filter(item =>(item.drink ==='Espresso'));
console.log(expresso); 


//filter con doble condicion
const m30 = users.filter(item =>(item.age > 20) && (item.name ==='John'));
console.log(m30);

//FUNCION QUE FILTRA PROBAR
// function filterItems(items, searchVal) {
//     return items.filter((item) => Object.values(item).includes(searchVal));
//   }
//   let data = [
//     { "name": "apple", "type": "fruit", "id": 123234 },
//     { "name": "cat", "type": "animal", "id": 98989 },
//     { "name": "something", "type": "other", "id": 656565 }]
  
  
//   console.log("Filtered by name: ", filterItems(data, "apple"));
//   console.log("Filtered by type: ", filterItems(data, "animal"));
//   console.log("Filtered by id: ", filterItems(data, 656565));