(() => {

    //transformar un string a arreglo por medio de metodo map

    let name: string = 'jennie';

    //se declara el map
    const map = Array.prototype.map;

    //toma la variable y la itera
    const nuevaPalabra = map.call(name, eachLetter => {
        return `${eachLetter}`
    });

    console.log(nuevaPalabra);

    //https://www.digitalocean.com/community/tutorials/4-uses-of-javascripts-arraymap-you-should-know

    const users = [
        { name: "John", age: 34 },
        { name: "Amy", age: 20 },
        { name: "camperCat", age: 10 },
    ];

   
    

})();