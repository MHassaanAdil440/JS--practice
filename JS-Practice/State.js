let counter = 0;

function updateCounter(){
    counter++;
    displayCounter();
}

function displayCounter(){
    console.log(counter);
}

setInterval(function () {
    updateCounter();
},1000 );