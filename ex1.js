
let arr = [2, 4, 6, 8, 10, 12, 14, 16, 18, 20];

//sumar todos los valores
const result = arr.reduce((total, item) => total + item, 0);
console.log(result); //110

const result2 = arr.reduce((total, item) => {
    if (item > 10) {
        total += item;
    }
    return total;
}, 0)

console.log(result2); //80

let arr2 = [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17];
//sumar todos los valore pares
const result3 = arr2.reduce((total, item) => {
    if (item % 2==0) {
        total += item;
    }

    return total;
}, 0);

console.log(result3); //72

const users = [
    { name: "John", age: 34 },
    { name: "Amy", age: 20 },
    { name: "camperCat", age: 10 },
];

//sumar todas las edades
let result4 = users.reduce((total, item) => item.age + total ,0)
console.log(result4); //64

//mayor a 10
let result5 = users.filter(item => (item.age > 10));
console.log(result);

//diferente de camperCat
result5 = users.filter(item => (!item.name.includes("camperCat")));
console.log(result2);