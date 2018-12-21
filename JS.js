/******************************************************************************/
/************** DEFINITIONS ***************************************************/
/******************************************************************************/

/*
- langage de script léger, orienté objet interprété
- compilé à la volée (JIT, just-in-time compilation)
- utilise concept de prototype (objet à partir duquel crée de nouveaux objets)
- typage faible (peut affecter valeurs correspondant pas type variable déclaré)
- typage dynamique (laisse ordinateur réaliser opération typage « à la volée »)
- paradigmes programmation applicables: fonctionnelle,impérative,orientée objet
- standard = ECMAScript

# OBJET
- possède plusieurs propriétés qui lui sont associées
- propriété peut être vue comme variable attachée à l'objet

# METHODE
fonction qui est propriété d'un objet. Deux sortes :
- méthode d'instance : fournit interface pour actions dans contexte objet
- méthode statique : exécutable sans nécessiter instanciation
*/

/******************************************************************************/
/************** ETAPES A SUIVRE, INFOS ****************************************/
/******************************************************************************/

/*
- condition: test qui vérifie si expression vérifiée ('true' / 1 ou 'false' / 0)
-- utilise trois concepts : boléens, opérateurs comparaison, opérateurs logiques
- utiliser la syntaxe littérale de préférence ( var objet = [];)
- diviser: appelle scripts JS d'autres fichiers (externalisés)
- organiser son document: part1 'variables' part2 'functions' part3 'programs'
*/


/******************************************************************************/
/************** VARIABLES *****************************************************/
/******************************************************************************/

// variable définie par trois paramètres: type, nom, valeur/contenu
// types: 'string', 'number', 'boolean' (état 'true'/'false'),
// 'undefined' (non déclarée, sans valeur, valeur 'undefined' affectée)
// noms en camelCase

var maVariable = maValeur
// peut être réassignée, fait du hoisting : se charge tout en haut du code au
// lancement mais assigne la valeur à l'endroit où est déclarée

var var1, var2, var3
// déclarer plusieurs variables

let maVariable
// déclarer variable locale (peut pas être re-déclarée,
// pas accessible avant qu'elle apparaisse)

const MA_CONSTANTE
// déclarer constante (peut pas être réassignée,
// pas accessible avant qu'elle apparaisse dans le code)

this
// prend la valeur de l'objet global dans lequel il est (objet, fonction)
// utilise en général var self = this pour être sûr de garder le bon this

/******************************************************************************/
/************** OBJETS ********************************************************/
/******************************************************************************/

var person = {firstName:"John", lastName:"Doe"} // objet 'court'
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

/******************************************************************************/
/************** CLASSES ET FONCTION CONSTRUCTOR *******************************/
/******************************************************************************/

// noms classes en PascalCase / code classe dans fichier séparé portant son nom

let Disk = function() { // création de l'objet (nom avec majuscule convention)
	this.color = 'black';
	thois.radius = 10;
}
Disk.prototype.setRadius = function(radius) { // création méthode cet objet
	this.radius = radius;
}

/*---------- créer un blueprint ----------------------------------------------*/

function Person(name, eyeColor, age) {
	this.name = name;
	this.eyeColor = eyeColor;
	this.age = age;
	this.updateAge = function() {
		return ++this.age;
	}
}
let person01 = new Person("Daniel", "Blue", 27);
// instancie objet à partir blueprint

/*---------- CREER UNE CLASSE ------------------------------------------------*/

class Pen {
	constructor(color, size) {
		this.color = color;
		this.size = size;
	}
	nomFonction(slate) {
		// code de ma fonction
	}
}
let crayon = new Pen('blue', 3)
crayon.color // pour appeler méthode de la classe (output = blue)


/*---------- PROTOTYPES (DETOURNEMENT) -------------------------------------- */
// objets héritent propriétés et méthodes d'un prototype

Object.getPrototypeOf(obj)
// renvoie prototype d'un objet donné

var objet = Object.create(proto[, objetPropriétés])
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
/************** TABLEAUX ******************************************************/
/******************************************************************************/

// objet global Array pour créer tableaux
// tableau permet stocker liste valeurs (texte, nombre, boléen, tableau)

var maVariable = ["fruits", "légumes", 5]
// déclare tableau

var maVariable = new Array("fruits", "légumes", 5)
// déclare tableau

monTableau[indice]
// récupère valeur tableau

var tableau1 = [
                ['lol', 'lol2']
                ['ananas', 'fraise', 'kiwi']
                ]
// déclarer tableau contenant autres tableaux

tableau1[1][2]
// accéder à index 2 du tableau qui est à index 1 de tableau1 ('kiwi')

monTableau.push('élément')
// ajouter un élément à la fin du tableau

monTableau.unshift('élément')
// ajouter un élément au début du tableau

monTableau.pop()
// supprimer le dernier élément du tableau

monTableau.shift()
// supprimer le premier élément du tableau

array1.forEach(callbackfn[,thisArg])
// exécute action spécifiée pour chaque élément tableau
// callbackfn: nom de la fonction acceptant jusqu'à trois arguments
// thisArg:objet auquel this peut faire référence dans callbackfn

tableau.join('-')
// crée,renvoie chaîne caractères en concaténant éléments ('-' pour séparateur)

var pos = monTableau.indexOf('élément'); // ('élément', 2) cherche dès index 2
// renvoie premier indice correspondant élément donné dans tableau / -1

var removedItem = monTableau.splice(pos, 1);
// supprimer un élément en utilisant son index (pos)
// 1 est remplaçable pour supprimer les suivants


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

maVariable++ // incrémentation après de +1
++maVariable // incrémentation avant de +1

maVariable-- // décrémentation après de -1
--maVariable // décrémentation avant de -1

/*---------- opérateurs de comparaison faibles (effectuent conversions) ------*/

== // équivalence
>= // supérieur ou égal
!= // différent

/*---------- opérateurs de comparaison stricts, typés ------------------------*/

=== // équivalence en valeur et en type
<== // inférieur ou égal en valeur ou en type
!== // différent en valeur ou en type

? // opérateur ternaire


/******************************************************************************/
/************** FONCTIONS *****************************************************/
/******************************************************************************/

// c'est un objet (nouveau type de variable)
// a accès au contexte extérieur (closure si l'utilise)
// fonction callback placée en paramètre quand déclare fonction à intérieur
// n'a pour portée que intérieur fonction
// convention : getNom (récupérer quelque chose) setNom (définir propriété)
// isNom (vérifier booléen)

function maFonction(arg1,arg2,arg3) {
  if (typeof texte == 'string') {
      return "texte";
  }
  else {
      return false; // renvoie valeur 'false' en sortie
  }
}
// déclarer fonction (avec hoisting: sera définie tout en haut de la page)
// if arg2 === undefined pour définir valeur par défaut si argument manquant

var maFonction = function (arg1) {
  // mon code
}
// déclaration sans hoisting

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

/** fonctions diverses **/

console.log("élémentAffiché")
// affiche l'information dans la console

fonction.bind(thisArg[,arg1[, arg2[, ...]]])
// crée nouvelle fonction: lorsque appelée, a pour contexte this valeur passée
// en paramètre (car callback crée un nouveau contexte)
// s'utilise essentiellement avec callback (quand callback fait appel à "this")
// = remplace le this dans fonction par celui donné en paramètre

isFinite(valeurTestée)
// retourne false si valeur passée en argument vaut Infinity ou NaN / true

isNaN(valeurTestée)
// retourne true si la valeur est bien NaN

parseInt("élément")
// retourne premier nombre entier dans chaine de caractères / NaN

parseFloat("élément")
// retourne premier nombre décimal (avec un .) dans chaine de caractères / NaN

typeof(maVariable)
// afficher le type de la variable

element.length
// retourner le nombre de la longueur (d'une chaine, d'un tableau...)


/*----------- IF - ELSE ------------------------------------------------------*/

if (condition) {
  // instruction si condition vérifiée
} else {
  // instruction sinon
}

/*----------- BOUCLES --------------------------------------------------------*/

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
// switch: évalue expression, exécute instructions correspondantes selon cas

for ([expressionInitiale]; [condition]; [expressionIncrémentALaFinDuCycle]) {
  // instruction
}
// for: répète instructions jusqu'à condition donnée plus vérifiée

do {
  // instruction
}
while (condition);
// do...while: comme while, mais exécute au moins une fois

while (condition) {
  // instruction
}
// while permet exécuter instruction tant que condition vérifiée

break // arrête la boucle
continue // ne termine pas la boucle complètement:
// dans boucle while: repart à la phase de la condition
// dans boucle for: repart à l'expression de mise à jour de la boucle


/*----------- L'OBJET MATH ---------------------------------------------------*/

Math.round(5.95); // output: 6
// retourne la valeur d'un nombre arrondi à l'entier le plus proche

Math.ceil(.95); // output: 1
// retourne le plus petit entier supérieur ou égal au nombre donné

Math.floor(-5.05); // output: -6
// renvoie le plus grand entier qui est inférieur ou égal au nombre

Math.random()
// renvoie nombre flottant pseudo-aléatoire dans intervalle [0, 1[



/******************************************************************************/
/************** DOM (Document Object Model) ***********************************/
/******************************************************************************/

// interface de programmation pour documents HTML, XML et SVG
// représentation structurée document sous forme arbre dont racine = html
// définit façon dont structure manipulable par programmes (style et contenu)
// lors lecture fichier HTML, navigateur web construit sa structure dans mémoire
// représente document comme ensemble nœuds,objets possédant propriétés,méthodes
// nœud peut avoir gestionnaire événement (exécuté lorsque événement déclanché)

/*---------- API SELECTORS ---------------------------------------------------*/

document.querySelector('sélecteursCSS');
// retourne premier élément document correspondant sélecteurs spécifiés / null

document.querySelector("div.panneau-utilisateur input[name='identifiant']");
// premier élément input name="identifiant" dans div class="panneau-utilisateur"

document.querySelectorAll(selecteurs);
// renvoie NodeList (collections nœuds (~= Array)) statique de liste éléments

document.getElementById('monId');
// renvoie élément HTML dont id correspond

document.getElementsByClassName('maClasse');
// renvoie éléments HTML dont classe correspond

document.createElement('nomDuTag'[, options]);
// crée élément HTML du type spécifié

element.getElementsByTagName('tagName')
// retourne liste live éléments portant nom balise donné

element.getElementsByTagNameNS()
// argument non converti en minuscule (pour .svg ...)

/*----------CREER, INSERER ET MODIFIER DES ELEMENTS --------------------------*/

document.write(`Bonjour ${maVariable}<br>`)
// écrire directement dans le HTML

document.createTextNode(données);
// crée nouveau nœud de texte (donnees = chaîne contenant données à placer)

element.appendChild(enfant);
// ajoute nœud à fin liste des enfants d'un nœud parent spécifié
// si enfant donné référence à nœud existant, le déplace

parentNode.insertBefore(newNode, referenceNode);
// insère nœud juste avant noeud de référence en tant qu'enfant nœud parent
// si enfant donné référence à noeud existant, le déplace

Element.setAttribute('name', 'value')
// ajoute nouvel attribut ou change valeur attribut existant pour élément

element.getAttribute('')
// obtient valeur actuelle attribut

element.removeAttribute('')
// supprime attribut

Node.cloneNode()
// une copie de noeud avant de l'ajouter à son nouveau parent

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

/*---------- AGIR SUR ELEMENTS DU DOM ----------------------------------------*/

p.style.fontSize = 'valeur'
// modifier le style CSS de p (utiliser le camel case)

p.innerHTML = "<strong>Salut</strong> les gens !"
// modifier le contenu html

p.innerText = 'contenu' // attention, pas partout défini sur IE
// modifier le noeud texte d'un contenu HTML

p.textContent = 'texte'
// représente le contenu textuel d'un nœud et de ses descendants

/*---------- AJOUTER IMAGE, TEXTE, AMELIORER STYLE ---------------------------*/

var imgElement = document.createElement('img');
imgElement.setAttribute('src', 'img/dragon_wins.jpg');
document.body.appendChild(imgElement);
imgElement.style.width = "100%";

var viTxtDragon = document.createElement('p');
viTxtDragon.style.color = 'white';
viTxtDragon.style.fontWeight = 'bold';
viTxtDragon.innerText = "Le Dragon a gagné !"
document.body.appendChild(viTxtDragon);

/*---------- AUTRE -----------------------------------------------------------*/

element.getBoundingClientRect();
// renvoie taille élément, position par rapport zone affichage (viewport)
// object DOMRect, propriétés : left, top, right, bottom, width, height


/******************************************************************************/
/************** EVENEMENTS ****************************************************/
/******************************************************************************/

// 1. phase capture événement (event capturing): navigateur visite arbre DOM
// (racine -> enfants) et exécute gestionnaires rencontrés (addEL() à true)
// 2. phase bouillennement événement (event bubbling): quand arrivé au bout,
// navigateur repart dans autre sens (addEventListener() à false)

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

this
// pour événement: vaut élément HTML où a cliqué avant fonction callback

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

setInterval(nomFonction, entierMilliseconds[, param1, param2])
// lance fonction intervalle régulier défini par delai (! sans () pour fonction)

setTimeout(nomFonction, entierMilliseconds[, param1, param2])
// lance fonction ou évalue expression après temps spécifié

clearInterval(varContenantSetInterval)
// arrête exécution traitement à intervalle régulier

clearTimeout(IDdeTimeout)
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
 * assurer suivi dans partie network inspecteur ,navigateur
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
// import xxxx from 'urlFichier';
// import * as Préfixe from 'url';
// export

// numObj.toFixed([nbChiffres])
// permet de formater un nombre en notation à point-fixe (nombre arrondi si nécessaire)

// element.value

// .dataset
