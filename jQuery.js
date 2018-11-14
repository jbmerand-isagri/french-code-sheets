/******************************************************************************/
/************** DEFINITION ****************************************************/
/******************************************************************************/

/* framework (bibliothèque) Javascript sous licence libre
* permet faciliter fonctionnalités communes JS, gagner du temps
* avantage être utilisable sur plusieurs navigateurs web
* fonctionnalités :
  ** manipulation DOM (HTML/CSS)
  ** gestion évènements (clic, survol, soumettre formulaire ...)
  ** AJAX
  ** effet animation
* s'utilise par fichier javascript (<100Ko lorsque minifié et compressé)
*/


/******************************************************************************/
/************** SYNTAXE *******************************************************/
/******************************************************************************/

$(sélecteur).action()
// syntaxe de base (peut ajouter plusieurs .action à la suite)
// $ pour définir/accéder à jQuery
// sélecteur pour éléments html (sélecteurs CSS entre "")
// action à faire sur éléments html (méthode jQuery)

$(document).ready(function(){
   // code jQuery
});
// n'exécute code que quand document totalement chargé (= prêt)

$(function(){
   // code jQuery
});
// comme $(document).ready, syntaxe raccourcie


/******************************************************************************/
/************** AFFICHAGES ****************************************************/
/******************************************************************************/

.hide() // [string/number durée][,string effet][,fonctionLancéeAprès]
// cache éléments

.show() // [string/number durée][,string effet][,fonctionLancéeAprès]
// affiche éléments

.toggle() // [string/number durée][,string effet][,fonctionLancéeAprès]
// affiche élément caché ou inverse

.fadeOut() // [string/number durée][,string effet][,fonctionLancéeAprès]
// cache éléments en les passant transparent (durée : 's') ('slow, ')

.fadeIn() // [string/number durée][,string effet][,fonctionLancéeAprès]
// affiche éléments en les rendant opaque

.fadeToggle() // [string/number durée][,string effet][,fonctionLancéeAprès]
// affiche ou masque en animant l'opacité

.fadeTo(string/number durée, number opacité) // [,effet][,fonctionLancéeAprès]
// ajuste opacité


/******************************************************************************/
/************** EFFETS ********************************************************/
/******************************************************************************/

Continuer sur : https://www.w3schools.com/jquery/jquery_slide.asp


/******************************************************************************/
/************** EVENEMENTS ****************************************************/
/******************************************************************************/

// souris : click, dblclick, mouseenter, mouseleave
// clavier : keypress, keydown, keyup
// formulaire : submit, change, focus, blur
// document, window : load, resize, scroll, unload

$("#p1").mousedown(function(){
    // code;
});
// syntaxe possible, dépréciée

$("p").on("click", function(){
    $(this).hide();
});


$("p").on({
    mouseenter: function(){
        $(this).css("background-color", "lightgray");
    },
    click: function(){
        $(this).css("background-color", "yellow");
    }
});
// crée plusieurs gestionnaires d'événements

$(document).on('click','#element', fonction);
// lance écoute que quand document bien chargé

/******************************************************************************/
/************** MANIPULER LE DOM **********************************************/
/******************************************************************************/

$('<p>')
// crée balise <p></p>

.text(['texte' ou fonction])
// définit ou retourne texte contenu

.html(['htmlString' ou fonction])
// définit ou retourne contenu (incluant balises html)

.val([valeur ou fonction])
// définit ou retourne valeur de champs formulaire

.attr("nom d'attribut"[, valeur ou fonction])
// définit, change, récupère valeurs d'un attribut

$('ul').append(contenu[,contenu] ou fonction)
// insère contenu à fin chaque <ul>

.prepend(contenu[,contenu] ou fonction)
// insère contenu au début éléments sélectionnés

.after(contenu[,contenu] ou fonction)
// insère contenu après l'élément

.before(contenu[,contenu] ou fonction)
// insère contenu avant l'élément

.remove([selecteur])
// supprime élément et ses enfants (selector : précision (".saClasse"...))

.empty()
// supprime éléments enfants


/************** manipuler CSS *************************************************/

.addClass('nomPremièreClasse nomDeuxièmeClasse')
// ajoute une ou plusieurs classes à l'élément

.removeClass('nomPremièreClasse nomDeuxièmeClasse')
// retire une ou plusieurs classes de l'élément

.toggleClass('nomDeClasse')
// ajoute ou supprime classe de l'élément

.css('nomDeLaPropriété'[,valeur ou fonction])
// définit ou retourne valeur de propriété

.width([valeur ou fonction])
// définit ou retourne largeur élément(s)

.height([valeur ou fonction])
// définit ou retourne hauteur élément(s)

.innerWidth([valeur ou fonction])
// définit ou retourne largeur intérieure (inclut padding, pas bordure)

.innerHeight([valeur ou fonction])
// définit ou retourne hauteur intérieure (inclut padding, pas bordure)

.outerWidth([valeur ou fonction][includeMargin])
// définit ou retourne largeur extérieure (inclut paddinfg, bordure[, marge])

.outerHeight([valeur ou fonction][includeMargin])
// définit ou retourne hauteur extérieure (inclut paddinfg, bordure[, marge])

/************** TRAVERSER L'ARBRE DOM *****************************************/

.parent(['sélecteurFiltrant']) // retourne parent chaque élément
.parents(['sélecteurFiltrant']) // retourne parents chaque élément
.parentsUntil(['sélecteur' ou élément pour stopper][,'sélecteurFiltrant'])

.children()
.find()

.siblings()
.next()
.nextAll()
.nextUntil()
.prev()
.prevAll()
.prevUntil()

.first()
.last()
.eq()
.filter()
.not()


/******************************************************************************/
/************** AJAX **********************************************************/
/******************************************************************************/

/* exemple d'appel AJAX :
 * 1. écoute évènement clic sur bouton d'envoi
 * 2. lorsque réalisé, envoie requête HTTP (POST) vers script PHP depuis jQuery
 * 3. PHP renvoie commentaire posté dans format léger
 * 4. ajout au DOM avec jQuery
*/

$.ajax(url[,paramètres] ou [paramètres])
// effectue requête asynchrone HTTP (Ajax) http://api.jquery.com/jquery.ajax/
// url : string, vers où requête envoyée
// paramètres : couple de clés/valeurs pour configurer requête

$.get(url[donnéesEnvoyées][,cbackfnSiRéussite][,typeDeDonnées] ou [paramètres])
// charge données à partir serveur utilisant requête ajax HTTP GET
// url : string, vers où requête envoyée
// type : type attendu par serveur (Intelligent Guess par défaut (xml, json...))

function getHTMLContent() {
    $.get("php/html.php", function(data) {
        $("#divResults").html(data)});
}
// ajoute contenu html.php dans #divResults présent dans autre page html liée

$.post(url[donnéesEnvoyées][,cbackfnSiRéussite][,typeDeDonnées] ou [paramètres])
// charge données à partir serveur utilisant requête ajax HTTP POST
// url : string, vers où requête envoyée
// type : type attendu par serveur (Intelligent Guess par défaut (xml, json...))

$.getJSON('urlCibleDeRequête'[,data][,cbackfnSiSuccèsRequête])
// retourne jqXHR, charge données encodées JSON à partir serveur
// Load JSON-encoded data from the server using a GET HTTP request.
// data : PlainObject ou String envoyé au serveur par requête

$.getScript('urlCibleDeRequête'[,cbackfnSiSuccèsRequête])
// charge et exécute fichier JS à partir serveur utilisant requête AJAX HTTP GET

.load('urlCibleDeRequête'[,data][,cbackfnSiSuccèsRequête])
// charge données serveur et met HTML retourné dans élément sélectionné

$.ajaxPrefilter()
// Handle custom Ajax options or modify existing options before each request is sent and before they are processed by $.ajax()
$.ajaxSetup()
// Sets the default values for future AJAX requests
$.ajaxTransport()
// Creates an object that handles the actual transmission of Ajax data
$.param()
// Creates a serialized representation of an array or object (can be used as URL query string for AJAX requests)
ajaxComplete()
// Specifies a function to run when the AJAX request completes
ajaxError()
// Specifies a function to run when the AJAX request completes with an error
ajaxSend()
// Specifies a function to run before the AJAX request is sent
ajaxStart()
//	Specifies a function to run when the first AJAX request begins
ajaxStop()
// Specifies a function to run when all AJAX requests have completed
ajaxSuccess()
// Specifies a function to run when an AJAX request completes successfully

serialize()
// Encodes a set of form elements as a string for submission
serializeArray()
// Encodes a set of form elements as an array of names and values




$( "form:first" ).trigger( "submit" );
// To submit the first form without using the submit() function, try:

.data( key, value )
.data( key, value )
.data( obj )
.data( key )
.data( key )
.data()
!! ne permet pas de changer un data, faut utiliser .attr à ce moment-là

.append( content [, content ] )Returns: jQuery
Description: Insert content, specified by the parameter, to the end of each element in the set of matched elements.

version added: 1.0.append( content [, content ] )
content
Type: htmlString or Element or Text or Array or jQuery
DOM element, text node, array of elements and text nodes, HTML string, or jQuery object to insert at the end of each element in the set of matched elements.
content
Type: htmlString or Element or Text or Array or jQuery
One or more additional DOM elements, text nodes, arrays of elements and text nodes, HTML strings, or jQuery objects to insert at the end of each element in the set of matched elements.

.each(function)
// itère sur objet jQuery, exécute fonction sur chaque élément

$.each(data, (key, contact) => {
    console.log(key);
    console.log(contact.maClé);}
// affiche le contenu d'un tableau associatif (data issu d'ajax)

.each()
Categories: Miscellaneous > Collection Manipulation | Traversing
.each( function )Returns: jQuery
Description: Iterate over a jQuery object, executing a function for each matched element.

version added: 1.0.each( function )
function
Type: Function( Integer index, Element element )
A function to execute for each matched element.

The .append() and .appendTo() methods perform the same task. The major difference is in the syntax-specifically, in the placement of the content and target. With .append(), the selector expression preceding the method is the container into which the content is inserted. With .appendTo(), on the other hand, the content precedes the method, either as a selector expression or as markup created on the fly, and it is inserted into the target container.

.contents()

Get the value of an attribute for the first element in the set of matched elements or set one or more attributes for every matched element.
Contents:
.attr( attributeName )
.attr( attributeName )
.attr( attributeName, value )
.attr( attributeName, value )
.attr( attributes )
.attr( attributeName, function )

$(document).on('click', 'a.contact', onClickShowContactDetails)
// écouteur qui suppose le chargement de la page ?

$('form').data('mode', 'edit')
// sélectionner le formulaire, modifier l'attribut data-mode="add" en data-mode="edit"

$('input[type=radio]:checked')
