/******************************************************************************/
/************** DEFINITIONS ***************************************************/
/******************************************************************************/

/*
- langage de script léger, orienté objet interprété
- compilé à la volée (JIT, just-in-time), single-threaded (un pile exécution)
- utilise concept de prototype (objet à partir duquel crée de nouveaux objets)
- typage faible (peut affecter valeurs correspondant pas type variable déclaré)
- typage dynamique (laisse ordinateur réaliser opération typage « à la volée »)
- paradigmes programmation applicables: fonctionnelle,impérative,orientée objet
- standard = ECMAScript

# PROGRAMMATION SYNCHRONISEE / DESYNCHRONISEE
- synchronisée de base (une seule pile d'exécution, exécution selon principe
LIFO : Last In, First Out)
- desynchronisation possible avec APIs Web (DOM, AJAX), fonctions callback
avec timer (setTimeout)...

# OBJET
- possède plusieurs propriétés qui lui sont associées
- propriété peut être vue comme variable attachée à l'objet

# METHODE : fonction qui est propriété d'un objet. Deux sortes :
- méthode d'instance : fournit interface pour actions dans contexte objet
- méthode statique : exécutable sans nécessiter instanciation
*/

/******************************************************************************/
/************** ETAPES A SUIVRE, INFOS ****************************************/
/******************************************************************************/

/*
- condition: test qui vérifie si expression vérifiée ('true' / 1 ou 'false' / 0)
-- utilise trois concepts : boléens, opérateurs comparaison, opérateurs logiques
- utiliser la syntaxe littérale de préférence (var objet = [];)
- diviser: appelle scripts JS d'autres fichiers (externalisés)
- organiser son document: part1 'variables' part2 'functions' part3 'programs'
- BABEL permet rendre code récent compatible pour tous navigateurs (babeljs.io)
*/

/******************************************************************************/
/************** ECMAScript 7 & 8 (ES7, ES8) ***********************************/
/******************************************************************************/

/** nouvelles méthodes sur objets intéressantes à combiner avec boucles **/
Object.values(obj)
// renvoie tableau contenant valeurs propriétés propres énumérables objet
Object.entries(obj)
// renvoie tableau propriétés propres objet sous forme paires [clé, valeur]
const object = { 0: 'a', 1: 'b', 2: 'c' };
console.log(Object.entries(object)[2]); // retourne: Array ["2", "c"]
Object.keys(obj);
// renvoie tableau contenant noms des propriétés propres à l'objet

const array = (a,b,c,); // laisser virgule fin valide

// compléter chaîne courante avec chaîne de caractères
str.padStart(longueurCible [, chaîneComplémentaire])
str.padEnd(longueurCible [, chaîneComplémentaire])

x**2; // x puissance 2

str.includes(stringRecherché[, positionDeCommencement])
'Helloooo'.includes('o'); // retourne true
const pets = ['cats', 'dog', 'bat'];
pets.includes('dog'); // retourne true

/******************************************************************************/
/************** ECMAScript 5 & 6 (ES5, ES6) ***********************************/
/******************************************************************************/

/** MODULES **/
// création module JavaScript pour exporter fonctions/objets/valeurs primitives
export { maFonction }; // export nommé d'une fonction précédemment déclarée
export const add = (a, b) => a + b; // export nommé d'une constante
export default function maFonction() {}; // export par défaut (un seul possible)
export default class {};
export * from xxx;
export { variable1 as nom1, variable2 as nom2, nomN };
export let nom1 = xxx, nom2 = xxx;
// importer liens exportés par autre module (interprétés en mode strict)
import exportParDefaut from "nom-module";
import * as nom from "nom-module";
import { export } from "nom-module";
import { export as alias } from "nom-module";

/** DESTRUCTURING **/
// assigner variables d'un objet/tableau (repose sur leur structure)
// peut destructurer tableau/objet retourné par une fonction
// OBJET
var monObjet = { foo: 'a', bar: 'b'}; // soit un objet
var foo = monObjet.foo; // méthode ES5
foo; // 'a'
const { foo, bar } = monObjet; // méthode ES6
foo; // 'a'
bar; // 'b'
// TABLEAU
const [first, second, , fourth] = [1, 2, 3, 4]; // on ignore un item ici
first; // 1
second; // 2
fourth; // 4

/** FOR OF (pour itérer => pour tableaux et string) **/
for(item of monTableau) { // peut itérer sur string
	console.log(item);
}

/** FOR IN (pour énumérer => pour objets) **/
for(item in monObjet) {
	console.log(item); // retourne les propriétés (pas valeurs)
}

/** LET **/
let // portée (scope) = plus proche enclosing block (parent englobant) (for...)
let { wizardLevel } = obj; // déclaration lisible possible

/** CONST **/
const // variable non réassignable, mais peut changer les propriétés des objets
const { player, experience } = obj; // déclaration lisible possible
const name = 'john snow';
const obj = { // déclaration dynamique d'objet
	[name]: 'hello',
	[1 + 2]: 'hihi'
}
const a = 3;
const b = {};
const obj = { a, b }; // pas besoin de spécifier valeurs, déjà pris en compte

/** TEMPLATE STRINGS **/
`Hello ${name} you seem to be ${age-10}.` // utilisation variables name et age

/** ARGUMENTS PAR DEFAUT **/
function greet(name='', age=30, pet='cat') { // arg utilisés si non précisés
	return `Hello ${name} you seem to be ${age-10}. What a lovely ${pet} here!`
}

/** SYMBOL **/
let sym1 = Symbol('foo');
let sym2 = Symbol('foo');
sym2 === sym1 // false, car symbol crée type unique

/** FONCTIONS FLECHEES **/
const add = (a, b) => a + b; // function add(a, b) { return a + b; }
// pour la CURRYFICATION (currying, transformation fonction plusieurs arguments
// en une fonction à un argument qui retourne une fonction sur reste arguments):
const curriedMultiply = (a) => (b) => a * b;
// permet de créer fonctions manière souple :
const multiplyBy5 = curriedMultiply(5);
multiplyBy5(3); // retournera 15
// pour la COMPOSITION
const compose = (f, g) => (a) => f(g(a));
const sum = (num) => num + 1;
compose(sum, sum)(5); // retourne 7 (5+1 = 6 + 1 = 7)

/** forEach() **/

/******************************************************************************/
/************** VARIABLES *****************************************************/
/******************************************************************************/

// définies par trois paramètres: type, nom (camelCase), valeur/contenu.
// Types primitifs (définis par le langage):
'string' // "text"
'number' // 3
'boolean' // état true ou false
'undefined' // valeur non assignée ou valeur undefined affectée)
'null' // (réellement vide)
'symbol' // ES6
'object'

// Types de référence : créés par le programmeur (lors de la création d'objets)
const a = [];
const b = [];
a === b; // retourne: false

var maVariable = maValeur
// peut être réassignée, fait du hoisting : se charge tout en haut du code au
// lancement (avec undefined) mais assigne la valeur à l'endroit où est déclarée

var var1, var2, var3
// déclarer plusieurs variables

let maVariable // variable locale: s'initialise quand déclaration évaluée
// (=> non redéclarable, non accessible avant)

const MA_CONSTANTE
// constante: s'initialise quand déclaration évaluée (cf. let)

this
// prend la valeur de l'objet global dans lequel il est (objet, fonction)
// utilise en général var self = this pour être sûr de garder le bon this


/******************************************************************************/
/************** OPERATEURS ****************************************************/
/******************************************************************************/

/*---------- opérateurs basiques ---------------------------------------------*/

+ // addition (/concaténation)
- // soustraction
/ // division
* // multiplication
= // égal (/affectation)
% // modulo : reste entier d'une division
** // exponentation (puissance)

maVariable++ // incrémentation après de +1 (renvoie d'abord sa valeur)
++maVariable // incrémentation avant de +1

maVariable-- // décrémentation après de -1
--maVariable // décrémentation avant de -1

+= // affectation après addition (x += y correspond à x = x + y)
-= // x -= y correspond à x = x-y

/*---------- opérateurs de comparaison faibles (effectuent conversions) ------*/

== // égalité
>= // supériorité ou égalité
!= // inégalité

/*---------- opérateurs de comparaison stricts, typés ------------------------*/

=== // égalité en valeur et en type
<== // infériorité ou égalité en valeur ou en type
!== // inégalité en valeur ou en type

? // opérateur ternaire

/*---------- opérateurs logiques ---------------------------------------------*/
// renvoient true, false, ou autre (ex: let t = false || "chat"; t renvoie chat)
&& // et
|| // ou
! // n'est pas

/*---------- opérateurs relationnels -----------------------------------------*/

propriété in objet // renvoie true si propriété indiquée fait partie objet donné
objet instanceof type // renvoie true si objet est du type spécifié


/*---------- opérateurs divers -----------------------------------------------*/

delete monObjet; // supprime objet, propriété d'un objet, élément d'un tableau
// si supprime a[3], longueur tableau non modifiée et a[3] renvoie undefined
typeof opérande // type of (opérande), renvoie string indiquant type opérande
void expression // void (expression), expression évaluée sans retourner valeur
... // op de décomposition (développe expression où arguments/éléments attendus)
let parts = ['shoulders', 'knees'];
let lyrics = ['head', ...parts, 'and', 'toes'];


/******************************************************************************/
/************** EXPRESSIONS ***************************************************/
/******************************************************************************/

// = unité de code valide qui est résolue en une valeur
// deux types d'un point de vue conceptuel :
// - avec effet de bord (ex : affectent une valeur à une variable)
// - sans effet de bord (évaluées et résolues en une valeur)

/** expressions primaires **/
this // fait référence à l'objet courant
() // opérateur de groupement, pour contrôler la précédence de l'évaluation

/** expressions vers la gauche **/
new // créé instance objet défini par utilisateur ou objet dont type natif
let nomObjet = new typeObjet([param1, param2, ...]);
super([arguments]) // invoque le constructeur parent
super.functionParent([arguments]);

""
/******************************************************************************/
/************** DATA STRCUTURE : TABLEAU (ARRAY) ******************************/
/******************************************************************************/

// objet global Array pour créer tableaux
// tableau permet stocker liste (texte, nombre, boléen, tableau, fonction)

let variable = ["fruits", "légumes", 5]
// déclare tableau

let variable = new Array("fruits", "légumes", 5)
// déclare tableau

let tableau1 = [
	['lol', 'lol2'],
	['ananas', 'fraise']
]
// déclarer tableau contenant autres tableaux

tableau[indice]
// récupère valeur tableau

tableau1[1][2]
// accéder à index 2 du tableau qui est à index 1 de tableau1 ('kiwi')

tableau.indexOf('élément') // ('élément', 2) cherche dès index 2
// renvoie premier indice correspondant élément donné dans tableau / -1

nouveauTableau = ancienTableau.concat(valeur1[, valeur2[, ...])
// array, fusionner tableaux en les concaténant ou valeurs à ancienTableau

tableau.push('élément')
// ajouter un élément à la fin du tableau

tableau.unshift('élément')
// ajouter un élément au début du tableau

tableau.pop()
// supprimer le dernier élément du tableau

tableau.shift()
// supprimer le premier élément du tableau

tableau.splice(pos, 1);
// supprimer un élément en utilisant son index (pos)
// 1 est remplaçable pour supprimer les suivants

tableau.sort([,fonctionComparaison])
// tableau trié, trie éléments tableau dans celui-ci

tableau.join('-')
// crée, renvoie chaîne caractères en concaténant éléments ('-' pour séparateur)

tableau.reverse();
// transpose éléments tableau : premier -> dernier, dernier -> premier...

str.split([séparateur[,qtéMax]]);
// divise string à partir d'un séparateur pour fournir tableau de sous-chaînes

/*---------- FONCTIONS AVANCEES ----------------------------------------------*/

/** FOREACH **/
array1.forEach(callbackfn[,thisArg])
// exécute action spécifiée pour chaque élément tableau
// callbackfn: nom de la fonction acceptant jusqu'à trois arguments
// thisArg: objet auquel this peut faire référence dans callbackfn

/** MAP **/
var nouveauTableau = arr.map(callback [, thisArg])
// crée nouveau tableau avec résultats de l'appel d'une fonction fournie sur
// chaque élément du tableau appelant
var array1 = [1, 4, 9, 16];
const map1 = array1.map(x => x * 2);
console.log(map1); // retourne: Array [2, 8, 18, 32]

/** FILTER **/
var nouveauTableau = arr.filter(callback);
// crée et retourne nouveau tableau contenant tous éléments tableau d'origine
// remplissant condition déterminée par fonction callback
var words = ['spray', 'limit', 'elite', 'exuberant', 'destruction'];
const result = words.filter(word => word.length > 6);
console.log(result); // retourne: Array ["exuberant", "destruction"]

/** REDUCE **/
arr.reduce(callback [, valeurInitiale]);
// applique fonction qui traite chaque valeur d'une liste (de la gauche vers la
// droite) pour réduire à une seule valeur (utilise un accumulateur (acc))
let sum = [1, 2, 3, 4, 5].reduce(function(acc, val) {
  return acc + val;
});
const total = array.reduce((acc, user) => {
	return acc + user.score;
}, 0);

/******************************************************************************/
/************** DATA STRUCTURE : OBJETS ***************************************/
/******************************************************************************/

// collection de propriétés
this // dans un objet, représente l'objet

var person = {firstName:"John", lastName:"Doe"} // objet 'court'
//ou
var maVoiture = new Object();
	maVoiture.fabricant = "Ford";
	maVoiture.modèle = "Mustang";
	maVoiture.année = 1969;
	maVoiture.fonction() {
		// code;
	}
// déclarer objet, lui attribuer propriétés et valeurs
// une fonction en propriété = une méthode

nomObjet.nomPropriete
// accéder à la propriété d'un objet


/******************************************************************************/
/************** CLASSES ET FONCTION CONSTRUCTOR *******************************/
/******************************************************************************/

// noms classes en PascalCase / code classe dans fichier séparé portant son nom
// instanciation = copie d'un même objet

let Disk = function() { // création de l'objet
	this.color = 'black';
	thois.radius = 10;
}
Disk.prototype.setRadius = function(radius) { // création méthode cet objet
	this.radius = radius;
}

/*---------- CREER UN PATRON/MODELE ------------------------------------------*/

function Person(name, eyeColor, age) {
	this.name = name;
	this.eyeColor = eyeColor;
	this.age = age;
	this.updateAge = function() {
		return ++this.age;
	}
}
let person01 = new Person("Daniel", "Blue", 27);
// instancie objet à partir patron

/*---------- CREER UNE CLASSE ------------------------------------------------*/
// technique à favoriser

class Pen { // délaration avec initialisation (cf. let)
	constructor(color, size) {
		this.color = color;
		this.size = size;
	}
	nomFonction() {
		console.log(`Mon crayon est ${this.color} et mesure ${this.size} cm.`)
	}
}

class MagicalPen extends Pen {
	constructor(color, size) {
		super(color, size) // super donne accès à name et type
	}
	nomAutreFonction() {
		// code
	}
}

let crayon = new Pen('blue', 3);
crayon.color; // pour appeler méthode de la classe (retourne 'blue')
crayon.nomFonction();

/*---------- PROTOTYPES (DETOURNEMENT) -------------------------------------- */
// objets héritent propriétés et méthodes d'un prototype

Object.getPrototypeOf(obj)
// renvoie prototype d'un objet donné

var objet = Object.create(proto [,objetPropriétés])
// crée un nouvel objet avec un prototype donné et des propriétés données
// objet.proto permet d'accéder au prototype

/*---------- CREER UN CONSTRUCTEUR -------------------------------------------*/
// constructeur en général déclaré lors instance d'une classe
// initialise objet et peut fournir accès ses informations privées

var Eleve = function (nom) {
  this.nom = nom // création d'une propriété d'instance
}
// Eleve est une classe

Eleve.prototype.moyenne = function() {} // création de la méthode moyenne
// fonction qui sera dans le prototype d'élève

var jean = new Eleve('jean')
var marc = new Eleve('marc')
// jean, marc = instances de l'objet Eleve
// (héritent des méthodes d'Eleve et peuvent avoir leurs propres propriétés)
// utilise méthodes avec prototype pour agir dans les instances


/******************************************************************************/
/************** FONCTIONS *****************************************************/
/******************************************************************************/

// = objet qui a accès au contexte extérieur (scope parents)
// = une closure (fermeture) et crée ainsi une nouvelle portée (scope)
// fonction callback placée en paramètre quand déclare fonction à intérieur
// convention: getNom (récupérer qqch) setNom (définir qqch) isNom (bool, vérif)

/* Eviter les SIDE EFFECTS (effets de bord, changement d'état d'application
 * observable en dehors fonction appelée autre que sa valeur de retour).
 * Inclus : modification toute variable externe ou de propriété d'un objet.
 * Faut créer des FONCTIONS PURES :
 * - valeur de retour toujours même pour mêmes arguments (fonction déterministe)
 * 	(pas variations avec variables statiques locales, variables non locales...)
 * - leur évaluation n'a pas d'effets de bord */

function maFonction(param1,param2,param3) {
  if(typeof texte == 'string') {
      return "texte";
  }
  return false; // stoppe fonction, renvoie valeur 'false' en sortie
}
// "fonction declaration", déclaration avec hoisting (cf. var)
// if param2 === undefined pour définir valeur par défaut si argument manquant

var maFonction = function(param1) {
  // mon code
}; // ; car expression
// "fonction expression", déclaration sans hoisting, fonction anonyme

maFonction(arg1,arg2,arg3)
// exécute fonction avec choix arguments
// tous arguments doivent être renseignés, sinon argument = undefined

var maVariable = {
  nomDeMaMethode: function() {
      // code
  }
}
// maVariable.methode pour exécuter fonction

([param][,param]) => { instructions }
// fonction fléchée (n'a pas de nom) (remplace function())

/** instructions, fonctions et méthodes diverses **/

debugger;
// fait appel à outil de débogage (exécution interrompue, vision pas à pas)

console.log("élémentAffiché")
// affiche l'information dans la console

console.error("élementAffiché");
// affiche l'information comme une erreur

fonction.bind(thisArg[,arg1[, argN]])
// crée nouvelle fonction: lorsque appelée, a pour contexte this valeur passée
// en paramètre (car callback crée un nouveau contexte)
// s'utilise essentiellement avec callback (quand callback fait appel à "this")
// = remplace le this dans fonction par celui donné en paramètre

isFinite(valeurTestée)
// retourne false si valeur passée en argument vaut Infinity ou NaN / true

isNaN(valeurTestée)
// retourne true si la valeur est bien NaN

parseInt("string", base)
// analyse string et retourne un integer de la base spécifiée / NaN

parseFloat("string")
// retourne premier nombre décimal (avec un .) dans chaine de caractères / NaN

element.length
// retourne le nombre de la longueur (d'une chaine, d'un tableau...)

str.charCodeAt(indice)
// retourne entier (entre 0-65535) qui correspond code UTF-16 caractère position donnée

String.fromCharCode(num1, numN)
// renvoie chaîne de caractères créée à partir de points de code UTF-16

Object.values(obj)
// renvoie tableau contenant valeurs propriétés propres énumérables d'un objet

/*----------- METHODES DE L'OBJET MATH ---------------------------------------*/

Math.round(5.95); // output: 6
// retourne la valeur d'un nombre arrondi à l'entier le plus proche

Math.ceil(.95); // output: 1
// retourne le plus petit entier supérieur ou égal au nombre donné

Math.floor(-5.05); // output: -6
// renvoie le plus grand entier qui est inférieur ou égal au nombre

Math.random()
// renvoie nombre flottant pseudo-aléatoire dans intervalle [0, 1[


/******************************************************************************/
/************** STRUCTURES DE CONTROLE (if, switch, while...) *****************/
/******************************************************************************/

/*----------- IF - ELSE ------------------------------------------------------*/

if(condition) {
  // instruction si condition vérifiée
} else {
  // instruction sinon
}

/*----------- STRUCTURE TERNAIRE ---------------------------------------------*/

condition ? expr1 : expr2
let answer = isUserValid() ? "Tu peux entrer" : "Accès refusé"

/*----------- BOUCLES --------------------------------------------------------*/

var expr = 'Papayas';
switch(expr) {
  case 'Oranges':
    console.log('texte 1');
    break;
  case 'Papayas':
    console.log('texte 3');
    break;
  default:
    console.log(expr);
}
// switch: évalue expression, exécute instructions correspondantes selon cas

for([expressionInitiale]; [condition]; [expressionIncrémentALaFinDuCycle]) {
  // instruction
}
// for: répète instructions jusqu'à condition donnée plus vérifiée

var items = ["item1", "item2", "item3"];
var copie = [];
items.forEach(function(item) {
  copie.push(item);
});

while(condition) {
  // instruction
}
// while permet exécuter instruction tant que condition vérifiée

do {
  // instruction
}
while(condition);
// do...while: comme while, mais exécute au moins une fois

break // arrête la boucle
continue // ne termine pas la boucle complètement:
// dans boucle while: repart à la phase de la condition
// dans boucle for: repart à l'expression de mise à jour de la boucle


/******************************************************************************/
/************** DOM (Document Object Model) ***********************************/
/******************************************************************************/

// interface de programmation pour documents HTML, XML et SVG
// représentation structurée document sous forme arbre dont racine 'root' = html
// définit façon dont structure manipulable par programmes (style et contenu)
// lors lecture fichier HTML, navigateur web construit sa structure dans mémoire
// représente document comme ensemble nœuds,objets possédant propriétés,méthodes
// nœud peut avoir gestionnaire événement (exécuté lorsque événement déclenché)
// code doit minimaliser au maximum les interactions avec le DOM

/*---------- API SELECTORS ---------------------------------------------------*/
// stocker dans des variables pour moins solliciter mémoire

document.querySelector('sélecteursCSS');
// retourne premier élément document correspondant sélecteurs spécifiés / null

document.querySelector("div.panneau-utilisateur input[name='identifiant']");
// premier élément input name="identifiant" dans div class="panneau-utilisateur"

document.querySelectorAll("h1, li");
// renvoie NodeList (collections nœuds (~= Array)) statique de liste éléments

document.getElementById('monId');
// renvoie élément HTML dont id correspond

document.getElementsByClassName('maClasse');
// renvoie éléments HTML dont classe correspond

document.createElement('nomDuTag'[, options]);
// crée élément HTML du type spécifié

HTMLElement.getElementsByTagName('tagName')
// retourne liste live éléments enfants portant nom balise donné

HTMLElement.getElementsByTagNameNS()
// argument non converti en minuscule (pour .svg ...)

/*---------- RECUPERER, CREER, INSERER, MODIFIER -----------------------------*/

Element.innerHTML = htmlString
// récupère ou définit syntaxe HTML décrivant les descendants de l'élément
// créé vulnérabilité attaques XSS

Node.innerText = 'contenu' // attention, pas partout défini sur IE
// représente contenu textuel « visuellement rendu » d’un nœud

Node.textContent = 'texte'
// représente le contenu textuel d'un nœud et de ses descendants
// récupère aussi contenu <script> et <style>

document.write(`Bonjour ${maVariable}<br>`)
// écrire directement dans le HTML

document.createElement('nomBaliseHTML'[, options]));
// crée élément HTML du type spécifié

document.createTextNode(données)
// crée nouveau nœud de texte (donnees = chaîne contenant données à placer)

HTMLElement.appendChild(enfant)
// ajoute nœud à fin liste des enfants d'un nœud parent spécifié
// si enfant donné référence à nœud existant, le déplace

parentNode.insertBefore(newNode, referenceNode)
// insère nœud juste avant noeud de référence en tant qu'enfant nœud parent
// si enfant donné référence à noeud existant, le déplace

HTMLElement.setAttribute('nom', 'valeur')
// ajoute nouvel attribut ou change valeur attribut existant pour élément

HTMLElement.getAttribute('nomAttribut')
// obtient valeur actuelle attribut

HTMLElement.removeAttribute('nomAttribut')
// supprime attribut

HTMLElement.dataset.nomEnCamelCase
// tableau associatif, qui associe à chaque nom d'attribut de données sur mesure
// (data-*) la valeur qu'il contient

Node.cloneNode()
// une copie de noeud avant de l'ajouter à son nouveau parent

/*---------- MODIFIER LE STYLE CSS -------------------------------------------*/

HTMLElement.style.nomAttribut = 'valeur'
// renvoie un objet représentant l'attribut style de l'élément (camel case))

/*---------- API CLASSLIST : manipuler les classes des éléments --------------*/

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

/*---------- AUTRE -----------------------------------------------------------*/

HTMLElement.getBoundingClientRect();
// renvoie taille élément, position par rapport zone affichage (viewport)
// object DOMRect, propriétés : left, top, right, bottom, width, height


/******************************************************************************/
/************** EVENEMENTS ****************************************************/
/******************************************************************************/

// 1. phase capture événement (event capturing): navigateur visite arbre DOM
// (racine -> enfants) et exécute gestionnaires rencontrés (addEL() à true)
// 2. phase bouillennement événement (event bubbling): quand arrivé au bout,
// navigateur repart dans autre sens (addEventListener() à false)

this // cas événement: vaut élément HTML où a cliqué avant fonction callback

/*---------- EVEMENTS COMMUNS ------------------------------------------------*/

// mouse events (MouseEvent):
"mousedown, mouseup, click, dblclick, mousemove, mouseover, mousewheel"
"mouseout, contextmenu"
// touch events (TouchEvent):
"touchstart, touchmove, touchend, touchcancel"
// keyboard events (KeyboardEvent):
"keydown, keypress, keyup"
// form, input events:
"focus, blur, change, submit, input"
// window events:
"scroll, resize, hashchange, load, unload"

cible.addEventListener('click', fnCallBack)
// met en place fonction à appeler chaque fois événement spécifié remis à cible

cible.removeEventListener('type', listener[, options])
// supprime écouteur évènements identifié

event.currentTarget
// identifie cible actuelle évènement, lorsque évènement traverse le DOM

object.onkeydown = function(){monScript};
object.addEventListener("keydown", maFonction, true);
// définit et renvoie gestionnaire d'évènement keydown de l'élément courant

function maFonction(e) { var x = e.keyCode; switch (x) {case 39: code break; }
// exécuter instruction en fonction touche appuyée

event.preventDefault() // par ex: pour annuler effet d'un input submit
//  indique à agent utilisateur que si événement pas traité explicitement
//  son action par défaut doit pas être prise en compte comme elle le devrait

var x = instanceOfMouseEvent.clientX
var x = instanceOfMouseEvent.clientY
// fournit coordonnées dans zone application où événement se produit

var pageX = MouseEvent.pageX; // part de la gauche
var pageY = MouseEvent.pageY; // part du haut
// retourne coordonnées en pixel endroit où événement se produit


/******************************************************************************/
/************** WINDOW, VARIABLE GLOBALE **************************************/
/******************************************************************************/

// toutes variables créées sont propriétés de window
// => attention ne pas écraser du code avec plusieurs fichiers .js
// si veut éviter : déclarer variable et exécuter dans une fonction
// peut enlever window. car se situe dans contexte global donc dans objet window

window.alert('message')
// crée boite dialogue avec message, bloque exécution script (jusqu'à clic 'ok')

window.prompt("texteAffiché", "texteParDéfaut")
// string, crée boite dialogue avec champ texte et retourne texte utilisateur

window.confirm('message')
// crée boite dialogue avec boutons ok, annuler (ok = true, annuler = false)

window.setInterval(nomFonction, entierMilliseconds [,param1, param2])
// lance fonction intervalle régulier défini par delai (! sans () pour fonction)

window.setTimeout(nomFonction, entierMilliseconds [,param1, param2])
// lance fonction ou évalue expression après temps spécifié

window.clearInterval(varContenantSetInterval)
// arrête exécution traitement à intervalle régulier

window.clearTimeout(IDdeTimeout)
// supprime délai spécifié par appel antérieur à setTimeout()


/******************************************************************************/
/************** TRY / CATCH ***************************************************/
/******************************************************************************/

// regroupe instructions exécuter, définit réponse si provoque exception
// évite arrêt complet application pour erreur

try {
  // instruction qu'on souhaite exécuter
}
[catch (variableErreur) { // paramètre = variable de l'erreur qui sera envoyée
  // instruction à exécuter si exception est levée dans bloc try
}]
[finally {
  // instruction qui s'excécute qu'il y ait ou non exception
}]

throw new Error(['message' [,fileName [,lineNumber]]])
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

storage.key(cléN);
// prend nombre n en argument et retourne n-ième clé contenue
// ordre clés définie par navigateur => pas s'y référer


/******************************************************************************/
/************** AJAX **********************************************************/
/******************************************************************************/

/* Asynchronous JavaScript and XML.
 * permet échange données avec serveur, maj parties page sans rafraichissement
 * appelle une page et récupère quelque chose en retour
 * emploie objet non standard XMLHttpRequest
 * communication asynchrone langage côté client avec langage côté serveur
 * assurer suivi dans partie network inspecteur, navigateur
*/

 var xhr = null;

 if(window.XMLHttpRequest || window.ActiveXObject){
 	if(window.ActiveXObject){
 		try{
 			xhr = new ActiveXObject("Msxml2.XMLHTTP");
 		}catch(e){
 			xhr = new ActiveXObject("Microsoft.XMLHTTP");
 		}
 	}else{
 		xhr = new XMLHttpRequest();
 	}
 }else{
 	alert("Votre navigateur ne supporte pas l'objet XMLHTTPRequest...");
 	return;
 }
// code de compatibilité (ActiveX, XHR), crée instance (objet XHR)

// Pour continuer : https://www.w3schools.com/jquery/jquery_ajax_load.asp
// https://developer.mozilla.org/fr/docs/Web/Guide/AJAX/Premiers_pas


/******************************************************************************/
/************** Documentation JS (ES2015) *************************************/
/******************************************************************************/

/**
 * Represents a book.
 * @constructor
 */
function Book(title, author) {
}

/**
 * Represents a book.
 * @constructor
 * @param {string} title - The title of the book.
 * @param {string} author - The author of the book.
 */
function Book(title, author) {
}

Person#say  // the instance method named "say"
Person.say  // the static method named "say"
Person~say  // the inner method named "say"

/** Class representing a point. */
class Point {
    /**
     * Create a point.
     * @param {number} x - The x value.
     * @param {number} y - The y value.
     */
    constructor(x, y) {
        // ...
    }

    /**
     * Get the x value.
     * @return {number} The x value.
     */
    getX() {
        // ...
    }
}

/**
 * Class representing a dot.
 * @extends Point
 */
class Dot extends Point {
    /**
     * Create a dot.
     * @param {number} x - The x value.
     * @param {number} y - The y value.
     * @param {number} width - The width of the dot, in pixels.
     */
    constructor(x, y, width) {
        // ...
    }

    /**
     * Get the dot's width.
     * @return {number} The dot's width, in pixels.
     */
    getWidth() {
        // ...
    }
}

/**
 * Pants module.
 * @module my/pants
 * @see module:my/shirt
 */

/******************************************************************************/
/************** JSON : JavaScript Object Notation *****************************/
/******************************************************************************/

/* format de données textuelles dérivé de la notation objets JS
 * format d'échange données (data interchange format) (commentaires impossibles)
 * utilisé comme langage transport données par AJAX et services Web
 * pour sérialisation,désérialisation objets,encodage documents,fichiers config
 * permet représenter info structurée (comme xml) :
 * - ensembles de paires ('clé' / 'valeur')
 * - listes ordonnées valeurs
 * 6 types possibles : string, number, boolean, null, array, object
*/

{
   "menu": {
       "id": "file",
       "value": "File",
       "popup": {
           "menuitem": [
               { "value": "New", "onclick": "CreateNewDoc()" },
               { "value": "Open", "onclick": "OpenDoc()" },
               { "value": "Close", "onclick": "CloseDoc()" }
           ]
       }
   }
}
// format

JSON.stringify(valeurAConvertir[,remplaçant[,string/number espace]])
// convertit valeur JS en chaîne JSON
// peut remplacer valeurs/spécifier propriétés à inclure si tableau fourni
// remplaçant : fonction qui modifie processus transformation ou tableau
JSON.parse(texte[,reviver])
// parse chaîne de caractères JSON et construit équivalent valeur ou objet JS


/******************************************************************************/
/************** CANVAS API ****************************************************/
/******************************************************************************/

// initialiser en 2D
const CANVAS = document.querySelector('#principalCanvas');
let ctx = CANVAS.getContext("2d");

function exempleTracé() {
	var canvas = document.getElementById("canvas");
	var context = canvas.getContext('2d');
	context.beginPath(); // commence un nouveau dessin
	context.moveTo(100,50); // position début
	context.lineTo(200,100); // vers position de fin
	context.fill(); // trace
}

/** Obtenir positionnement souris sur canvas
*/
function getMouseLocation(event) {
    var offset;
    var location;
    var styles;
    offset = canvas.getBoundingClientRect();
    styles = window.getComputedStyle(canvas);
    location = {
        x: event.clientX - offset.left - parseInt(styles.borderLeftWidth),
        y: event.clientY - offset.top - parseInt(styles.borderTopWidth)
			}
    return location;
}

context.fillStyle = 'color' // (gradient, pattern)
// spécifie couleur ou style à utiliser intérieur formes(par défaut #000 (noir))

context.save()
// sauvegarde l'état du canvas

.position
// représente la position d'un élément à un moment donné

.position.x

context.beginPath()
// commence nouveau chemin (vide liste sous-chemins) (pour créer nouveau chemin)

context.arc(x, y, rayon, angleDépart, angleFin, sensAntiHoraire)
// ajoute arc cercle au tracé (le centre aux positions (x,y)), rayon r

context.restore()
// restaure plus récente sauvegarde de l'état du canvas

context.fill([path[,fillRule]])
// remplit chemin courant ou donné avec couleur de fond en cours

context.stroke([path])
// dessine chemin actuel ou donné avec style trait actuel

context.strokeStyle = 'color' //(gradient, pattern)
// spécifie couleur ou style à utiliser pour dessiner lignes autour formes

context.lineWidth = 'valeur'
// nombre spécifiant largeur de ligne

.clearRect()
// supprime tout contenu précédemment dessiné

.getContext('2d') // sélection contexte 2d
// retourne contexte dessin sur canevas

.getBoundingClientRect()
// renvoie taille élément et sa position par rapport zone affichage (viewport)
// retourne objet avec 6 propriétés : // left, top, right, bottom, width, height

context.moveTo(x, y)
// déplace point départ nouveau sous-chemin vers coordonnées (x, y)

context.lineTo(x, y)
// connecte dernier point sous-chemin en cours aux coordonnées x, y
// avec ligne droite (sans tracer réellement chemin)

context.closePath()
// provoque retour stylo point départ sous-traçé courant
// (ajoute ligne droite entre point courant et point rejoint)

context.getImageData(sx, sy, sw, sh);
// ImageData, représente pixels pour zone canevas désignée par rectangle
// qui commence positions (sx, sy)  et de largeur (sw) et hauteur (sh)


/******************************************************************************/
/************** SCRIPTS UTILES ************************************************/
/******************************************************************************/

/**
 * renvoie nombre entier aléatoire entre deux nombres inclus
 * @Integer
 * @param {float} min - valeur minimale
 * @param {float} max - valeur maximale
 */
function getRandomInteger(min, max) {
	return Math.floor(Math.random() * (max - min + 1)) + min;
}


///////// A AJOUTER ///////////////

// window.location.replace(...) is better than using window.location.href, because replace() does not keep the originating page in the session history, meaning the user won't get stuck in a never-ending back-button fiasco.
// window.location.href = link;
// or
//
// window.location.assign(link);
//

// numObj.toFixed([nbChiffres])
// permet de formater un nombre en notation à point-fixe (nombre arrondi si nécessaire)
