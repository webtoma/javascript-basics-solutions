// Your code goes here
/*
1. Ouvrez le fichier `exercice4.js` dans votre éditeur de code.
2. Vous trouverez un commentaire indiquant où écrire votre code.
3. Créez un tableau vide pour stocker les tâches.
4. Utilisez `prompt` pour permettre à l'utilisateur d'ajouter, supprimer ou afficher des tâches.
5. Affichez les tâches dans `alert` pour les afficher à l'utilisateur.
*/

let tasks = [];

function taskManager(){
    let answer = prompt(
        `Que voulez vous faire ? "add", "delete" ou "display" 
        \n "add" => ajouter à la liste des tâches,
        \n "delete" => supprimer à la liste des tâches,
        \n "display" => afficher la liste des tâches.
        \n "exit" => sortie.`
    );
    if( answer == "add" ){
        let oneTask = prompt('quelle tâche voulez vous ajouter?');
        tasks.push(oneTask + '\n');
    }else if ( answer == "delete" ){
        tasks.pop();
    }else if ( answer == "display" ){
    }else if ( answer == "exit" ){
        return;
    }else{
        alert("Mauvaise manip' !");
    }
    if(answer == "add" || answer == "delete" || answer == "display"){
        alert(tasks)
    }
    taskManager();
}

taskManager();