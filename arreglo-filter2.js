const personajes = [
    {
        nombre: "Aquaman",
        aparicion: "1941-11-01",
        casa: "DC",
        habilidad:['telepatia','nadar'],
        poder:45,
    },
    {
        nombre: "Batman",
        aparicion: "1939-05-01",
        casa: "DC",
        habilidad:['pelea','deducion'],
        poder:20
    },
    {
        nombre: "Daredevil",
        aparicion: "1964-01-01",
        casa: "Marvel",
        habilidad:['fuerza','agilidad'],
        poder:40,
    },
    {
        nombre: "Hulk",
        aparicion: "1962-05-01",
        casa: "Marvel",
        habilidad:['fuerza','super fuerza'],
        poder:70,
    },
    {
        nombre: "Linterna Verde",
        aparicion: "1940-06-01",
        casa: "DC",
        habilidad:['convertir cosas','fuerza'],
        poder:45,
    },
    {
        nombre: "Spider-Man",
        aparicion: "1962-08-01",
        casa: "Marvel",
        habilidad:['trepar paredes','fuerza'],
        poder:55,
    },
    {
        nombre: "Wolverine",
        aparicion: "1974-11-01",
        casa: "Marvel",
        habilidad:['regeneracion','fuerza'],
        poder:60,
    },
    {
        nombre: "Jubilo",
        aparicion: "1974-11-01",
        casa: "Marvel",
        habilidad:['telepatia','mover cosas'],
        poder:20,
    },
    {
        nombre: "ciclope",
        aparicion: "1963-12-31",
        casa: "Marvel",
        habilidad:['rayo lazer','pelea'],
        poder:55,
    },
    {
        nombre: "Fenix",
        aparicion: "1963-09-27",
        casa: "Marvel",
        habilidad:['telepatia','fuerza','mover cosas'],
        poder:85,
    },
    {
        nombre: "Rogue",
        aparicion: "1995-01-25",
        casa: "Marvel",
        habilidad:['mover cosas','absorver poderes'],
        poder:35,
    },
    {
        nombre: "Gambito",
        aparicion: "1990-08-16",
        casa: "Marvel",
        habilidad:['pelea','mover cosas'],
        poder:50,
    },
    {
        nombre: "Cable",
        aparicion: "1986-08-06",
        casa: "Marvel",
        habilidad:['pelea','fueza'],
        poder:60,
    }
];
const personajeDC = personajes.filter(item => item.casa == 'DC');
const personajeMarvel = personajes.filter(item => item.casa == 'Marvel');



console.log(personajeDC);
console.log("********************");
console.log(personajeMarvel);
console.log("********************");
