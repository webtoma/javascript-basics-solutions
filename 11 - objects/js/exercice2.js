let person = {
    prenom: "John",
    nom: "Doe",
    age: 35
}
let person2 = {
    prenom: "Jane",
    nom: "Doe",
    age: 25
}
let person3 = {
    prenom: "michel",
    nom: "ange",
    age: 78
}
let person4 = {
    prenom: "albert",
    nom: "einstein",
    age: 90
}

// Tableau stockant plusieurs objets:
let tableauPersonnes = [person, person2, person3, person4];
console.log(tableauPersonnes);

// Boucle pour afficher chaque objet du tableau:
tableauPersonnes.forEach( function(element){
    let content = document.createElement('p');
    if(element.age > 60){
        content.style.color = 'red';
    }
    content.innerHTML = element.prenom + ' ' + element.nom + ' ' + element.age;
    document.body.appendChild(content);
    console.log(element.prenom);
});