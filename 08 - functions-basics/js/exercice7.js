/* // Your code goes here

1. Ouvrez le fichier `exercice7.js` dans votre éditeur de code.

2. Vous trouverez un commentaire indiquant où écrire votre code.

3. Vous avez une chaîne de caractères `texte` contenant un paragraphe.

4. Écrivez une fonction `extraireMots` qui prend la chaîne `texte` en paramètre et retourne un tableau contenant tous les mots présents dans le paragraphe en utilisant des méthodes de chaînes natives.

5. Écrivez une fonction `compterOccurrences` qui prend la chaîne `texte` et un mot en paramètres, puis retourne le nombre d'occurrences de ce mot dans le paragraphe en utilisant des méthodes de chaînes natives. */

let monParagraphe = "Lorem, ipsum dolor sit amet consectetur ipsum adipisicing elit. Officia quo aperiam ea nulla, nisi a vitae molestiae accusantium, dolore consectetur ipsa quod? Omnis, eos enim laudantium voluptates quas quia voluptas. Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatum. laborum, quia. asperiores, voluptates. et, voluptate. optio, quia. ter, voluptate.";

function extraireMots(texte){
    let mots = texte.split(' ');
    return mots;
}
function compterOccurrences(monTexte, motRecherche){
    let tableauMots = extraireMots(monTexte);
    let occurrences = 0;
    for( let i = 0; i < tableauMots.length; i++){
        if(tableauMots[i] == motRecherche){
            occurrences++;
        }
    }
    return occurrences;
}
let result = compterOccurrences(monParagraphe, 'ipsum');
console.log(result)