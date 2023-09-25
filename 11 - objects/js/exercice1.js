let person = {
    prenom: "John",
    nom: "Doe",
    age: 35,
    sayMyName: function(){
        console.log(this.prenom + ' ' + this.nom)
    }
}
person.sayMyName(); // Lance la fonction action de l'objet person.
let person2 = {
    prenom: "Jane",
    nom: "Doe",
    age: 25
}

// Tableau stockant deux objets:
let array = [person, person2];
console.log(array);