
// Attention au type de variable lors d'une comparaison stricte !
let number1 = "54";
number1 = parseInt(number1);
let number2 = 54;

if(number1 === number2){
    console.log('number1 est égal number2');
}