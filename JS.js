/*

.: DEFINITION :.

Langage de script léger, orienté objet. Le code JavaScript est interprété ou compilé à la volée (JIT, just-in-time compilation). C'est un langage à objets utilisant le concept de prototype (un objet à partir duquel on crée de nouveaux objets), disposant d'un typage faible (autoriser l’affectation de variable avec des valeurs ne correspondant pas à son type déclaré) et dynamique (laisser l'ordinateur réaliser cette opération de typage « à la volée ») qui permet de programmer suivant plusieurs paradigmes de programmation : fonctionnelle, impérative et orientée objet.

Le standard pour JavaScript est ECMAScript. En 2012, tous les navigateurs modernes supportent complètement ECMAScript 5.1.

.Objet.

Possède plusieurs propriétés qui lui sont associées.
Une propriété peut être vue comme une variable attachée à l'objet.

.Méthode.

Une fonction (function) qui est une propriété d'un objet. Deux sortes de méthodes :
- méthodes d'instance : fonctions fournissant une interface pour effectuer des actions dans le contexte de l'objet qu'elles composent
- méthodes statiques : fonctions pouvant être exécutées sans nécessiter d'instanciation

Fonctions sont elles-mêmes des objets => méthode est plus précisément une référence vers un objet de type function.


.: ETAPES A SUIVRE ET INFORMATIONS :.

- utiliser le Camel Case pour les noms des variables (nomDeFamille)
- variable définie par trois paramètres : son type, son nom, sa valeur/son contenu
- types de variable : 'string' (caractères), 'number' (numérique), 'boolean' (booléenne : état 'true' ou 'false'), 'undefined' (indéfinie : non déclarée, sans valeur, valeur 'undefined' affectée)
- condition : test qui vérifie si une expression est vérifiée ('true' ou 1) ou pas ('false' ou 0). Utilise trois concepts : boléens, opérateurs de comparaison, opérateurs logiques
- objet possède trois éléments : un constructeur (initialise l'object associé), des propriétés, des méthodes (fonctions natives de JS)
- utiliser la syntaxe littérale de préférence ( var objet = [];)
- utiliser les points-virgules
- on divise en plusieurs parties : on appelle des scripts JS d'autres fichiers (externalisés, qui ne concernent pas spécifiquement le programme)
- on organise son document dans cet ordre : part1 'variables' part2 'functions' part3 'programs'

*/



/* ----- CONVENTIONS ----- */

// lorsque sauvegarde une référence à this, utilisez _this
// nommer les fonctions
// fonction moyenne : moins de 20 lignes
// une ligne : moins de 80 caractères



/* ---------- VARIABLES ---------- */

var maVariable = maValeur
// déclarer une variable (peut être réassignée, fait du hoisting : se charge tout en haut du code au lancement mais assigne la valeur à l'endroit où est déclarée)

var var1, var2, var3
// déclarer plusieurs variables

let maVariable
// déclarer une variable locale (ne peut pas être re-déclarée, n'est pas accessible avant qu'elle apparaisse)

const MA_CONSTANTE
// déclarer une constante (ne peut pas être réassignée et n'est pas accessible avant qu'elle apparaisse dans le code)

this
// prend la valeur de l'objet global dans lequel il est (objet, fonction)
// utilise en général var self = this pour être sûr de garder le bon this


/* ---------- OBJET ---------- */

var person = {firstName:"John", lastName:"Doe"}
//ou
var maVoiture = new Object();
	maVoiture.fabricant = "Ford";
	maVoiture.modèle = "Mustang";
	maVoiture.année = 1969;
// construire son objet

nomObjet.nomPropriete
// accéder à la propriété d'un objet

this
// dans un objet, représente l'objet

/* ---------- OBJET DE TYPE ARRAY ---------- */

// objet global Array utilisé pour créer des tableaux (objets de haut-niveau (en termes de complexité homme-machine) semblables à des listes)
// tableau permet de stocker une liste de valeurs (texte, nombre, boléen, tableau)

var maVariable = ["fruits", "légumes", 5]
// déclarer un tableau

var maVariable = new Array("fruits", "légumes", 5)
// déclarer un tableau

monTableau[indice]
// récupérer une valeur d'un tableau

var tableau1 = [
                ['lol', 'lol2']
                ['ananas', 'fraise', 'kiwi']
                ]
// déclarer un tableau qui contient d'autres tableaux

tableau1[1][2]
// accéder à l'index 2 du tableau qui est à l'index 1 de tableau1 ('kiwi')

monTableau.push('élément')
// ajouter un élément à la fin du tableau

monTableau.unshift('élément')
// ajouter un élément au début du tableau

monTableau.pop()
// supprimer le dernier élément du tableau

monTableau.shift()
// supprimer le premier élément du tableau

array1.forEach(callbackfn, thisArg)
// exécute l'action spécifiée pour chaque élément d'un tableau
// callbackfn : nom de la fonction acceptant jusqu'à trois arguments
// thisArg : optionnel, objet auquel le mot clé this peut faire référence dans la fonction callbackfn. Si thisArg est omis, undefined est utilisé en tant que valeur this.

var pos = monTableau.indexOf('élément'); // ('élément', 2) pour commencer dès index 2
// renvoie le premier indice pour lequel on trouve un élément donné dans un tableau (sinon renvoie -1)

var removedItem = monTableau.splice(pos, 1);
// supprimer un élément en utilisant son index (pos)
// 1 est remplaçable pour supprimer les suivants



typeof(maVariable)
// afficher le type de la variable

element.length
// retourner le nombre de la longueur (d'une chaine, d'un tableau...)



/* ---------- OPERATEURS ---------- */

/* opérateurs basics */

+ // addition (/concaténation)
- // soustraction
/ // division
* // multiplication
= // égal (/affectation)
% // modulo : reste entier d'une division

maVariable++ // incrémentation après de +1
++maVariable // incrémentation avant de +1

maVariable-- // décrémentation après de -1
--maVariable // décrémentation avant de -1

/* opérateurs de comparaison faibles : qui effectuent des conversions */

== // équivalence
>= // supérieur ou égal
!= // différent

/* opérateurs de comparaison stricts, typés */

=== // équivalence en valeur et en type
<== // inférieur ou égal en valeur ou en type
!== // différent en valeur ou en type

? // opérateur ternaire



/* ---------- FONCTIONS ---------- */

// c'est un objet (nouveau type de variable)
// a accès au contexte extérieur (closure si l'utilise)
// une fonction callback est placée en paramètre
// quand on déclare une fonction à l'intérieur (même si même nom que contexte extérieur), n'a pour portée que l'intérieur de la fonction

function maFonction(arg1,arg2,arg3) {
  if (typeof texte == 'string') {
      return "texte";
  }
  else {
      return false;
  }
}
// déclarer une fonction (avec hoisting : sera entièrement définie tout en haut de la page) et renvoyer une valeur en sortie
// peut rajouter if arg2 === undefined pour définir une valeur par défaut si argument non renseigné

var maFonction = function (arg1) {
  // mon code
}
// 2e façon de définir une fonction, sans hoisting

maFonction(arg1,arg2,arg3)
// exécuter la fonction en choisissant les arguments
// tous les arguments doivent être renseignés, sinon l'argument est undefined

var maVariable = {
  nomDeMaMethode: function () {
      console.log('texte')
  }
}
// on fera maVariable.methode pour exécuter la fonction
// on parle de méthode car c'est une fonction utilisée sur un objet

([param] [, param]) => { instructions }
// fonction fléchée (n'a pas de nom) (remplace function())

console.log("élémentAffiché")
// affiche l'information dans la console

isFinite(valeurTestée)
// retourne false si la valeur passée en argument vaut Infinity ou NaN, sinon true

isNaN(valeurTestée)
// retourne true si la valeur est bien NaN

parseInt("élément")
// retourne le premier nombre entier dans une chaine de caractères, NaN si insatisfait

parseFloat("élément")
// retourne le premier nombre décimal (avec un .) dans une chaine de caractères, NaN si insatisfait

tableau.join('-')
// crée et renvoie chaîne de caractères en concaténant éléments (ici - pour séparateur)



/* ---------- IF - ELSE ---------- */

if (condition) {
  // instruction si condition vérifiée
} else {
  // instruction sinon
}



/* ---------- BOUCLES ---------- */

var expr = 'Papayas';
switch (expr) {
  case 'Oranges':
    console.log('Oranges are $0.59 a pound.');
    break;
  case 'Papayas':
    console.log('Mangoes and papayas are $2.79 a pound.');
    break;
  default:
    console.log('Sorry, we are out of ' + expr + '.');
}
// switch : évalue une expression et, selon le résultat obtenu et le cas associé, exécute les instructions correspondantes

for ([expressionInitiale]; [condition]; [expressionIncrémentALaFinDuCycle]) {
  // instruction
}
// for : répète des instructions jusqu'à ce qu'une condition donnée ne soit plus vérifiée

do {
  // instruction
}
while (condition);
// do...while : comme while, mais exécute au moins une fois

while (condition) {
  // instruction
}
// while permet d'exécuter une instruction tant qu'une condition donnée est vérifiée

break // arrête la boucle
continue // ne termine pas la boucle complètement:
// dans boucle while: repart à la phase de la condition
// dans boucle for : repart à l'expression de mise à jour de la boucle



/* ---------- L'OBJET MATH ---------- */

Math.round(5.95); // output: 6
// retourne la valeur d'un nombre arrondi à l'entier le plus proche

Math.ceil(.95); // output: 1
// retourne le plus petit entier supérieur ou égal au nombre donné

Math.floor(-5.05); // output: -6
// renvoie le plus grand entier qui est inférieur ou égal au nombre

Math.random()
// renvoie nombre flottant pseudo-aléatoire dans intervalle [0, 1[



/* ---------- LE DOM (Document Object Model) ---------- */

// interface de programmation pour documents HTML, XML et SVG
// fournit représentation structurée du document sous forme d'un arbre dont la racine est html
// définit la façon dont la structure peut être manipulée par les programmes, en termes de style et de contenu
// au fur et à mesure de la lecture du fichier HTML le navigateur web construit sa structure dans la mémoire
// représente le document comme un ensemble de nœuds et d'objets possédant des propriétés et des méthodes
// les nœuds peuvent également avoir des gestionnaires d'événements qui se déclenchent lorsqu'un événement se produit. Cela permet de manipuler des pages web grâce à des scripts et/ou des langages de programmation. Les nœuds peuvent être associés à des gestionnaires d'événements. Une fois qu'un événement est déclenché, les gestionnaires d'événements sont exécutés.

/* API SELECTORS */

document.querySelector('sélecteursCSS');
// retourne le premier élément dans le document correspondant aux sélecteurs spécifié (null sinon)

document.querySelector("div.panneau-utilisateur.principal input[name='identifiant']");
// le premier élément <input name="identifiant"/> dans un <div class="panneau-utilisateur principal"> dans le document est retourné

document.querySelectorAll(selecteurs);
// renvoie NodeList (collections de nœuds, pas vraiment un tableau (Array)) statique représentant liste éléments

document.getElementById('monId');
// renvoie l'élément HTML dont l'id correspond

document.getElementsByClassName('maClasse');
// renvoie les éléments HTML dont la classe correspond

document.createElement('nomDuTag'[, options]);
// crée un élément HTML du type spécifié

element.getElementsByTagName('tagName')
// retourne liste live des éléments portant nom de balise donné dans le sous-arbre de l'élément spécifié (non inclus) (argument converti en minuscule)

element.getElementsByTagNameNS()
// argument non converti en minuscule (pour .svg ...)

/* CREER, INSERER ET MODIFIER DES ELEMENTS */

document.write(`Bonjour ${maVariable}<br>`)
// écrire directement dans le HTML

document.createTextNode(données);
// Crée un nouveau nœud de texte. (donnees est une chaîne contenant les données à placer dans le nœud de texte.)

element.appendChild(enfant);
// ajoute un nœud à la fin de la liste des enfants d'un nœud parent spécifié. Si l'enfant donné est une référence à un nœud existant dans le document, appendChild() le déplace  de sa position actuelle vers une nouvelle position (il n'est pas nécessaire de supprimer le noeud sur son noeud parent avant de l'ajouter à un autre).

parentNode.insertBefore(newNode, referenceNode);
// Node.insertBefore() insère un nœud juste avant le noeud de référence en tant qu'enfant du nœud parent spécifié. Si l'enfant donné est une référence à un noeud existant dans le document, insertBefore() le déplace vers sa nouvelle position (il n'est pas nécessaire de supprimer le noeud de son parent avant son ajout à un autre noeud).

Element.setAttribute('name', 'value')
// Ajoute un nouvel attribut ou change la valeur d'un attribut existant pour l'élément spécifié. Si l'attribut existe déjà, la valeur est mise à jour ; sinon, un nouvel attribut est ajouté avec le nom et la valeur spécifiés.

element.getAttribute('')
// obtenir la valeur actuelle d'un attribut

element.removeAttribute('')
// supprimer un attribut

Node.cloneNode()
// une copie de noeud avant de l'ajouter à son nouveau parent

/* API CLASSLIST : manipuler les classes des éléments */

p.classList.add('classe1, classe2')
// ajouter la classe 'red' à l'élement p

p.classList.remove('')
 // retirer la classe 'red' à l'élement p

p.classList.toggle('')
// ajoute ou supprime une classe, si elle est présente initialement ou non

p.classList.contains('')
// retourne true si une classe est présente et false sinon

p.classList.length
// retourne le nombre de classes

p.classList.contains('')
// retourne true si une classe est présente et false sinon

p.classList.toString()
// retourne la chaîne de texte complète

p.classList.replace('ancienneClasse', 'nouvelleClasse')

/* Agir sur les éléments du DOM */

p.style.fontSize = 'valeur'
// modifier le style CSS de p (utiliser le camel case)

p.innerHTML = "<strong>Salut</strong> les gens !"
// modifier le contenu html

p.innerText = 'contenu' // attention, pas partout défini sur IE
// modifier le noeud texte d'un contenu HTML

p.textContent = 'texte'
// représente le contenu textuel d'un nœud et de ses descendants

/* Ajouter une image, un texte et améliorer le style */

var imgElement = document.createElement('img');
imgElement.setAttribute('src', 'img/dragon_wins.jpg');
document.body.appendChild(imgElement);
imgElement.style.width = "100%";

var viTxtDragon = document.createElement('p');
viTxtDragon.style.color = 'white';
viTxtDragon.style.fontWeight = 'bold';
viTxtDragon.innerText = "Le Dragon a gagné !"
document.body.appendChild(viTxtDragon);



/* ---------- GESTIONNAIRE D'EVENEMENTS ---------- */

// 1. phase de capture de l'événement (event capturing) : navigateur visite l'arbre DOM (racine -> enfants) et exécute les gestionnaires rencontrés (addEventListener() à true)
// 2. phase de bouillennement de l'événement (event bubbling) : une fois arrivé au bout, le navigateur repart dans l'autre sens (addEventListener() à false)

cible.addEventListener('click', fnCallBack)
// met en place une fonction à appeler chaque fois que l'événement spécifié est remis à la cible

cible.removeEventListener('type', listener[, options])
// supprime écouteur d'évènements identifié

event.currentTarget
// identifie la cible actuelle de l'évènement, lorsque l'évènement traverse le DOM

object.onkeydown = function(){monScript};
object.addEventListener("keydown", maFonction, true);
// définit et renvoie le gestionnaire d'évènement keydown de l'élément courant.

function maFonction(e) { var x = e.keyCode; switch (x) {case 39: code break; }
// exécuter une instruction en fonction de la touche appuyée

this
// pour un événement : vaut l'élément HTML sur lequel on a cliqué avant la fonction callback



/* ---------- VARIABLE GLOBALE WINDOW ---------- */

// toutes les variables créées sont des propriétés de window => attention à ne pas écraser du code avec plusieurs fichiers .js
// si veut éviter : déclarer la variable et l'exécuter dans une fonction
// peut enlever le window car on se situe dans le contexte global donc dans l'objet window

window.alert('message')
// crée une boite de dialogue avec message, bloque l'exécution du script tant que l'utilisateur n'a pas cliqué sur ok

window.prompt("texteAffiché", "texteParDéfaut")
// crée une boite de dialogue avec un champ de texte et retourne ce que l'utilisateur y a écrit (string)

window.confirm('message')
// crée boite de dialogue avec bouton ok et annuler (si ok = true, si annuler = false)

setInterval(nomFonction, entierMilliseconds[, param1, param2])
// lance fonction à intervalle régulier défini par delai (! pas de () pour fonction)

setTimeout(nomFonction, entierMilliseconds[, param1, param2])
// lance fonction ou évalue expression après temps spécifié

clearInterval(varContenantSetInterval)
// arrête l'exécution d'un traitement à intervalle régulier

clearTimeout(IDdeTimeout)
// supprime un délai spécifié par un appel antérieur à setTimeout()



/* ---------- LES PROTOTYPES ---------- */

// peut le détourner pour utiliser dans notre code

Object.getPrototypeOf(obj)
// renvoie le prototype d'un objet donné (i.e. la valeur de la propriété [[Prototype]] interne)

var lol Object.create(proto[, objetPropriétés])
// crée un nouvel objet avec un prototype donné et des propriétés données
// lol.proto permet d'accéder au prototype

/* création d'un constructeur */

var Eleve = function (nom) {
  this.nom = nom // création d'une propriété d'instance
}
// Eleve est une classe

Eleve.prototype.moyenne = function() {} // création de la méthode moyenne
// fonction qui sera dans le prototype d'élève

var jean = new Eleve('jean')
var marc = new Eleve('marc')
// jean et marc sont des instances de l'objet Eleve (héritent des méthodes d'Eleve et peuvent avoir leurs propres propriétés). On utilise des méthodes avec prototype pour agir dans les instances


/* ---------- TRY CATCH ---------- */

// regroupe des instructions à exécuter et définit une réponse si l'une de ces instructions provoque une exception
// évite que toute l'application s'arrête à cause d'une erreur

try {
  // instruction qu'on souhaite exécuter
}
[catch (variableErreur) { // prend en paramètre variable qui sera l'erreur qui sera envoyée
  // instruction à exécuter si exception est levée dans bloc try
}]
[finally {
  // instruction qui s'excécute qu'il y ait ou non exception
}]

throw new Error(['message'[, fileName[, lineNumber]]])
// renvoie une erreur




/******************************************************************************/
/************** METHODES DE L'INTERFACE STORAGE *******************************/
/******************************************************************************/

monStockage = window.localStorage // ou window.sessionStorage
// propriété, accède à objet local Storage (sans expiration, !=sessionStorage)

storage.setItem('clé', valeur);
// accède à Storage du domaine courant et lui ajoute entrée (MAJ si clé existe)

storage.getItem('clé');
// renvoie valeur associée à clé passée en paramètre

storage['key'] = value;
// permet d'accéder et d'ajouter

storage.removeItem('key');
// supprime du storage ressource avec nom clé correspondant

storage.clear();
// vide toutes les clés stockées

storage.key(cleN);
// prend nombre n en argument et retourne n-ième clé contenue
// ordre clés définie par navigateur => pas s'y référer



The @param tag provides the name, type, and description of a function parameter.

The @param tag requires you to specify the name of the parameter you are documenting. You can also include the parameter's type, enclosed in curly brackets, and a description of the parameter.

/**
 * @param {string} somebody - Somebody's name.
 */
function sayHello(somebody) {
    alert('Hello ' + somebody);
}


$(function() { ... });
is just jQuery short-hand for

$(document).ready(function() { ... });

JSON stringify
