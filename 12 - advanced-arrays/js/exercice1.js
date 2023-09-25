// Your code goes here

let tableA = [1, 2, 3, 4];
let tableB = [100, 100, 100, 100];
let tableC = [];
for(let i = 0; i < tableA.length; i++){
   let addtion = tableA[i] + tableB[i];
   tableC[i] = addtion;  
}
console.log(tableC);

let tableE = [];
let tableD = [[0, 1, 2, 3, 4], [100, 100, 100, 100, 100]];
for (let i = 0; i<tableD[0].length; i++){
    let addition = tableD[0][i] + tableD[1][i];
    tableE[i] = addition;
}
console.log(tableE);