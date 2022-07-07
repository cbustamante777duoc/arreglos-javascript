(()=>{

    const users = [
        { name: "John", age: 34 },
        { name: "Amy", age: 20 },
        { name: "camperCat", age: 10 },
    ];


    const SortesUSers = users.sort((a,b) => a.age > b.age ? 1 : -1);
    console.log(SortesUSers);

        //ordenados por edad del menor al mayor
        //    { name: 'camperCat', age: 10 },
        //   { name: 'Amy', age: 20 },
        //   { name: 'John', age: 34 } ]


})();