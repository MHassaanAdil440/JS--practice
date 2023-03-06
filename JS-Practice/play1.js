const person = {
    name: 'Hassaan',
    age: 20,
    myfunc: () =>{
        console.log(this.name +' '+ this.age);
    },
    myfunc2: function (){
        console.log(this.name +' '+ this.age);
    },
    myfunc3(){
        console.log(this.name +' '+ this.age); 
    }
};

{/*console.log(person.name +' '+ person.age);*/}
{/*person.myfunc();*/}
{/*person.myfunc2();*/}

person.myfunc3();