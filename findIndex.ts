(()=>{

    const _ = require('lodash');

    const users = [
        { name: "John", age: 34 },
        { name: "Amy", age: 20 },
        { name: "camperCat", age: 10 },
    ];

    //findIndex normal
    let result = users.findIndex((item)=>item.name=='Amy');
    console.log(result);
    console.log(users[result]);

    //uso del findIndex de lodash
    let result2 = _.findIndex(users,{ name: "camperCat", age: 10 } );
    console.log('se encuentra en el indice '+result2);
    console.log(users[result2]);




})();