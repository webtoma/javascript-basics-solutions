// Your code goes here
// display memory usage by a JS loop
let tableA = [1, 2, 3, 4];
let tableB = [100, 100, 100, 100];
let tableC = [];
let lengthArray = tableA.length;
for(let i = 0; i < lengthArray; i++){
   tableC[i] = tableA[i] + tableB[i];  
}
console.log(tableC);

let tableE = [];
let tableD = [[0, 1, 2, 3, 4], [100, 100, 100, 100, 100]];
for (let i = 0; i < tableD[0].length; i++){
    let addition = tableD[0][i] + tableD[1][i];
    tableE[i] = addition;
}
console.log(tableE);