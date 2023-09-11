let myTitle = "Les sous-marins";
console.log(myTitle);
console.log(document.querySelector("#title"));
document.querySelector("#title").innerHTML = myTitle;

function generateNumber(){
    let myNumber;
    myNumber = Math.floor( 3 * Math.random() );
    // console.log(myNumber);
    return myNumber;
}

myCell = generateNumber();
console.log(myCell);

tableRows = 5;
tableColumns = 5;
let ocean = [];
for(let i = 0; i< tableColumns; i++){
    ocean[i] = [];
    for( let j = 0; j< tableRows; j++ ){
        ocean[i][j] = generateNumber();
    }
}

console.log(ocean);