<?php
// début d'un document PHP (ne pas fermer balise)

/*
* [Référence du langage](http://php.net/manual/fr/langref.php)
* [Essentiel](http://php.net/manual/fr/language.variables.basics.php)
* [Règles de bonnes pratiques](https://www.php-fig.org/psr/)

.: DEFINITIONS :.

Langage de scripts généraliste, Open Source, pour développement applications web
Peut être intégré facilement au HTML.
Code exécuté sur serveur, générant HTML/CSS qui sera envoyé au client.
Client ne reçoit que résultat du script, sans accès code.

.: INFORMATIONS :.

- installer MAMP (inclut serveur Apache et Mysql) pour PC puisse interpréter PHP
- ~80% des sites dans le monde faits avec (Wordpress...)
- permet consulter bases de données, faire sites dynamiques :
-> formulaire se soumet en post ou via méthode ajax (pas besoin rafraichir page)
- phpinfo(); ensemble des infos relatives PHP utilisé par serveur
-- cf. Loaded Configuration File pour connaitre chemin fichier config
-- peut y modifier affichage erreurs (; en début ligne = commentaire)
-- pour afficher erreurs : error_reporting E_ALL , display_errors on)


/******************************************************************************/
/************** VARIABLES *****************************************************/
/******************************************************************************/

// stockées en mémoire et conservées tant que page en cours de génération
// types : string,integer,float,boolean,array,object,resource,iterable,NULL...

$variable = 'Hello';
// déclaration variable
// remettre le $ pour appeler la variable

define("SON_NOM", "Sa valeur");
const SON_NOM = 'Sa valeur'; // à utiliser à l'intérieur d'une classe
// définir une constante

NOM_CONSTANTE // pas de $ devant

/** VARIABLES SUPERGLOBALES **/
// variables internes, toujours disponibles quel que soit contexte
$GLOBALS,$_SERVER,$_GET,$_POST,$_FILES,$_COOKIE,$_SESSION,$_REQUEST,$_ENV

/******************************************************************************/
/************** AFFICHAGE, TEXTES *********************************************/
/******************************************************************************/

echo(string $arg1 [,string $... ])
// void, affiche une chaîne de caractères


/******************************************************************************/
/************** OPERATEURS ****************************************************/
/******************************************************************************/

->
// accéder aux méthodes et propriétés d'un objet

.
// concaténer

$variable .= 'valeurAAjouter';
// concétaner directement dans la variable

/*---------- opérateurs basiques ---------------------------------------------*/

+ // addition
- // soustraction
/ // division
* // multiplication
= // égal (/affectation)
% // modulo (reste entier division)

/*---------- opérateurs de comparaison ---------------------------------------*/

== // est égal à
> // est supérieur à
< // est inférieur à
>= // est supérieur ou égal à
<= // est inférieur ou égal à
!= // est différent de

/*---------- opérateurs logiques ---------------------------------------------*/

&&, AND // et
||, OR // ou
! // n'est pas


/******************************************************************************/
/************** FONCTIONS *****************************************************/
/******************************************************************************/

/** ACTIONS SUR CHAINES DE CARACTERES (STRING) **/

&nbsp;
// Non Breakable SPace, entité html de l'espace

ucfirst(string $str)
// string, retourne chaine avec premier caractère remplacé par sa majuscule

substr($string, int $start [,int $length])
// string, retourne un segment de chaîne

strlen(string $string)
// int, retourne taille de la chaine string

str_replace(mixed $search, mixed $replace, mixed $subject [,int &$count])
// mixed, retourne chaîne ou tableau, occurrences de search dans subject
// remplacées par replace

strtolower($string)
// string, conversion caractères alphabétiques en minuscules

strpos(string $haystack , mixed $needle [,int $offset = 0])
// int, cherche position numérique première occurence de needle dans haystack

strrpos(string $haystack , mixed $needle [,int $offset = 0])
// int, cherche position numérique dernière occurence de needle dans haystack

nl2br(string $string[, bool $is_xhtml = TRUE ])
// retourne string après avoir inséré <br/> ou <br> devant nouvelles lignes
// (\r\n, \n\r, \n et \r)

/** TESTS ET INFOS SUR VARIABLES **/

var_dump($unset_var)
// void, affiche informations structurées d'une variable (type, valeur...)

empty(mixed $var)
// bool, détermine si variable vide (= n'existe pas ou valeur équivaut à false)

is_null(mixed $var)
// bool, indique si variable vaut NULL

isset(mixed $var [,mixed $...])
// bool, détermine si variable est définie et différente de NULL

/** NOMBRES, DENOMBREMENT **/

count(mixed $array_or_countable [,int $mode = COUNT_NORMAL])
// int, compte tous les éléments

rand(void)
// int, retourne nombre pseudoaléatoire entre 0 et getrandmax()

rand(int $min, int $max)
// int, retourne nombre aléatoire entre deux nombres inclus

round(float $val [,int $precision = 0 [,int $mode = PHP_ROUND_HALF_UP]])
// float, retourne valeur arrondie (précision = nombre chiffres après virgule)

number_format(float $number [,int $decimals = 0])
// [string $dec_point = "." , string $thousands_sep = ","]
// string, formate nombre pour affichage (n'accepte pas 3 paramètres)
// decimals:leur nbre,dec_point:point décimal,thousands_sep:séparateur milliers

floatval(mixed $var)
// float, retourne valeur de type float (nombre à virgule flottante)

intval(mixed $var [,int $base = 10])
// int, retourne valeur numérique entière équivalente

/** DATES, HEURES **/

date_create([string $time = "now" [, DateTimeZone $timezone = NULL ]])
// DateTime, style procédure, alias de DateTime::__construct
//$time définit format, ('Y-m-d H:i:s') ...

DateTime::__construct([string $time = "now" [,DateTimeZone $timezone = NULL]])
// public, style orienté objet

date(string $format [,int $timestamp = time()])
// string, formate une date/heure locale
// format : 'l jS \de F Y h:i:s A'
// pour datetime (pour mysql...) : ("Y-m-d H:i:s");

date_default_timezone_set('UTC');
// définit fuseau horaire par défaut à utiliser

/** CHEMINS ET ACCES AUX FICHIERS (constantes magiques incluses) **/

dirname(string $path [,int $levels = 1])
// string, renvoie chemin parent d'un chemin représentant fichier ou dossier
// qui correspond à levels niveau(x) plus haut que le dossier courant
// levels = nombre de dossiers parents

realpath(string $path)
// string, retourne chemin canonique absolu, résout tous les liens symboliques
// remplace toutes les références /./, /../ et / de path

file_exists(string $filename)
// bool, vérifie si un fichier ou un dossier existe.

__FILE__
// chemin complet et nom fichier courant avec liens symboliques résolus
// si utilisé pour inclusion, nom fichier inclus retourné
__DIR__
// dossier du fichier. Si utilisé dans inclusion, dossier du fichier retourné
// équivalent de dirname(__FILE__). Nom dossier sans slash final


/******************************************************************************/
/************** TABLEAUX ******************************************************/
/******************************************************************************/

$variable = array();
$variable = new Array();
$variable = [];

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

array_push (array $array, mixed valeur1, mixed valeur2])
// int, considère array comme une pile et empile variables var à fin de array

$array[] = $var;
// ajoute variable comme valeur à la fin du tableau

/********* rechercher, retourner clés, valeurs ********************************/

array_key_exists(mixed $valeurCherchée, array $leTableau)
// bool, vérifie si clé existe

in_array(mixed $valeurCherchée, array $leTableau [,bool $strict = FALSE])
// bool, indique si valeur présente. Strict pour comparaison typée

array_search(mixed $valeurCherchée, array $leTableau [,bool $strict = FALSE])
// mixed, recherche première clé associée à la première valeur
// (retourne FALSE sinon, NULL si paramètres invalides)

array_values(array $leTableau)
// array, retourne valeurs du tableau et l'indexe de façon numérique

array_keys(array $leTableau [,mixed $search_value [,bool $strict = FALSE]])
// array, retourne les clés numériques et littérales du tableau

/********* comparer des tableaux **********************************************/

array_intersect(array $array1 , array $array2 [,array $...])
// array, retourne tableau contenant valeurs de array1 présentes
// dans tous arguments array2, ... (clés préservées)

array_diff(array $array1 , array $array2 [,array $...])
// array, compare tableau array1 avec autre(s)
// retourne valeurs de array1 non présentes dans autres tableaux

/********* trier de tableaux **************************************************/

sort(array &$array [,int $sort_flags = SORT_REGULAR])
// bool, trie éléments array plus petit au plus grand

asort(array &$array [,int $sort_flags = SORT_REGULAR])
// bool, trie valeurs ordre alphabétique (corrélation index/valeurs conservée)

arsort(array &$array [,int $sort_flags = SORT_REGULAR])
// comme asort, mais ordre alphabétique inverse

$sort_flags
// paramètre optionnel pour modifier comportement de tri avec ces valeurs :
// SORT_REGULAR, SORT_NUMERIC, SORT_STRING, SORT_LOCALE_STRING, SORT_NATURAL

/********* rassembler, exploser, convertir un tableau *************************/

implode([string $séparateur,] array $pieces) // ou join()
// string, rassemble éléments en une chaîne ($glue par défaut chaine vide ' ')

explode(string $séparateur , string $string [,int $limit = PHP_INT_MAX])
// array, retourne tableau de chaînes


/******************************************************************************/
/************** OBJETS ********************************************************/
/******************************************************************************/

$variable = {};
$variable = new nomObjet();
$variable = new class{}; // classe anonyme
$obj1 = new \stdClass; // ou new stdClass() , PHP7

$book = new \stdClass;
$book->title = "Harry Potter and the Prisoner of Azkaban";
$book->author = "J. K. Rowling";
$book->publisher = "Arthur A. Levine Books";
$book->amazon_link = "http://www.amazon.com/dp/0439136369/";

$book->title
// accéder au contenu

// nom classe (en PascalCase) = nom fichier le contenant
class Database // dans le fichier Database.php
{
  public static $_instance;
  // propriété de l'objet. public = accès en dehors, static = syntaxe spécifique
  // méthode static permet son exécution sans avoir à instancier class
  public function__construct()
  // fonction appelée implicitement dès appelée
  {
    try {
      self::$_instance = new PDO(
        // self pour accéder propriétés/méthodes statiques déclarées dans classe
        ...
        [
          PDO::ATTR_ERRMODE => PDO::ERRMODE_EXCEPTION,
          PDO::ATTR_DEFAULT_FETCH_MODE => PDO::FETCH_ASSOC
        ]);
        self::$_instance->exec(...)
        if(self::$_instance === null) {
          throw new PDOException("La connexion a echouée", 1);
        }
    } catch (PDOException $e) {
      ...
    }
  }
}
new Database(); // créé une instance de la classe


/******************************************************************************/
/************** OBJETS ET CLASSES *********************************************/
/******************************************************************************/

// classe peut contenir propres constantes, variables (= propriétés/attributs)
// et fonctions (= méthodes)
// $this = objet appelant

/** visibilité (public / protected / private) **/
// objets mêmes types ont accès membres privés et protégés les uns des autres
// même si pas de la même instance (détails spécifiques de implémentation déjà
// connus en interne par ces objets)

/** définition classes avec méthodes différentes visibilités **/

// sans extension
class MyClass
{
    public $public = 'Public'; // utilisable par tout le programme
    protected $protected = 'Protected'; // accès limité classe + celles héritent
    private $private = 'Private'; // accès réservé à classe qui l'a défini

    function printHello() // encapsulation
    {
        echo $this->public;
        echo $this->protected;
        echo $this->private;
    }
}

$obj = new MyClass(); // instanciation
echo $obj->public; // fonctionne
echo $obj->protected; // erreur fatale
echo $obj->private; // erreur fatale
$obj->printHello(); // affiche Public, Protected et Private


// avec extension (MyClass2 hérite méthodes et membres de MyClass)
class MyClass2 extends MyClass
{
    // on peut redéclarer les éléments publics ou protégés, mais pas ceux privés
    protected $protected = 'Protected2';

    function printHello() // redéfinition possible de la méthode parente
    {
      echo $this->public;
      echo $this->protected;
      echo $this->private;
   }
}

$obj2 = new MyClass2(); // instanciation
echo $obj2->public; // fonctionne
echo $obj2->protected; // erreur fatale
echo $obj2->private; // indéfini
$obj2->printHello(); // affiche Public, Protected2 et Indéfini


/** création d'une instance d'une classe **/

$instance = new SimpleClass();
// ou
$className = 'SimpleClass';
$instance = new $className();

// Résolution de nom de classe
// récupérer une chaîne contenant le nom qualifié complet de la classe ClassName

namespace NS {
    class ClassName {
    }

    echo ClassName::class;
}

/** METHODES **/

// déclare méthode publique
public function MyPublic() { }

// déclare méthode protégée
protected function MyProtected() { }

// déclare méthode privée
private function MyPrivate() { }

/** CONSTRUCTEUR **/

// déclare constructeur public
public function __construct() { }

// méthode constructeur classe appellée à chaque nouvelle instanciation
// intéressant pour initialiations dont objet a besoin
// constructeurs parents pas appelés si classe enfant définit constructeur
// pour utiliser un constructeur parent: parent::__construct()

class BaseClass {
    function __construct() {
        print "In BaseClass constructor\n";
    }
}

class SubClass extends BaseClass {
    function __construct() {
        parent::__construct();
        print "In SubClass constructor\n";
    }
}

/** CLASSE ABSTRAITE **/

// peut pas être instanciée, méthode abstraite existe que si classe l'est
// déclare signature de la méthode (peut pas définir son implémentation)
// méthodes abstraites doivent être définies par enfant avec même visibilité

abstract class AbstractClass
{
    // force classes filles à définir cette méthode
    abstract protected function getValue();
    abstract protected function prefixValue($prefix);

    // méthode commune
    public function printOut() {
        print $this->getValue() . "\n";
   }
}

class ConcreteClass1 extends AbstractClass
{
     protected function getValue() {
       return "ConcreteClass1";
     }

     public function prefixValue($prefix) {
       return "{$prefix}ConcreteClass1";
    }
}


/******************************************************************************/
/************** STRUCTURES DE CONTROLE (if, switch, while...) *****************/
/******************************************************************************/

/********* ALTERNATIVES *******************************************************/

// IF - ELSE
if (condition) {
  // code...
} elseif (condition) {
  // code...
} else {
  // code...
}

// structure ternaire
condition ? expr1 : expr2
// si condition vaut true, l'opérateur renverra valeur d'expr1, sinon expr2
var elvisLives = Math.PI > 4 ? "Yep" : "Nope";
"Le prix est : " + (estMembre ? "15 €" : "30 €")

// SWTICH : évalue expression, exécute instructions correspondantes selon cas
switch ($note) {
  case 'value':
    // code...
    break;

  default:
    // code...
    break;
}

/********* BOUCLES ************************************************************/

// WHILE : boucle à pré-condition (tant que)
while($a <= 10) {
  // code...
}

// FOR : boucle itérative
for($i=0; $i < ; $i++) {
// initialisation ; condition ; incrémentation
  // code...
}

// FOREACH : boucle de parcours (tableaux et objets)
foreach($variable as $key => $value) {
	# code...
}

// &$valeur pour la modifier (assigne référence au lieu copier la valeur)
$arr = array(1, 2, 3, 4);
foreach ($arr as &$value) {
    $value = $value * 2; // $arr vaut maintenant array(2, 4, 6, 8)
}
unset($value); // détruit référence sur dernier élément

continue Int;
// dans boucle pour faire directement commencer prochaine itération
// Int : optionnel, indique combien structures emboîtées doivent être éludées


/******************************************************************************/
/************** FORMULAIRES, REQUETES, BASES DE DONNEES ***********************/
/******************************************************************************/

// « Never trust user input » : SECURISER! (htmlspecialchars...)

/********* requête de type POST : /fichier.php (plus sécurisée) ***************/

/* code html correspondant :
<form action="recuper-donnees-formulaire.php." method="post">
 Pseudo : <input type="text" name="pseudo" placeholder="saisir...">
 <input type="submit" name="envoi">
</form> */

// pour récupérer et afficher données formulaire :
if($_SERVER['REQUEST_METHOD'] == 'POST') { // si formulaire soumis
  echo $_POST['pseudo']; // affiche contenu
}

/** traitement de l'envoi d'un fichier **/

$_FILES['nom_du_champ']
$_FILES['nom_du-champ']['name'] // nom fichier envoyé
$_FILES['nom_du-champ']['type'] // "image/gif"
$_FILES['nom_du-champ']['size'] // en octets (1M = 1Mo)
$_FILES['nom_du-champ']['tmp_name'] // répertoire temporaire stockage
$_FILES['nom_du-champ']['error'] // "0" si pas d'erreur


/********* requête GET ********************************************************/

// page.php?param1=valeur1&param2=valeur2&param3=valeur3&param4=valeur4…
// & doit être écrit &amp; dans le code html

$_GET["name"]
// méthode pour récupérer valeurs non sensibles du form 'name'
// envoie toutes les saisies de chacun des champs dans l'url

/* code html correspondant vers page bdc.php :
<a href="bdc.php?order_n=<?= $value['orderNumber']?>">
    texte
</a> */

$_GET['order_n'] // pour récupérer dans bdc.php


/******************************************************************************/
/************** SYNTAXE ALTERNATIVE (dans .PHTML) *****************************/
/******************************************************************************/
?>

<?php if(isset($result)): ?>
<?= $result // version contractée d'echo $result ?>
<?php endif; ?>

<?php switch($foo): ?>
<?php case 1: ?>
    ...
<?php endswitch; ?>

<?php foreach($numberArray as $key): ?>
    <?php echo $key . '<br>'; ?>
<?php endforeach; ?>

<?php
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

include_once('index.phtml')
// bool, comportement = include, mais si code déjà inclus, ne le sera pas

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

header("Content-type: image/png");
$image = imagecreatefromjpeg("sonNom.jpg");
imagepng($image);
// envoie image png et non page HTML

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

fgets(resource $handle [,int $length])
// string, récupère la ligne courante sur laquelle se trouve le pointeur du fichier.

fgetcsv(resource $handle)
//[$length = 0] [$delimiter = ","] [$enclosure = '"'] [$escape = "\"]
// array, analyse ligne qu'il lit, recherche et retourne champs CSV
// lignes -> keys, valeurs -> values
// length : > plus grande ligne, enclosure : caractère encadrement texte
// escape : un seul caractère échappement
// retourne : NULL si handle invalide, FALSE si autres erreurs

fputcsv(resource $handle, array $fields)
// [$delimiter = ","] [$enclosure = '"'] [$escape_char = "\\" ]
// int, formate ligne passée sous forme tableau fields
// écrit résultat dans fichier handle

fclose(resource $handle)
// bool, ferme fichier représenté par pointeur handle

fwrite(resource $handle, string $string [,int $length]) // alias de fputs
// int, écrit contenu de la chaîne string dans fichier pointé par handle

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

/********* RECUPERER ELEMENT BDD **********************************************/

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
var_dump($pdo); // pour vérifier retourne bien objet PDO

/********* Méthode 1 : REQUETE SQL prepare() puis execute() *******************/

PDO::prepare(string $statement)
// [array $driver_o[bool $use_include_path = FALSE
// [resource $context]]ptions = array()]
// public PDOStatement, prépare requête SQL être exécutée par méthode execute()
// requête peut contenir zéro ou plusieurs noms (:nom) ou marqueurs (?) pour
// lesquels valeurs réelles seront substituées lorsque requête sera exécutée
// impossible utiliser marqueurs nommés+marqueurs interrogatifs
// choisissez l'un ou l'autre (éviter ? et préférer :nom)

PDOStatement::execute([array $input_parameters])
// public bool, exécute requête préparée.
// input_parameters : tableau de valeurs avec autant éléments qu'il y a
// paramètres à associer dans requête SQL qui sera exécutée

// EXEMPLES //

$q = $pdo->prepare("SELECT * FROM customers WHERE customerNUMBER = :id");
// :id fait référence info qui sera donnée au moment exécution dans la bdd
// trouver nom assez éloigné du nom réel bdd pour éviter injection SQL
$q->execute([':id' => 103]);

$q = $pdo->prepare(
  "INSERT INTO Post (Author_Id, Category_Id, CreationTimestamp)
  VALUES (:auth, :cate, NOW())"
);
$q->execute([':auth' => $authorNewPost, ':cate' => $categoryNewPost]);


/********* Méthode 2 : REQUETE query() puis fetch() ***************************/

PDO::query()
// exécute requête SQL, retourne jeu de résultats en tant qu'objet PDOStatement

PDOStatement::fetch([int $fetch_style])
// [int $cursor_orientation = PDO::FETCH_ORI_NEXT] [int $cursor_offset = 0]
// public mixed, récupère ligne depuis jeu résultats associé objet PDOStatement
// paramètre fetch_style détermine façon dont PDO retourne ligne :
// PDO::FETCH_BOTH (défaut): retourne tableau indexé par les noms de colonnes
// PDO::FETCH_ASSOC : pour que retourne en tableau associatif
// et aussi par les numéros de colonnes, commençant à l'index 0,
// comme retournés dans le jeu de résultats

PDOStatement::fetchAll ([int $fetch_style])
// [mixed $fetch_argument] [array $ctor_args = array()]
// public array, retourne tableau contenant lignes du jeu d'enregistrements

// EXEMPLE //

$query = $pdo->query(
  'SELECT po.Id, Title, Contents, CreationTimestamp, au.FirstName, ca.Name
  FROM Post po
  INNER JOIN Author au ON au.Id = po.Author_Id
  INNER JOIN Category ca ON ca.Id = po.Id
  ORDER BY CreationTimestamp DESC'
);

$posts = $query->fetchAll(); // OU fetch() que pour une ligne


/******************************************************************************/
/************** ENCODER, DECODER, FILTRER, SECURISER **************************/
/******************************************************************************/

json_encode(mixed $value [,int $options = 0 [,int $depth = 512]])
// string, retourne chaine caractères contenant la représentation JSON de value
// encodage affecté par options fournies (JSON_UNESCAPED_UNICODE...)

htmlentities($string)
// [,int $flags = ENT_COMPAT | ENT_HTML401]
// [,string $encoding = ini_get("default_charset")][,bool $double_encode = TRUE]
// string, convertit tous les caractères éligibles en entités HTML

htmlspecialchars($string)
// [,int $flags = ENT_COMPAT | ENT_HTML401]
// [,string $encoding = ini_get("default_charset")][,bool $double_encode = true]
// string, convertit les caractères spéciaux en entités HTML
// à utiliser lorsque qu'on echo des données dans le HTML (pas vers BD)
// évite failles XSS (cross-site scripting : injection contenu dans page)

stripcslashes(string $str)
// string, décode chaîne encodée avec addcslashes(), supprime les antislashs

ctype_digit(string $text)
// bool, vérifie si tous caractères chaîne texte sont chiffrés

password_hash(string $password,int $algo[,array $options])
// string, crée clé de hachage pour mot de passe
// $algo : PASSWORD_DEFAULT / PASSWORD_BCRYPT / PASSWORD_ARGON2I

password_verify(string $passwordUtilisateur,string $passwordHaché)
// bool, vérifie que le hachage fourni correspond bien au mot de passe fourni

filter_var(mixed $variable [,int $filter = FILTER_DEFAULT [,mixed $options]])
// mixed, filtre variable avec un filtre spécifique (false si échec)
// FILTER_VALIDATE_EMAIL, FILTER_VALIDATE_FLOAT ...
// cf. http://php.net/manual/fr/filter.filters.php


/******************************************************************************/
/************** STOCKAGES, SESSIONS, INFOS SERVEUR ****************************/
/******************************************************************************/

$_SERVER
// tableau contenant informations comme en-têtes, dossiers et chemins du script
// entrées ce tableau créées par le serveur web
// index ++ : SERVER_ADDR,SERVER_NAME,DOCUMENT_ROOT,HTTP_REFER,HTTP_USER_AGENT,
// REMOTE_ADDR,REMOTE_HOST,REMOTE_PORT,SCRIPT_FILENAME,SERVER_PORT,REQUEST_URI

/** SESSIONS **/

$_SESSION
// tableau associatif valeurs stockées dans sessions
// $_SESSION['prenom'] = 'Jean' pour créer variable

if(session_status() == PHP_SESSION_NONE) {
  session_start();
}
// initialise session

session_start([array $options = array()])
// bool, crée ou restaure session trouvée sur serveur (via identifiant session)
// appeler fonction tout début pages où besoin variables de session (avant html)

session_destroy()
// bool, détruit données associées à session courante
// ne détruit pas variables globales associées à la session

session_name([string $nouveauNomSession])
// string, retourne nom session courante
// $name fourni, modifie nom session et retourne ancien nom session

session_status()
// int, affiche état session courante (0: désactivée, 1: aucune, 2: active)

/* Destruction d'une session avec $_SESSION (pas le cookie) */
  session_start(); // session_name("autrenom")
  $_SESSION = array(); // session_unset() pour ancien code
  session_destroy();


/** COOKIES **/

$_COOKIE
// tableau associatif variables, passé au script courant, via des cookies HTTP

$_COOKIE['pseudo']
// affichage contenu pseudo

setcookie('pseudo', 'M@teo21', time() + 365*24*3600, null, null, false, true)
// créé/modifie cookie avec option httpOnly (contre XSS) qui expire dans un an
// appeler avant tout code html
