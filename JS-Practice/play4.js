const person = {
    name: 'Hassaan',
    age : 20
};

const hobbies = ['programming ', 'learning ', 'movies ', 'exercise '];

{/*DESTRUCTURING*/}
const func = ({name}) =>{
    console.log(name);
};
func(person);

let [hobby1, hobby2, hobby3, hobby4] = hobbies;
console.log(hobby1);
console.log(hobby2);
console.log(hobby3);
console.log(hobby4);