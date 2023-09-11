// Your code goes here
console.log('---------- \nExercice 1\n----------')
let fruits = ["Apple", "Pear", "Banana", "Cherry"];
console.log(fruits);
console.log('Longueur du tableau: ' + fruits.length);
console.log(fruits[0]);
console.log(fruits[fruits.length - 1]);
fruits.push("Orange");
console.log(fruits);

// Tableau Multidimentionnel
let bigArray = [];
bigArray[0] = [1, 2, 3];
bigArray[1] = [4, 5, 6];
bigArray[2] = [7, 8, 9];


for(let i = 0; i < bigArray.length; i++){
    console.log(bigArray[i]);
    for (let j = 0; j < bigArray[i].length; j++){
        console.log(bigArray[i][j]);
    }
}
