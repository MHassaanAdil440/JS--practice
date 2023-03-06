var name = 'Hassaan';
var age = 20;
var hasHobbies = true;

{/*NORMAL FUNCTION*/}
function summarizeUser(username, userage, userHasHobby){
    return(
        'Name is ' +
        username +
        ', Age is '+
        userage +
        ' and the user has hobbies: '+
        userHasHobby
    );
};

{/*ANANOYMOUS FUNCTION*/}
const ananomousFunc = function (username, userage, userHasHobby){
	return(
		'ANANOMOUS FUNCTION: Name is ' +
        username +
        ', Age is '+
        userage +
        ' and the user has hobbies: '+
        userHasHobby
	);
};

{/*ARROW FUNCTION with multiple parameters*/}
const arrowFunc = (username, userage, userHasHobby) => {
	return(
		'ARROW FUNCTION: Name is ' +
        username +
        ', Age is '+
        userage +
        ' and the user has hobbies: '+
        userHasHobby
	);
};

{/*ARROW FUNCTION with one parameter*/}
const arrowFunc1 = a => a + 1;

{/*ARROW FUNCTION with no parameter*/}
const arrowFunc0 = () => 2 + 1;


console.log(arrowFunc(name,age,hasHobbies));
console.log(arrowFunc1(4));
console.log(arrowFunc0());