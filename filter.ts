(() => {

    interface userInterface {
        uid: number;
        name: string;
        age: number;
    };

    interface ordersInterface {
        drink: string;
        name: string;
        price: number;
    };

    const frutas = ["platano", "perra", "frutilla"];

    const users: userInterface[] = [
        { uid: 1, name: "John", age: 34 },
        { uid: 2, name: "Amy", age: 20 },
        { uid: 3, name: "camperCat", age: 10 },
    ];

  
    const orders: ordersInterface[] = [
        { drink: "Cappuccino", name: "John Appleseed", price: 200 },
        { drink: "Espresso", name: "Mya Stuart", price: 210 },
        { drink: "Cappuccino", name: "Emma Berry", price: 200 },
        { drink: "Mocha", name: "John Snow", price: 220 },
        { drink: "Raf coffee", name: "John Snow", price: 220 },
        { drink: "Raf coffee", name: "Sansa Stark", price: 220 },
        { drink: "Latte macchiato", name: "Brand Stark", price: 250 },
    ];


    const orderFilter4 = orders
        .filter(item => (item.drink !== "Cappuccino"))
        .map(item => item.name+ " $" + item.price);
    console.log(orderFilter4);

    //recorre el arreglo de expresso
    const ordersMap = orders.map((item) => item);
    console.log(ordersMap);

    //filtrar por el drink === "Espresso"
    const orderfilter1 = orders
        .filter(item => (item.drink === "Espresso"))
        .map(item => item.name)
    console.log(orderfilter1); // [ 'Mya Stuart' ]


    //filtrar por el nombre === "Mya Stuart"
    const orderFilter2 = orders
        .filter(item => (item.name === "Mya Stuart"))
        .map(item => item.name)

    console.log(orderFilter2); //[ 'Mya Stuart' ]

    //filtar por el nombre === "Mya Stuart" y luego guardar en arreglo (map) lo que se filtro pero solo los nombres
    const orderFilter3 = orders
        .filter(item => (item.name !== "Mya Stuart"))
        .map(item => item.name);
    console.log(orderFilter3);


    
    const orderFilter5 = orders
        .filter(item => (item.price !== 200))
        .map(item => item.drink)
    console.log(orderFilter5);

    // ['Espresso','Mocha','Raf coffee','Raf coffee','Latte macchiato' ]

})();