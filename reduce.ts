(()=>{

    const users = [
        { name: "John", age: 34 },
        { name: "Amy", age: 20 },
        { name: "camperCat", age: 10 },
    ];



    //  METODO QUE SUMA TODO 
    /**
     * suma todas las edades de los users y empienza en 0
     */
    const result = users.reduce((total, item)=> total + item.age, 0);

    console.log(result); //64

    const developers = [
        {
          id: 1,
          name: "John",
          skills: ["HTML", "React", "Javascript", "Java"],
        },
        {
          id: 2,
          name: "Jane",
          skills: ["HTML", "CSS", "JavaScript", "React", "Redux", "NodeJS"],
        },
        {
          id: 3,
          name: "Jack",
          skills: ["HTML", "CSS", "JavaScript", "React", "Redux", "NodeJS"],
        },
      ];

      const result2 = developers.reduce(function
        (allSkills, item) {
        // return [...allSkills, ...item.skills] //copia todos los elements
        // return new Set([...allSkills, ...item.skills]) //evita que se copien los valores repitidos
        return Array.from(new Set([...allSkills, ...item.skills])) //obtiene un nuevo array
      },[]);

      console.log(result2); //[ 'HTML','React','Javascript','Java','CSS','JavaScript','Redux','NodeJS' ]
      

      //https://www.digitalocean.com/community/tutorials/js-finally-understand-reduce
      //https://stackoverflow.com/questions/64188099/how-to-reduce-array-of-objects-into-one-object
      //https://stackoverflow.com/questions/67098336/how-reduce-array-of-objects
      

})();