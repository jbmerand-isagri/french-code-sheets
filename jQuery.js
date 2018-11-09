$('form').data('mode', 'edit')
// sélectionner le formulaire, modifier l'attribut data-mode="add" en data-mode="edit"

$('<ul>')
// crée une balise <ul>

$('sélecteurCSS').on('click', function(){})
// crée un écouteur sur élément html et appelle fonction => événement

$('form.createForm').toggle('hide');
// au click, ajouter/suppromer une classe

jQuery(function($) { ... })
// does so, too, but it also makes $ available inside the function no matter what it's set to outside.

$('form.createForm')..fadeIn( [duration ] [, complete ] )
duration (default: 400)
Type: Number or String
A string or number determining how long the animation will run.
complete
Type: Function()
A function to call once the animation is complete, called once per matched element.


.fadeOut()

.val()

$( "form:first" ).trigger( "submit" );
// To submit the first form without using the submit() function, try:


$('form.createForm').find("input").val("");

JSON.parse(localStorage['formBackup'])

.hide

.show

.data()

.append( content [, content ] )Returns: jQuery
Description: Insert content, specified by the parameter, to the end of each element in the set of matched elements.

version added: 1.0.append( content [, content ] )
content
Type: htmlString or Element or Text or Array or jQuery
DOM element, text node, array of elements and text nodes, HTML string, or jQuery object to insert at the end of each element in the set of matched elements.
content
Type: htmlString or Element or Text or Array or jQuery
One or more additional DOM elements, text nodes, arrays of elements and text nodes, HTML strings, or jQuery objects to insert at the end of each element in the set of matched elements.



.each( function )Returns: jQuery
Description: Iterate over a jQuery object, executing a function for each matched element.

version added: 1.0.each( function )
function
Type: Function( Integer index, Element element )
A function to execute for each matched element.
The .each() method is designed to make DOM looping constructs concise and less error-prone. When called it iterates over the DOM elements that are part of the jQuery object. Each time the callback runs, it is passed the current loop iteration, beginning from 0. More importantly, the callback is fired in the context of the current DOM element, so the keyword this refers to the element.
