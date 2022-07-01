(()=>{

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

    const find1 = users
        .find((item)=>item.name ==="Amy");
    console.log(find1);

    const find2 = users
        .find((item)=>item.uid ===4);
    console.log(find2);

    const find3 = users
        .find((item)=>item.age ===20 && item.name ==="Amy")
    console.log(find3);




})();