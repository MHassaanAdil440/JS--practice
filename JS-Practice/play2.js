const person = [
    'Hassaan',
    'Adil'
];

{/*console.log(person.map(fullname = () => 'Muhammad '+person));
console.log(person);*/}

const name = [
    {firstname : 'Hassan', lastname: 'Adil'},
    {firstname: 'Awais', lastname: 'Amir'},
    {firstname: 'Saad' , lastname: 'Khalid'}
];

name.push({firstname: 'Nasheeta', lastname:'Adil'});

function fullName(name){
    return [name.firstname, name.lastname].join(' ');
}
// console.log(name.map(fullName));

{/*REST PARAMETERS*/}
const restFunt = (...args) => args;
// console.log(restFunt(1,2,3,4));

{/*SPREAD OPERATOR*/}
const copy = [name.push()];
const spreadOperator = [...name];
{/*console.log(spreadOperator);
console.log(name);
console.log(copy);*/}


{/*const persons = [
    {firstname : "Malcom", lastname: "Reynolds"},
    {firstname : "Kaylee", lastname: "Frye"},
    {firstname : "Jayne", lastname: "Cobb"}
  ];
  
  persons.map(getFullName);
  
  function getFullName(item) {
    return [item.firstname,item.lastname].join(" ");
  }*/}