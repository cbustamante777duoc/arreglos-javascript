
//manera de concadenar dos arrays
const array = [1, 2, 3, 4, 5, 6, 7, 8,8,8];
const array2 = [11,12,13,14,15,16,17,18,18,18,18];
const merge1 = (a,b) => a.concat(array2);
console.log(merge1(array,array2)); //[ 1, 2, 3, 4, 5, 6, 7, 8, 11, 12, 13, 14, 15, 16, 17, 18 ]


//Segunda manera de concadenar dos array pero este los separa
const merge2 = (a,b) => [...a, ...b];
console.log(array, array2);
//[ 1, 2, 3, 4, 5, 6, 7, 8 ] [ 11, 12, 13, 14, 15, 16, 17, 18 ]

//tercera manera para evitar valores nulos
const merge3 = [...new Set(array.concat(array2))];
console.log(merge3); //[ 1, 2, 3, 4, 5, 6, 7, 8, 11, 12, 13, 14, 15, 16, 17, 18 ]

const merge4 = [...new Set([...array, ...array2])];

console.log(merge4); //[ 1, 2, 3, 4, 5, 6, 7, 8, 11, 12, 13, 14, 15, 16, 17, 18 ]