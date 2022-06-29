const users = [
    { uid: 1, name: "John", age: 34 },
    { uid: 2, name: "Amy", age: 20 },
    { uid: 3, name: "camperCat", age: 10 },
];

//buscar al usuario amy
const amy = users.find((item) => item.name =='Amy');
console.log(amy);

//buscar al usuario que uid 3
const uid10 = users.find((item) => item.uid === 3);
console.log(uid10);

//buscar al usuario que su nombre es camperCat
const camper = users.find((item) => item.name =='camperCat');
console.log(camper);

//buscar al usuario que tiene 10 años
const age10 = users.find((item) => item.age == 10);
console.log(age10);

//buscar al usuario que tiene el uid 1
const uid1 = users.find((item) => item.uid ===1);
console.log(uid1);


//doble consulta
const age20 = users.find((item) => item.age ==20 && item.name ==='Amy');
console.log(age20);
