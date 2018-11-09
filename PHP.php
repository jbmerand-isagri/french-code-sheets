<?php
// début d'un document PHP (ne pas fermer balise)

/*
* [Référence du langage](http://php.net/manual/fr/langref.php)
	// types : voir entiers, booléens, décimaux, tableaux, chaines de caractère (itérables, objets, valeur nul)
	//
* [Essentiel](http://php.net/manual/fr/language.variables.basics.php)
	// écrire variable, affecter, nom à donner
* [Syntaxe alternative](http://php.net/manual/fr/control-structures.alternative-syntax.php)

.: DEFINITIONS :.

Langage de scripts généraliste, Open Source, pour développement applications web
Peut être intégré facilement au HTML.
Code exécuté sur serveur, générant HTML/CSS qui sera envoyé au client.
Client ne reçoit que résultat du script, sans accès code.


.: INFORMATIONS :.

- installer MAMP (inclut serveur Apache et Mysql) pour PC puisse interpréter PHP
- 80% des sites dans le monde faits avec (Wordpress...)
- permet consulter bases de données, faire sites dynamiques :
-> formulaire se soumet en post ou via méthode ajax (pas besoin rafraichir page)


/******************************************************************************/
/************** VARIABLES *****************************************************/
/******************************************************************************/

$variable = 'Hello'
// déclaration variable
// remettre le $ pour appeler la variable

define("SON_NOM", "Sa valeur");
const SON_NOM = 'Sa valeur'; // à utiliser à l'intérieur d'une classe
// définir une constante


/******************************************************************************/
/************** AFFICHAGE, TEXTES *********************************************/
/******************************************************************************/

echo ( string $arg1 [, string $... ] )
// void, affiche une chaîne de caractères

system.out.println("some")
// afficher dans la console


/******************************************************************************/
/************** FONCTIONS *****************************************************/
/******************************************************************************/

strtolower($string)
// string, conversion caractères alphabétiques en minuscules

var_dump($unset_var)
// void,  affiche informations structurées d'une variable (type, valeur...)

empty (mixed $var)
// bool, détermine si variable vide (= n'existe pas ou valeur équivaut à false)

is_null (mixed $var)
// bool, indique si variable vaut NULL

isset(mixed $var [, mixed $... ])
// bool, détermine si variable est définie et différente de NULL

count(mixed $array_or_countable [, int $mode = COUNT_NORMAL ])
// int, compte tous les éléments

rand(void)
// int, retourne nombre pseudoaléatoire entre 0 et getrandmax()

rand(int $min, int $max)
// int, retourne nombre aléatoire entre deux nombres inclus

round(float $val [, int $precision = 0 [, int $mode = PHP_ROUND_HALF_UP ]] )
// float, retourne valeur arrondie (précision = nombre chiffres après virgule)

number_format(float $number [, int $decimals = 0 ])
// [string $dec_point = "." , string $thousands_sep = ","]
// string, formate nombre pour affichage (n'accepte pas 3 paramètres)
// decimals:leur nbre,dec_point:point décimal,thousands_sep:séparateur milliers

floatval(mixed $var)
// float, retourne valeur de type float (nombre à virgule flottante)

date_create([string $time = "now" [, DateTimeZone $timezone = NULL ]])
// DateTime, style procédure, alias de DateTime::__construct
//$time définit format, ('Y-m-d H:i:s') ...

DateTime::__construct([string $time = "now" [, DateTimeZone $timezone = NULL ]])
// public, style orienté objet

/******************************************************************************/
/************** TABLEAUX ******************************************************/
/******************************************************************************/

$variable = array()
$variable = new Array()
$variable = []

define('NOM', array(
    'valeur1',
    'valeur2',
    'valeur3'
));
// définit constante tableau (dès PHP7)

$monTableau = [
				'clé1'  => 1,
				'clé2'  => mazda,
				clé3    => 3
			]
// déclarer tableau associatif (clé => valeur)

$monTableau['cléX']
// afficher valeur correspondante

array_push (array $array, mixed valeur1, mixed valeur2 ] )
// int, considère array comme une pile et empile variables var à fin de array

$array[] = $var;
// ajoute variable comme valeur à la fin du tableau

/********* rechercher, retourner clés, valeurs ********************************/

array_key_exists (mixed $valeurCherchée, array $leTableau)
// bool, vérifie si clé existe

in_array (mixed $valeurCherchée, array $leTableau [, bool $strict = FALSE ] )
// bool, indique si valeur présente. Strict pour comparaison typée

array_search (mixed $valeurCherchée, array $leTableau [, bool $strict = FALSE ])
// mixed, recherche première clé associée à la première valeur
// (retourne FALSE sinon, NULL si paramètres invalides)

array_values (array $leTableau)
// array, retourne valeurs du tableau et l'indexe de façon numérique

array_keys (array $leTableau [, mixed $search_value [, bool $strict = FALSE ]] )
// array, retourne les clés numériques et littérales du tableau

/********* comparer des tableaux **********************************************/

array_intersect(array $array1 , array $array2 [, array $... ] )
// array, retourne tableau contenant valeurs de array1 présentes
// dans tous arguments array2, ... (clés préservées)

array_diff(array $array1 , array $array2 [, array $... ] )
// array, compare tableau array1 avec autre(s)
// retourne valeurs de array1 non présentes dans autres tableaux

/********* trier de tableaux **************************************************/

sort(array &$array [, int $sort_flags = SORT_REGULAR ] )
// bool, trie éléments array plus petit au plus grand

asort(array &$array [, int $sort_flags = SORT_REGULAR ] )
// bool, trie valeurs ordre alphabétique (corrélation index/valeurs conservée)

arsort(array &$array [, int $sort_flags = SORT_REGULAR ] )
// comme asort, mais ordre alphabétique inverse

sort_flags
// paramètre optionnel pour modifier comportement de tri avec ces valeurs :
// SORT_REGULAR, SORT_NUMERIC, SORT_STRING, SORT_LOCALE_STRING, SORT_NATURAL


/********* rassembler, exploser, convertir un tableau *************************/

implode([string $séparateur,] array $pieces) // ou join()
// string, rassemble éléments en une chaîne ($glue par défaut chaine vide ' ')

explode(string $séparateur , string $string [, int $limit = PHP_INT_MAX ] )
// array, retourne tableau de chaînes


/******************************************************************************/
/************** OBJETS ********************************************************/
/******************************************************************************/

$variable = {} // fortement déprécié
$variable = new nomObjet()
$obj1 = new \stdClass; // PHP7

$book = new stdClass;
$book->title = "Harry Potter and the Prisoner of Azkaban";
$book->author = "J. K. Rowling";
$book->publisher = "Arthur A. Levine Books";
$book->amazon_link = "http://www.amazon.com/dp/0439136369/";

$book->title
// accéder au contenu

/******************************************************************************/
/************** BLOCS (if, switch, while...) **********************************/
/******************************************************************************/

// similaire à JS

continue Int;
// dans boucle pour faire directement commencer prochaine itération
// Int : optionnel, indique combien structures emboîtées doivent être éludées

/********* FOREACH ************************************************************/
// pour parcourir tableaux et objets

foreach($variable as $key => $value) {
	# code...
}

// &$valeur pour la modifier (assigne référence au lieu copier la valeur)
$arr = array(1, 2, 3, 4);
foreach ($arr as &$value) {
    $value = $value * 2; // $arr vaut maintenant array(2, 4, 6, 8)
}
unset($value); // détruit référence sur dernier élément


/******************************************************************************/
/************** FORMULAIRES, REQUETES, BASES DE DONNEES ***********************/
/******************************************************************************/

/********* requête de type POST : /fichier.php (plus sécurisée) ***************/

/* code html correspondant :
<form action="recuper-donnees-formulaire.php." method="post">
 Pseudo : <input type="text" name="pseudo" placeholder="saisir...">
 <input type="submit" name="envoi">
</form> */

// pour récupérer et afficher données formulaire :
if(isset($_POST['envoi'])){ // si formulaire soumis
echo $_POST['pseudo']; // affiche contenu
}

/********* requête GET : /fichier.php?nameDuChamps=sun&direction=maFonction ***/

$_GET["name"]
// méthode pour récupérer valeurs du form 'name' (+ hackable, à éviter)
// envoie toutes les saisies de chacun des champs dans l'url

/* code html correspondant vers page bdc.php :
<a href="bdc.php?order_n=<?= $value['orderNumber']?>">
    texte
</a> */

$_GET['order_n'] // pour récupérer dans bdc.php

// http://fr.wikipedia.org/wiki/Post-Redirect-Get

/******************************************************************************/
/************** SYNTAXE ALTERNATIVE (dans .PHTML) *****************************/
/******************************************************************************/
?>

<?php if(isset($result)): ?>
<?= $result // version contractée d'echo $result ?>
<?php endif; ?>

<?php switch ($foo): ?>
<?php case 1: ?>
    ...
<?php endswitch ?>

<?php foreach($numberArray as $key): ?>
    <?php echo $key . '<br>'; ?>
<?php endforeach; ?>

<?php
/******************************************************************************/
/************** OPERATEURS ****************************************************/
/******************************************************************************/

->
// accéder aux méthodes et propriétés d'un objet

.
// concaténer

/******************************************************************************/
/************** AGIR SUR DES FICHIERS / INTERACTIONS **************************/
/******************************************************************************/

include 'index.phtml'
// inclut, exécute fichier suivant chemin fourni
// (si aucun fourni : include_path vérifié, puis dossier du script, de travail)
// erreur type warning si ne peut pas trouver fichier
// variables disponibles à la ligne d'inclusion du fichier appelant
// disponibles dans fichier appelé, à partir de ce point
// fonctions et classes définies dans fichier inclus ont portée globale

require 'fichier.php'
// identique à include, mais si erreur survient : erreur fatale stoppe script

include_path=".:/php/includes" // (UNIX) ".;c:\php\includes" (Windows)
// spécifie liste répertoires où fonctions require, include, fopen(), file(),
// readfile() et file_get_contents() chercheront fichiers
// liste répertoires séparés par : sous Unix ; sous Windows
// . = répertoire courant

exit([string $status]) // son alias : die()
exit(int $status)
// void, termine script courant
// fonctions d'extinction et destructeurs d'objets toujours exécutés

header(string $string [, bool $replace = true [, int $http_response_code ]] )
header('Location: mapage.php');
// void, permet spécifier en-tête HTTP(= redirection) string lors envoi fichiers
// doit impérativement être utilisée avant tout code HTML

fopen(string $filename, string $mode)
// [bool $use_include_path = FALSE] [resource $context]]
// resource, crée ressource nommée, spécifiée par filename, sous forme d'un flux
/* modes possibles :
'r' : ouvre lecture seule, place pointeur de fichier au début du fichier
'r+' : lecture+écriture, pointeur = début fichier
'w'	: écriture seule, pointeur = début fichier et réduit sa taille à 0
// si fichier n'existe pas, tente de le créer
'w+' : lecture+écriture, pointeur = début fichier et réduit sa taille à 0
// si fichier n'existe pas, tente de le créer
'a' :	écriture seule, pointeur = fin fichier, fichier n'existe pas = tente créer
// fseek() n'a aucun effet, écritures surviennent toujours
'a+' : lecture +écriture, pointeur = fin, fichier n'existe pas = tente créer
// fseek() n'affecte que position lecture, écritures surviennent toujours
'x'	: crée+ouvre fichier en écriture seule, pointeur = début fichier
// si fichier existe, fopen() échoue (retourne FALSE, génère erreur E_WARNING)
'x+'	: crée+ouvre fichier, lecture+écriture, comportement = 'x'
'c' :	écriture seule, fichier existe pas = crée, existe = pas tronqué (!= 'w')
// et appel à fonction échoue pas (!= 'x'), pointeur = début
// utile pour obtenir verrou (flock()) avant tenter le modifier
'c+' :	lecture+écriture, comportement = 'c'
'e'	: défini indicateur close-on-exec sur descripteur fichier ouvert */

fgetcsv(resource $handle)
//[$length = 0] [$delimiter = ","] [$enclosure = '"'] [$escape = "\"]
// array, analyse ligne qu'il lit, recherche et retourne champs CSV
// lignes -> keys, valeurs -> values
// length : > plus grande ligne, enclosure : caractère encadrement texte
// escape : un seul caractère échappement
// retourne : NULL si handle invalide, FALSE si autres erreurs

fputcsv (resource $handle, array $fields)
// [$delimiter = ","] [$enclosure = '"'] [$escape_char = "\\" ]
// int, formate ligne passée sous forme tableau fields
// écrit résultat dans fichier handle

fclose (resource $handle)
// bool, ferme fichier représenté par pointeur handle

fwrite($fh, "sep=\t" . "\r\n");


/******************************************************************************/
/************** SEQUENCES D'ECHAPPEMENT ***************************************/
/******************************************************************************/

\n // nouvelle ligne

\t // tabulation

\r // retour sécurisé

\a // alarme (BEL)


/******************************************************************************/
/************** SOLLICITER DES BASES DE DONNEES *******************************/
/******************************************************************************/

/********* 1. RECUPERER ELEMENT BDD *******************************************/

PDO::__construct(string $dsn[,string $username[,string $passwd[,array $options])
// public, crée un objet PDO (instance) qui représente une connexion à la base
// dsn : Data Source Name (contient informations pour se connecter à la base)

// exemple, $pdo représente la base de données
$pdo = new PDO('mysql:host=localhost;dbname=classicmodels;charset=UTF8',
    'root', // identifiant[,bool $use_include_path = FALSE [,resource $context]]
    'troiswa', // mdp
    [ // tableau d'arguments, paramètres de configuration
	    PDO::ATTR_ERRMODE => PDO::ERRMODE_EXCEPTION,
// lorsque détecte erreur dans requête lance exception et y définit propriétés
      PDO::ATTR_DEFAULT_FETCH_MODE => PDO::FETCH_ASSOC
// récupère informations en mode tableau associatif [clés = noms colonnes bdd]
	]
);
var_dump($pdo); // pour vérifier retourne bien object(PDO)[1]

/********* 2. PREPARER REQUETE SQL prepare() **********************************/

PDO::prepare(string $statement)
// [array $driver_o[bool $use_include_path = FALSE
// [resource $context]]ptions = array()]
// public PDOStatement, prépare requête SQL être exécutée par méthode execute()
// requête peut contenir zéro ou plusieurs noms (:nom) ou marqueurs (?) pour
// lesquels valeurs réelles seront substituées lorsque requête sera exécutée
// impossible utiliser marqueurs nommés+marqueurs interrogatifs
// choisissez l'un ou l'autre (éviter ? et préférer :nom)
// doit inclure marqueur avec nom unique pour chaque valeur dans requête
// lorsque appelle PDOStatement::execute()
// impossible utiliser marqueur avec deux noms identiques dans requête préparée

$q = $pdo->prepare('SELECT * FROM customers WHERE customerNUMBER = :id');
// :id fait référence info qui sera donnée au moment exécution dans la bdd
// trouver nom assez éloigné du nom réel bdd pour éviter injection SQL

/********* 3. EXECUTER REQUETE execute() **************************************/

PDOStatement::execute([array $input_parameters])
// public bool, exécute requête préparée.
// input_parameters : tableau de valeurs avec autant éléments qu'il y a
// paramètres à associer dans requête SQL qui sera exécutée

$q->execute(['id' => 103]);

/********* 4. RECUPERATION DE LA LIGNE RETOURNEE ******************************/

PDOStatement::fetch([int $fetch_style])
// [int $cursor_orientation = PDO::FETCH_ORI_NEXT] [int $cursor_offset = 0]
// public mixed, récupère ligne depuis jeu résultats associé objet PDOStatement
// paramètre fetch_style détermine façon dont PDO retourne ligne :
// PDO::FETCH_BOTH (défaut): retourne tableau indexé par les noms de colonnes
// PDO::FETCH_ASSOC : pour que retourne en tableau associatif
// et aussi par les numéros de colonnes, commençant à l'index 0,
// comme retournés dans le jeu de résultats

$customer = $q->fetch(); // fetch pour récupérer un seul résultat

PDOStatement::fetchAll ([int $fetch_style])
// [mixed $fetch_argument] [array $ctor_args = array()]
// public array, retourne tableau contenant lignes du jeu d'enregistrements

$customers = $q->fetchAll(); // retourne tableau associatif clients répertoriés
