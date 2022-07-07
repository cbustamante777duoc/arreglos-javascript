const arr = [2, 4, 6, 8];

/**
 * fun que da elemento a azar 
 */
const randomIndex = Math.floor(
    Math.random() * arr.length
)

console.log(arr[randomIndex]); //numero al azar 8 

//fun que evita que los numero sean repitidos
const arr1 = [1, 2, 1, 2, 12, 1, 2,]
new Set(arr1)
//lo convierte en un arr
console.log([...new Set(arr1)]); //[ 1, 2, 12 ]

