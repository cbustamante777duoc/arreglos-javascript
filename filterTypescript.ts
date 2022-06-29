(() => {

    interface userInterface {
        uid: number;
        name: string;
        age: number;
    };

    interface ordersInterface {
        drink: string;
        name: string;
    };

    const frutas = ["platano", "perra", "frutilla"];

    const users: userInterface[] = [
        { uid: 1, name: "John", age: 34 },
        { uid: 2, name: "Amy", age: 20 },
        { uid: 3, name: "camperCat", age: 10 },
    ];

    let students = [

        {

            name: 'Alvaro',

            score: 10,

        },

        {

            name: 'Daniel',

            score: 16,

        },

        {

            name: 'Alexys',

            score: 12,

        },

        {

            name: 'Rafa',

            score: 17,

        },

        {

            name: 'Alejandro',

            score: 8,

        },

        {

            name: 'Sofia',

            score: 9,

        }

    ]


    //let approved = students.filter(student => student.score >= 11);
    const orders: ordersInterface[] = [
        { drink: "Cappuccino", name: "John Appleseed" },
        { drink: "Espresso", name: "Mya Stuart" },
        { drink: "Cappuccino", name: "Emma Berry" },
    ];



    //recorre el arreglo de expresso
    const ordersMap = orders.map((item) => item);
    console.log(ordersMap);

    //filtrar por el drink === "Espresso"
    const orderfilter1 = orders.filter(item => (item.drink === "Espresso"));
    console.log(orderfilter1); //{ drink: 'Espresso', name: 'Mya Stuart' } ]


    //filtrar por el nombre === "Mya Stuart"
    const orderFilter2 = orders.filter(item => (item.name === "Mya Stuart"));
    console.log(orderFilter2);

    //filtar por el nombre === "Mya Stuart" y luego guardar en arreglo (map) lo que se filtro pero solo los nombres
    const orderFilter3 = orders
        .filter(item => (item.name !== "Mya Stuart"))
        .map(item => item.name );
    console.log(orderFilter3);

})();