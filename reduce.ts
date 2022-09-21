
(()=>{


  //encuentra el primer numero par del array
  let array1 = [2,3,4,5,6,7,8,9,10,11,12,13,14,15,16];
  const result = array1.findIndex((item)=> item%2 == 0);
  console.log(result); //0

  //filtrar los numeros impares de un array
  let result2 = array1.filter((item) => item%2 == 1);
  console.log(result2); //[ 3, 5, 7, 9, 11, 13, 15 ]

  interface ordersInterface{
      drink: string;
      name: string;
      price: number;
  }


  const orders:ordersInterface[] = [
      { drink: "Cappuccino", name: "John Appleseed", price: 200 },
      { drink: "Espresso", name: "Mya Stuart", price: 210 },
      { drink: "Cappuccino", name: "Emma Berry", price: 200 },
      { drink: "Mocha", name: "John Snow", price: 220 },
      { drink: "Raf coffee", name: "John Snow", price: 220 },
      { drink: "Raf coffee", name: "Sansa Stark", price: 220 },
      { drink: "Latte macchiato", name: "Brand Stark", price: 250 },
  ];

  //filtrar por dos condiciones
  const result3 = orders.
  filter(item => item.drink === "Cappuccino" && item.name === "John Appleseed");
  console.log(result3);



  //eliminar el primer elemento del array de orders
  console.log(orders.pop()); //{ drink: 'Latte macchiato', name: 'Brand Stark', price: 250 }

  //ejercicio 4:encontrar todos los price ==220     
  const result4 = orders.filter(item=> (item.price ==220));
  console.log(result4);

  // |[ { drink: 'Mocha', name: 'John Snow', price: 220 },
  //   { drink: 'Raf coffee', name: 'John Snow', price: 220 },
  //   { drink: 'Raf coffee', name: 'Sansa Stark', price: 220 } ]

  //suma todos los precios de las orders
  const result5 = orders.reduce((total, item) => total + item.price, 0);
  console.log(result5);//1270

  



})();