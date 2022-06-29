const frutas = ["platano", "perra", "frutilla"];

const users = [
    { name: "John", age: 34 },
    { name: "Amy", age: 20 },
    { name: "camperCat", age: 10 },
];

//impresion del arreglo de frutas con map
const nuevoArreglo = frutas.map((item) => item);

//impresion del arreglo de user pero solo los nombre
const userArreglo = users.map((item) => item.name);


