(()=>{
    const frutas:string[] = ["platano", "perra", "frutilla"];
    
    const users = [
        { name: "John", age: 34 },
        { name: "Amy", age: 20 },
        { name: "camperCat", age: 10 },
    ];


    //recorre los arreglos con map
    const frutasMap = frutas.map((item) => item);
    console.log(frutasMap);

    //capitalizar el nombre de todos los items
    const userMap = users.map((item) => item.name.charAt(0).toUpperCase()+ item.name.slice(1));
    console.log(userMap); //[ 'John', 'Amy', 'CamperCat' ]

})();