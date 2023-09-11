function generateCell(){
    return Math.floor( 3 * Math.random() );
}
function addToHTML(myData){
    let p = document.createElement("p"); // Création de l'élément
    p.innerHTML = myData; // Injection du contenu textuel
    document.querySelector("body").append(p); // Insertion de l'élément dans le DOM
}

// ---- ONE ----
// Generate random rows and columns numbers for the matrix
// => use Prompt to ask the user for the number of rows and columns
// => verify the prompt values and if they are correct, generate the matrix

// ---- TWO ----
// Launch the Game events
// => create a function that can be launched by the button and that is going to launch the calculations of the game

// ---- THREE ----
// Launch game when clicking the start button
// => target the button and launch function onclick

// ---- FOUR ----
// Display the matrix as a html table
// =>modify the loop so it includes the html tags

// ---- FIVE ----
// Adding the function that will activate submarines and calculate their targets
// => loop through the matrix and check for submarines
//    => if a submarine is found, calculate the targets and display them in the console
//    => if no submarine is found, display a message in the console


function startGame(){
    tableRows = prompt("How many rows do you want?");
    tableColumns = prompt("How many columns do you want?");
    tableRows = parseInt(tableRows);
    tableColumns = parseInt(tableColumns);
    document.querySelector("body").style.backgroundColor = "lightblue";
    if(tableRows < 0 || tableRows >20 || typeof tableRows != "number"){
        tableRows = 10;
    }
    if(tableColumns < 0 || tableColumns >20 || typeof tableColumns != "number"){
        tableColumns = 10;
    }
    let ocean = [];
    for(let i = 0; i< tableColumns; i++){
        ocean[i] = [];
        for( let j = 0; j< tableRows; j++ ){
            ocean[i][j] = generateCell();
        }
    }
    displayOcean = '<table class="table">';
    for(i=0; i < ocean.length; i++){
        displayOcean += "<tr>";
        for(j=0; j < ocean[i].length; j++){
            displayOcean += "<td>";
            switch (ocean[i][j]){
                case 0:
                    displayOcean += "🧊";
                    break;
                case 1:
                    displayOcean += "🚢";
                    break;
                case 2:
                    displayOcean += "💥";
                    break;
            } 
            displayOcean+= "</td>";
        }
        displayOcean += "</tr>";
    }



    displayOcean += "</table>";
    document.querySelector("#ocean").innerHTML = displayOcean;
    // addToHTML(ocean);
}

document.querySelector('#start').addEventListener('click', startGame);
//startGame();