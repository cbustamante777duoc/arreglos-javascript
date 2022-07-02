(()=>{


    //CUATRO METODOS DE BUSQUEDA

    interface userInterface {
        uid: number;
        name: string;
        age: number; 
    }

    const users: userInterface[]= [
        { uid: 1, name: "John", age: 34 },
        { uid: 2, name: "Amy", age: 20 },
        { uid: 3, name: "camperCat", age: 10 },
        { uid: 4, name: "Amy", age: 12 },
    ];

    //PRIMERO EL METODO FIND PERO ESTE BUSCA SOLO LA PRIMERA CONSIDENCIA

    const find1 = users.find((item)=> item.name == "Amy");
    console.log(find1); //{ uid: 2, name: 'Amy', age: 20 }

    //buscar con metodo includes
    const find2 = users.find((item)=> item.name.includes("Amy"));
    console.log(find2); //{ uid: 2, name: 'Amy', age: 20 }

    //buscar con el metodo startsWith
    const find3 = users.find((item)=> item.name.startsWith("c"));
    console.log(find3); //{ uid: 3, name: 'camperCat', age: 10 }

    //buscar con el metodo endsWith 
    const find4 = users.find((item)=> item.name.endsWith("y"));
    console.log(find4); //{ uid: 2, name: 'Amy', age: 20 }

    //SEGUNDO METODO INCLUDES
    const includes1 = users.map((item)=> item.name.includes("camperCat"));
    console.log(includes1); //[ false, false, true, false ]

    // otra forma de hacer lo mismo
    const includes2 = users.map((item)=> item.name)
    console.log(includes2.includes("camperCat")); //true

    //TERCER METODO indexof SIMILAR A INCLUDES pero este dice donde esta
    const index= users.map((item)=> item.name);
    console.log(index.indexOf("camperCat"));

    //https://www.digitalocean.com/community/tutorials/js-array-search-methods-es



})();