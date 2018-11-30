/******************************************************************************/
/************** DEFINITION ****************************************************/
/******************************************************************************/

/* framework (bibliothèque) Javascript sous licence libre
* permet faciliter fonctionnalités communes JS, gagner du temps
* avantage très bonne compatibilité
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

$('input[type=radio]:checked')

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

/*---------- sliding (glissement) --------------------------------------------*/

.slideDown([duration][,easing][,fn]) // montrer éléments
.slideToggle([duration][,easing][,complete]) // montrer ou cacher éléments
.slideUp([duration][,easing][,complete]) // cacher éléments

// duration (défaut: 400): Type Number ou String
// easing (default: swing): Type String // linear: effet de transition
// complete: Type Function(): fonction à appeler chaque fois animation complète

.animate()
Perform a custom animation of a set of CSS properties.

Also in: Effects > Custom | Data | Utilities
.clearQueue()
Remove from the queue all items that have not yet been run.

.delay() // Set a timer to delay execution of subsequent items in the queue.

.dequeue() // Execute the next function on the queue for the matched elements.

.fadeIn() // Display the matched elements by fading them to opaque.

.fadeOut() // Hide the matched elements by fading them to transparent.

.fadeTo() // Adjust the opacity of the matched elements.

.fadeToggle() // Display or hide the matched elements by animating their opacity

.finish() // Stop the currently-running animation, remove all queued animations,
//  and complete all animations for the matched elements.

.hide() // Hide the matched elements.

jQuery.fx.interval // The rate (in milliseconds) at which animations fire.

jQuery.fx.off // Globally disable all animations.

jQuery.speed // Creates an object containing a set of properties ready to be
// used in the definition of custom animations.

.queue() // Show or manipulate the queue of functions to be executed on the
// matched elements.

.show() // Display the matched elements.

.stop() // Stop the currently-running animation on the matched elements.

.toggle() // Display or hide the matched elements.

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

.appendTo('cible')
// insère contenu à fin chaque élément (cible)

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
/************** FORMULAIRES ***************************************************/
/******************************************************************************/

$('form').data('mode', 'edit')
// sélectionne formulaire, modifie attribut data-mode="add" en data-mode="edit"

.trigger(event ou 'eventType'[,paramètresSupplémentaires])
// exécute gestionnaires/comportements attachés à élément pour événement donné

// exemple :
$.event.trigger('magical-slate:pick-color');
// créé événement nommé 'magical-slate:pick-color'
$(document).on('magical-slate:pick-color', this.onPickColor.bind(this));
// exécute une fonction lorsque événement 'magical-slate:pick-color' lancé

jQuery.param(objet[,traditional])
// crée représentation sérialisée d'un tableau, plain object ou object $
// pour l'utiliser dans requête string ou Ajax
// traditional : bool, indique si sérialisation traditionnelle peu profonde

.select([[donnéesPourGestionnaireEvénement],fnChaqueDéclenchementEvénement])
// lie gestionnaire d'événement à événement js "select" ou déclenche cet
// événement sur un élément

.serialize()
// encode série d'éléments form en string pour envoie

.serializeArray()
// encode série d'éléments comme tableau de noms et valeurs

.submit([[donnéesPourGestionnaireEvénement],fnChaqueDéclenchementEvénement])
// lie gestionnaire d'événement à événement js "submit" ou déclenche événement
// sur cet élément

.val([valeur ou fonction])
// récupère/définit valeur actuelle du premier élément

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

$.ajaxPrefilter(['dataTypes'],handler)
// crée/modifie options Ajax personnalisées avant envoie,traitement par $.ajax()
// handler :

$.ajaxSetup()
// Sets the default values for future AJAX requests
$.ajaxTransport()
// Creates an object that handles the actual transmission of Ajax data
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

/******************************************************************************/
/************** DIVERS ********************************************************/
/******************************************************************************/

.data([['clé'[,valeur] ou objetAMettreAJour])
// stocke, retourne données associés aux éléments correspondants

.each(fonction)
// itère sur objet jQuery, exécute fonction pour chaque élément

$.each(data, (key, contact) => {
    console.log(key);
    console.log(contact.maClé);}
// affiche contenu tableau associatif (ici data issu d'ajax)
