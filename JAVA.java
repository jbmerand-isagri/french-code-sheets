/******************************************************************************/
/************** DEFINITIONS ***************************************************/
/******************************************************************************/

/*
- créateurs : James Grosling, Patrick Naughton
- développé par Sun Microsystems (dès 1990), puis ORACLE (dès 2009)
- langage le plus répandu dans entreprises (grosses applications)
- outils riches, variés, matures, communauté ++
- langage intermédiaire (permettant bonnes performances) :
-- code pseudo-compilé (compilateur transforme code en ByteCode, binaire)
-- ByteCode lut par interpréteur (JVM : JAVA Virtual Machine)
- JDK : Java Developer Toolkit (compilateur, interpréteur JVM, JShell)
-- JShell (dès Java 9) : outil pour tester code dans terminal
- .jar : extension d'un programme (dossier archive contenant classes et config)
- langage orienté objet au typage fort
*/

/******************************************************************************/
/************** ETAPES A SUIVRE, INFOS ****************************************/
/******************************************************************************/

/* 

4 types de visibilité pour classes, méthodes :
- public : toutes les autres classes peuvent y accéder
- private : accessible uniquement dans classe
- rien : accessible uniquement dans le package
- protected : accessible dans classe et ses enfants

- IDE répandu : IntelliJ
- un fichier = une partie logique de l'appli, contient classe portant même nom
- fichiers séparés dans des packages (sous-dossiers)

- maven : gestionnaire de dépendances
-- convertir en projet maven (clic droit sur projet, "add framework support")
-- pom.xml fichier de configuration
-- dépendance : ensemble de codes avec fonctionnalité précise
--- librairie : fonctionnalité spécifique, se greffe facilement
--- framework : beaucoup plus complet, change généralement organisation du code
-- mvnrepository.com

- dans terminal :
-- connaitre version Java : javac -version
-- compiler fichier .java : javac Fichier.java (sans réponse = sans erreur)
-- exécuter programme : java Fichier
-- saisir directement code java pour tester : jshell (CTRL+D pour quitter)

- configurer variables environnement sur MacOS (pour changer version Java...) :
-- modifier .bash_profile (/Library/Java/JavaVirtualMachines/...), ajouter :
-- JAVA_HOME=/Library/Java/JavaVirtualMachines/jdk-9.0.1.jdk/Contents/Home/
-- PATH=$JAVA_HOME/bin:$PATH

- exporter programme : 
-- File > Project Structure...
-- dans partie Artifact : Add > JAR > From modules with dependencies
-- renseigner classe principale du projet (Main Class)
-- nouvel Artifact créé, puis Build > Build Artifacts...
-- Nom:jar > Build

*/

/******************************************************************************/
/************** IntelliJ ******************************************************/
/******************************************************************************/

/*
- code -> generate pour créer facilement getter, setter
- ALT+ENTREE sur objet/outil : ajout ligne pour importer en haut fichier
- psvm : raccourci pour créer rapidement méthode main
- sout : raccourci pour System.out.println()
*/

/******************************************************************************/
/************** CONCEPTS POO **************************************************/
/******************************************************************************/

/* 
OBJET
Consiste en un état et un comportement associé, comme les objets du quotidien.
Objet stocke son état dans des champs (variables) et expose son comportement
par des méthodes (fonctions).
Méthodes fonctionnent sur l'état interne d'un objet et servent de mécanisme principal pour communication entre objets.
Encapsulation : cacher état interne et exiger que toute les interactions soient
effectuées par des méthodes d'un objet.
Intérêts :
- modularité : code source peut être écrit et maintenu indépendamment
- informations cachées : détails implémentation interne cachés de l'extérieur
- réutilisation : pour implémenter, tester, déboguer objets complexes, spécifiques
- pluggabilité et facilité de débogage

CLASSE
= le modèle à partir duquel des objets individuels sont créés

HERITAGE
Classes héritent des états et comportements des autres classes.
Chaque classe autorisée à avoir une superclasse directe.
Chaque superclasse peut avoir un nombre illimité de sous-classes.

INTERFACE
Implémentation interface permet à une classe devenir plus formelle quant au
comportement qu'elle promet de fournir.
Interfaces forment contrat entre classe et monde extérieur, qui est appliqué au
moment de la construction par le compilateur.

PACKAGE
= un namespace qui organise un ensemble de classes et d'interfaces connexes.
JAVA fournit énorme bibliothèque de classes (ensemble de packages) = API.
cf. Java Platform API Specification pour avoir le détail packages... :
https://docs.oracle.com/javase/8/docs/api/index.html
*/


/******************************************************************************/
/************** VARIABLES *****************************************************/
/******************************************************************************/

/***** VARIABLES D'INSTANCE (CHAMPS NON STATIQUES) *****/

// objets stockent leurs états individuels dans champs non statiques
// leurs valeurs sont uniques à chaque instance d'une classe (chaque objet)

/***** VARIABLES DE CLASSE (CHAMPS STATIQUES) *****/

// = champs déclaré avec modificateur static (indique compilateur existe 
// exactement une copie cette variable, quelque soit nombre fois classe
// instanciée)

/***** VARIABLES LOCALES *****/

// méthode stocke souvent son état temporaire dans variables locales
// syntaxe de déclaration = celle d'un champs (pas mot-clé spécial)
// détermination provient déclarée entre accolades ouvrantes/fermantes méthode
// visible que par méthode dans laquelle est déclarée
// non accessibles à partir du reste de la classe

/***** PARAMETRES *****/

// toujours classés en variables et non en champs

/*************** NOMMAGE ******************************************************/

// peut commencer par lettre, $ (à proscrire) ou _ (à éviter)
// utiliser mots entiers, différents de mots réservés ou mots-clés
static final int NUM_GEARS = 6 // nom valeur constante (majuscule, avec _)
int gearRatio // camelCase sinon

/*************** TYPES DE DOONNEES PRIMITIFS **********************************/
// moins lourds, meilleures performances
// langage au typage statique => variables doivent être déclarées avec leur
// type et leur nom avant d'être utilisées
// classe String pas techniquement ce type, mais peut être pensée comme tel
// compilateur définit valeur par défaut champs déclarés mais non initialisés,
// sauf pour variables locales

int gear = 1;
// champ "gear" existe, contient données numériques et a valeur initiale de 1

// 8 types de données primitives / valeur par défaut pour champs:
byte // nombre, -128 à 127 inclus, 8-bit / 0
short // nombre, -32768 à 32767 inclus, 16-bit / 0
int // nombre, -2^31 à 2^31-1, 32-bit / 0
long // nombre, -2^63 à 2^63-1, 64-bit / 0L
float // nombre décimal, 32-bit => pour sauver mémoire dans tableaux / 0.0f
double // nombre décimal, 64-bit => choix généralement par défaut / 0.0d
// float/double jamais pour valeurs précises, utiliser classes Numbers/Strings
char // un caractère, 16-bit / 'u\0000'
boolean // deux valeurs possibles : true ou false / false

int monNombre;
monNombre = 5_2; // peut utiliser _ pour nombre entre chiffres
// ou
int monNombre = 5;
double d = 4.5;
float f = 4.5f; /* ou */ float f = (float) 4.5;
boolean b = false;

/** LITTERAUX **/

// un littéral est la représentation du code source d'une valeur fixe
// possible affecter littéral à variable de type primitif
// littéraux char et String : '' pour char, "" pour String
// \b backspace \t tab \n line feed \f form feed \r carriage return \\ backslash


/*************** TYPES COMPLEXES (OBJETS) *************************************/
// faut voir comme objet de la vie réelle, représente concepts
// possède fonctionnalités et des composants

Double
Integer
Boolean

String // chaînes de caractères / null
int[] arr // tableaux

// List?
// HashMap?

String s1 = new String("Texte");
// crée un string avec un constructeur

String s2 = "Autre texte";
// utilise "" pour créer directement un string


/******************************************************************************/
/************** CLASSES *******************************************************/
/******************************************************************************/

// = la description d'un type
// toute classe publique doit être déclarée dans un fichier portant son nom

public class Main {
    public static void main(String[] args) {
        Order order = new Order();
        order.runMenu();
    }
}
// la classe principale d'un programme

/* favoriser bonne visibilité du code */
// par défaut, toujours mettre tous les attributs à private
// si besoin lire ou utiliser informations depuis extérieur : créer getter
// si besoin de le modifier depuis extérieur : créer setter
// pas besoin javadoc pour getters et setters

public class MaClass {
    private int number; // attribut

    public int getNumber() { // getter
        return number;
    }

    public void setNumber(int number) { // setter
        this.number = number;
    }

}

/* héritage */

// classe enfant prend toutes les fonctionnalités de son parent, spécialise

public class Vehicle {
    // attributs
    private String modelName;
    private int year;
    private int[] dimensions = new int[3];
}

// Car hérite de Vehicle
public class Car extends Vehicle {
    private int door;
    private String motor;
    private List<String> options = new ArrayList<String>();

    // constructeur
    public Car(String modelName, int year, int[] dimensions, int door, String motor, List<String> Options) { 
        super(modelName, year, dimensions); // reprend classe mère
        this.door = door;
        this.motor = motor;
        this.options = options;
    }
}

/* généralisation */

private Map<Product, Integer> products = new HashMap<Product, Integer>();
// peut ainsi facilement changer le type vers un autre type (enfant)

/* surcharger fonctionnalités */
@Override
public void maMéthode() { // prendre signature identique
    // code différent
}

/* classe abstraite */

public abstract class MaClasse { // ininstanciable
    
    public abstract void maMéthode(); // surcharge obligatoire pour instancier
}


/* DIVERS
- Writer : une classe capable d'écrire dans un fichier.
- InnerClasses : classes créées dans d'autres.
- classes anonymes : héritage dans le code, comportement de base changé, sans
réellement créer une nouvelle classe avec un nom.
Mock?


/******************************************************************************/
/************** CLASS OBJECT (OBJETS) *****************************************/
/******************************************************************************/

// java.lang.Object // JDK 1.0

public class Object {}
// classe origine dans la hiérarchie : chaque classe l'a pour superclasse
// tous objets, incluant tableaux, implémentent méthodes cette classe

// = variable d'un type d'une classe
// constructeur : passe valeur à création objet, même nom que classe

public class Personne {
    private Age age;

    public Personne(Age age) { // constructeur (pas besoin javadoc)
        this.age = age;
    }
}

clone()
// protected Object; crée et retourne une copie de l'objet

equals(Object obj)
// boolean; indique si d'autres objets sont "égaux" à celui-ci

finalize()
// protected void; Called by the garbage collector on an object when garbage collection determines that there are no more references to the object.

getClass()
// Class<?>; retourne la classe d'exécution de l'Objet

hashCode()
// int; retourne une valeur hashée pour l'objet

notify()
// void; wakes up a single thread that is waiting on this object's monitor

notifyAll()
// void; wakes up all threads that are waiting on this object's monitor

toString()
// String; retourne une représentation string de l'objet

wait()
// void; Causes the current thread to wait until another thread invokes the notify() method or the notifyAll() method for this object.

wait(long timeout)
// void; Causes the current thread to wait until either another thread invokes the notify() method or the notifyAll() method for this object, or a specified amount of time has elapsed.

wait(long timeout, int nanos)
// void; Causes the current thread to wait until another thread invokes the notify() method or the notifyAll() method for this object, or some other thread interrupts the current thread, or a certain amount of real time has elapsed.


/******************************************************************************/
/************** CLASS STRING **************************************************/
/******************************************************************************/

// java.lang.Object > java.lang.String // JDK 1.0

public final class String
extends Object
implements Serializable, Comparable<String>, CharSequence {}

// classe qui représente les chaines de caractères
// tous littéraux de chaine implémentés en tant qu'instances cette classe
// chaines sont constantes = valeurs non modifiables après création
// tampons de chaine supportent chaines mutables
// objets String sont immuables (=> peuvent être partagés)

charAt(int index)
// char; retourne le caractère à l'index spécifié

codePointAt(int index)
// int; Returns the character (Unicode code point) at the specified index.

codePointBefore(int index)
// int; Returns the character (Unicode code point) before the specified index.

codePointCount(int beginIndex, int endIndex)
// int; Returns the number of Unicode code points in the specified text range of this String.

compareTo(String anotherString)
// int; compare lexicographiquement deux chaines

compareToIgnoreCase(String str)
// +ignore les différences de casse

concat(String str)
// String; concatène chaine spécifiée à fin de la chaine

contains(CharSequence s)
// boolean; true si string contient séquence caractères spécifiée

contentEquals(CharSequence cs)
// boolean; compare à la CharSequence spécifiée

contentEquals(StringBuffer sb)
// boolean; compare au StringBuffer spécifié

copyValueOf(char[] data[int offset, int count])
// static String; retourne chaine représentant séquence crc dans tableau

endsWith(String suffix)
// boolean; teste si chaine finit par suffixe spécifié

equals(Object anObject)
// boolean; compare à l'objet spécifié

equalsIgnoreCase(String anotherString)
// boolean; compare à la chaine, ignorant la casse

format(Locale 1, String format, Object... args)
// static String; Returns a formatted string using the specified locale, format string, and arguments.

format(String format, Object... args)
// static String; Returns a formatted string using the specified format string and arguments.

getBytes([Charset charset] [String charsetName])
// byte[]; encode en une séquence d'octets avec jeu de crc par défaut/défini
// stocke résultat dans un nouveau tableau d'octets

getChars(int srcBegin, int srcEnd, char[] dst, int dstBegin);
// void; copie les crc du string dans le tableau de crc

indexOf(int ch [String str] [String str, int fromIndex]);
// int; retourne index dans string première occurence crc/string

intern() // String; retourne expression canonique

isEmpty()
// boolean; true si length() est 0

lastIndexOf(int ch [int ch, int fromIndex] [String str])
// int; retourne index dans string dernière occurence crc/string

length()
// int; retourne longueur chaine crc

matches(String regex)
// boolean; indique si chaine correspond à expression régulière

offsetByCodePoints(int index, int codePointOffset); // int
regionMatches(boolean ignoreCase, int toffset, String other, int ooffset, int len)

replace(char oldChar, char newChar[,CharSequence targ, CharSequence replac])
// String; retourne nouvelle chaine résultant remplacement occurences/séquence

replaceAll(String regex, String replacement)
// String; remplace chaque sous-chaine correspondante à l'expression régulière

replaceFirst(String regex, String replacement)
// String; remplace première sous-chaine correspondante

split(String regex [, int limit])
// String[]; divise chaine autour expression régulère correspondante

startsWith(String prefix [, int toffset])
// boolean; teste si chaine (sous-chaine dès index) commence par préfixe

subSequence(int beginIndex, int endIndex);
// CharSequence; retourne nouvelle séquence crc qui est une partie séquence

substring(int beginIndex [, int endIndex]);
// String; retourne nouvelle chaune qui est sous-chaine de la chaine

toCharArray()
// char[]; convertit chaine en un nouveau tableau de crc

toLowerCase([Locale locale]);
// String; convertit tous crc en minuscule, suivant règles locales / définies

toUpperCase([Locale locale])
// String; convertit tous crc en majuscule, suivant règles locales / définies

trim()
// String; retourne copie chaine, sans espaces début et fin

valueOf(boolean b [char c] [char[] data] [double d] [float f] [int i] [...])
// static String; retourne représentation string de l'argument

valueOf(char[] data, int offset, int count)
// static String; retourne représentation string du sous-tableau


/******************************************************************************/
/************** CLASS ARRAYS (TABLEAUX) ***************************************/
/******************************************************************************/

// java.lang.Object > java.util.Arrays // JDK 1.2

// basé sur 0, nécessite boucle pour afficher, taille non augmentable
// aucune fonctionnalité livrée directement avec

int[] unTableau;
// déclare un tableau d'entiers

int[] tableau = new int[27];
// crée tableau d'entiers de 27 éléments

tableau[0] = 22;
// associe valeur / initialise premier élément

int[] tableau = {33, 22, 10, 4};
// syntaxe raccourcie pour créer et initialiser

class MultiDimArray {
    public static void main(String[] args) {
        String[][] names = { // tableau multidimensionnel
            {"Mr. ", "Mrs. ", "Ms. "},
            {"Smith", "Jones"}
        };
        // Mr. Smith
        System.out.println(names[0][0] + names[1][0]);
        // Ms. Jones
        System.out.println(names[0][2] + names[1][1]);
    }
}

asList(T... a)
// static <T> List<T>; retourne liste taille fixe sauvegardée par tableau

binarySearch(int[] a, int key)
binarySearch(int[] a, int fromIndex, int toIndex, int key)
// static int; recherche valeur spécifiée ds tableau avec algo recherche binaire
// ou byte[], char[], double[], float[], long[], short[], Object[]
// binarySearch(T[] a, T key, Comparator<? super T> c)
// binarySearch(T[] a, int fromIndex, int toIndex, T key, Comparator<? super T> c)
// static <T> int; recherche objet spécifié dans tableau

copyOf(boolean[] original, int newLength)
// static boolean[]; copie tableau en tronquant ou en remplissant avec false 
// (zero/null) si nécessaire pour que copie ait longueur spécifiée
// ou byte[], char[], double[], float[], int[], long[], short[], T[]
// copyOf(U[] original, int newLength, Class<? extends T[]> newType)
// static <T,U> T[]

copyOfRange(boolean[] original, int from, int to)
// static boolean[]; copie la plage spécifiée du tableau dans un nouveau tableau
// ou byte[], char[], double[], float[], int[], long[], short[], T[]
// copyOfRange(U[] original, int from, int to, Class<? extends T[]> newType)
// static <T,U> T[]

deepEquals(Object[] a1, Object[] a2)
// static boolean; true si les deux tableaux sont profondément égaux

deepHashCode(Object[] a)
// static int; retourne code hashé basé sur le "contenu profond" du tableau

deepToString(Object[] a)
// static String; retourne représentation string du "contenu profond" du tableau

equals(boolean[] a, boolean[] a2)
// static boolean; true si les deux tableaux sont égaux
// ou byte[], char[], double[], float[], int[], long[], Object[], short[]

fill(boolean[] a, boolean val)
// static void; assigne valeur booléenne spécifiée à chaque élément tableau
// ou byte[], char[], double[], float[], int[], long[], Object[], short[]

fill(boolean[] a, int fromIndex, int toIndex, boolean val)
// static void; assigne valeur booléenne spécifiée à chaque élément de la plage
// ou byte[], char[], double[], float[], int[], long[], Object[], short[]

hashCode(boolean[] a)
// static int; retourne code hashé basé sur contenu du tableau
// boolean remplaçable (byte, char, double...)

parallelPrefix(double[] array, DoubleBinaryOperator op)
parallelPrefix(double[] array, int fromIndex, int toIndex, DoubleBinOpe op)
// static void; cumule, en parallèle, chaque élément tableau, utilisant fonction
// ou int[], long[], T[]

parallelSetAll(double[] array, IntToDoubleFunction generator)
// static void; définit tous éléments tableau avec fonction de génération
// ou int[], long[]
// parallelSetAll(T[] array, IntFunction<? extends T> generator)

parallelSort(byte[] a)
parallelSort(byte[] a, int fromIndex, int toIndex)
// static void; trie tableau en ordre numérique croissant
// ou char[], double[], float[], int[], long[], short[]
// parallelSort(T[] a, Comparator<? super T> cmp)

setAll(double[] array, IntToDoubleFunction generator)
// static void; définit éléments tableau en utilisant fonction génération
// ou int[], long[], T[]

sort(byte[] a)
sort(byte[] a, int fromIndex, int toIndex)
// static void; trie tableau dans ordre croissant
// ou char[], double[], float[], int[], long[], Object[], short[]
// sort(T[] a, Comparator<? super T> c)
// sort(T[] a, int fromIndex, int toIndex, Comparator<? super T> c)

spliterator(double[] array)
spliterator(double[] array, int startInclusive, int endExclusive)
// static Spliterator.OfDouble; retourne un Spliterator.OfDouble
// ou int[], long[], T[]

stream(double[] array)
stream(double[] array, int startInclusive, int endExclusive)
// static DoubleStream; retourne séquence DoubleStream avec tableau pour source
// static DoubleStream; couvre plage spécifiée
// ou int[], long[], T[]

toString(boolean[] a)
// static String; retourne représentation string du contenu
// ou byte[], char[], double[], float[], int[], long[], Object[], short[]

/******************************************************************************/
/************** INTERFACE ITERABLE<T> *****************************************/
/******************************************************************************/

// java.lang / 1.5
// son implémentation permet objet être cible instruction "for-each loop"

public interface Iterable<T> {}

forEach(Consumer<? super T> action)
// default void; effectue action donnée pour chaque élément de l'Iterable
// jusqu'à ce que tous éléments traités ou que action envoie une exception

iterator()
// Iterator<T>; retourne un itérateur sur éléments de type T

spliterator()
// default Spliterator<T>; crée Spliterator sur éléments décrits par Iterable


/******************************************************************************/
/************** INTERFACE COLLECTION<E> ***************************************/
/******************************************************************************/

// java.util / 1.2
// = interface racine dans hiérarchie de la collection
// collection = groupe d'objets, appelés éléments
// JDK fournit aucune implémentation directe cette interface, mais des
// implémentation de sous-interfaces plus spécifiques (Set, List)
// utilisée pour passer collections et les manipuler avec généralité maximale
// pour Bags et multisets (collections non ordonnées avec éléments dupliqués)

public interface Collection<E>
extends Iterable<E> {}

// pour détails, cf. LIST, SET

add(E e) // boolean
addAll(Collection<? extends E> c) // boolean
clear() // void
contains(Object o) // boolean
containsAll(Collection<?> c) // boolean
equals(Object o) // boolean
forEach(Consumer<? super T> action) // héritée de java.lang.Iterable
hashCode() // int
isEmpty() // boolean
iterator() // Iterator<E>
parallelStream() // default Stream<E>
remove(Object o) // boolean
removeAll(Collection<?> c) // boolean

removeIf(Predicate<? super E> filter)
// default boolean; supprime tous éléments collection satisfaisant prédicat

retainAll(Collection<?> c) // boolean
size() // int
spliterator() // default Spliterator<E>
stream() // default Stream<E>
toArray() // Object[]
toArray(T[] a) // <T> T[]


/******************************************************************************/
/************** INTERFACE LIST<E>  ********************************************/
/******************************************************************************/

// = collection ordonnée (séquence)
// contrôle précis sur chaque élément inséré, accès par index, recherche
// autorise généralement éléments en double, éléments null (!= set (ensemble))
// ajoute stipulations, autres que celles de l'interface Collection

// Superinterfaces: Collection<E>, Iterable<E>
// Implementing Classes: AbstractList, AbstractSequentialList, ArrayList, 
// AttributeList, CopyOnWriteArrayList, LinkedList, RoleList, 
// RoleUnresolvedList, Stack, Vector

public interface List<E>
extends Collection<E> {}

List<String> names = new ArrayList<String>();
// ArrayList est une classe de type générique (peut fonctionner avec plusieurs
// autres types et doit donc le préciser quand on le crée)

// méthodes héritées
forEach() // java.lang.Iterable
parallelStream(), removeIf(), stream() // java.util.Collection

add(E el);
add(int index, E element)
// boolean, ajoute élément en fin de liste
// void; ajoute à la position spécifiée

addAll(Collection<? extends E> c)
addAll(int index, Collection<? extends E> c)
// boolean; ajoute tous éléments dans la collection à fin de la liste

clear()
// void; efface tous éléments liste

contains(Object o)
// boolean; true si liste contient élément spécifié

containsAll(Collection<?> c)
// boolean; true si liste contient tous éléments spécifiés de la collection

equals(Object o)
// boolean; compare objet avec liste pour égalité

get(int index)
// E; retourne élément à position spécifiée

hashCode()

indexOf(Object o)
// int; retourne index de première occurence élément / -1 sinon

isEmpty()
// boolean; true si liste contient aucun élément

iterator()
// Iterator<E>; retourne itérateur sur éléments cette liste dans ordre approprié

lastIndexOf(Object o)
// int; retourne index dernière occurence élément / -1 sinon

listIterator()
listIterator(int fromIndex)
// ListIterator<E>; retourne un itérateur de liste sur éléments cette liste

remove(int index)
// E; supprime élément à position spécifiée

remove(Object o)
// boolean; supprime première occurence élément spécifié, si présent

removeAll(Collection<?> c)
// boolean; supprime tous éléments contenus dans collection spécifiée

replaceAll(UnaryOperator<E> operator)
// default void; remplace chaque élément par résultat application de l'opérateur

retainAll(Collection<?> c)
// boolean; conserve uniquement élément contenus dans collection spécifiée

set(int index, E element)
// E; remplace élément à position spécifiée par élément spécifié

size()
// int; retourne nombre d'éléments

sort(Comparator<? super E> c)
// default void; trie la liste en fonction ordre induit par comparateur

spliterator()
// default Spliterator<E>; crée un Spliterator sur éléments de la liste

subList(int fromIndexInclusive, int toIndexExclusive)
// List<E>; retourne une vue de la partie de la liste

toArray()
toArray(T[] a)
// Object[]; retourne tableau contenant tous éléments liste dans ordre approprié


/******************************************************************************/
/************** INTERFACE SET<E>  *********************************************/
/******************************************************************************/

// FIXME:

https://docs.oracle.com/javase/8/docs/api/java/util/Set.html

/******************************************************************************/
/************** FONCTIONS *****************************************************/
/******************************************************************************/

// ne peut retourner qu'une seule et unique valeur

/**
 * Display a selected number.
 * @param nombre The selected number.
 */
public void displayNumber(int nombre) {
    nombre = nombre + 5;
}

public static void {
    // code
}
// static : exécutable depuis n'importe où, sans besoin d'instancier
// void : ne retourne pas de valeurs
// permet créer des boites à outils

/******************************************************************************/
/************** CONDITIONS ****************************************************/
/******************************************************************************/
// variable de type booléen créée

String a = new String("texte");
String b = new String("texte");
String sameA = a;

boolean r1 = a == b;      // false, puisque a et b ne sont pas le même objet
boolean r2 = a.equals(b); // true, puisque a et b sont logiquement égaux
boolean r3 = a == sameA;  // true, puisque a et sameA sont le même objet


if (number == 50) {
    System.out.println("Le nombre est 50");
} else if (number == 51) {
    System.out.println("Le nombre est 51");
} else {
    System.out.println("Le nombre n'est ni 50, ni 51");
}

switch (maVariable) {
	case valeur1 :
		code;
		break;
	case valeur2 :
		code;
		break;
	default :
		code;
		break;
}


/******************************************************************************/
/************** INTERFACES ****************************************************/
/******************************************************************************/

/* s'intéresse aux entrées et aux sorties
- ressemble classe abstraite sans comportement intérieur (attribut, méthode)
= un contrat : donne le besoin, le comportement attendu, à implémenter
*/

public interface MoyenDeLocomotion { // création interface (non instanciable)
    void deplace(String adresse); // ajoute pas de contenu
}

public class Taxi implements MoyenDeLocomotion { // classe à partir interface
    
    @Override
    public void deplace(String adresse) {
        System.out.println("Je suis un taxi et je vais à " + adresse);
    }
}

/******************************************************************************/
/************** BOUCLES *******************************************************/
/******************************************************************************/

while (condition) {
    // code;
}

do { // se lance au moins une fois
    // code;
} while (condition);

for (int i = 0; i < 4; i++) {
    // à entrée boucle ; gate keeper (false fait quitter) ; à chaque exécution
    // code;
}

break // stoppe et fait sortir de la boucle
continue // stoppe l'itération actuelle et fait passer à la suivante

/* pour foreach avec des tableaux */

int[] arr = {1, 9, 9, 5};
for (int i = 0; i < arr.length; i++) {
    int el = arr[i];
    System.out.println(el);
}
// ou version raccourcie
int[] arr = {2, 0, 1, 3};
for (int el : arr) {
    System.out.println(el);
}


/******************************************************************************/
/************** OPERATEURS ****************************************************/
/******************************************************************************/

+ // concaténation
==
!=
>
<
>=
<=
&& // ET
|| // OU

+=

/******************************************************************************/
/************** STRING ********************************************************/
/******************************************************************************/

varText.length(); // obtenir longueur de la chaine de caractères
varText.contains("hello"); // bool, teste si mot contenu dans variable


/******************************************************************************/
/************** ERREURS *******************************************************/
/******************************************************************************/

// Quand exception intervient, Java donne son type. Pour certaines, Java oblige
// à faire un catch, sinon code ne compile pas.

try {
    // code susceptible générer exception
} catch (ArithmeticException e) { // type exception, e donné arbitrairement
    // code à excécuter si exception intervenue
}


/******************************************************************************/
/************** TESTS *********************************************************/
/******************************************************************************/

/*
TDD (Test Driven Development) : pense au test avant le développement du code.
- permet tests meilleure qualité
- quatre étapes :
-- rédiger en amont tous les tests couvrant tous les scénarios
-- exécuter les tests et vérifier qu'aucun ne fonctionne
-- écrire le code de la fonction
-- exécuter à nouveau les tests pour vérifier tout fonctionne

Etapes
- créer dossier "test" -> clic droit IntelliJ pour préciser dédié aux tests
- générer automatiquement classe de test : Navigate -> Test
- utiliser junitfile
- ajouter une classe de test dès qu'on ajoute une nouvelle classe

*/

// format Given_ParamètresDuTest_When_ContexteOùEst_Then_RésultatAttendu
@Test
public void Given_Nothing_When_DisplayMenuSelection_Then_ShouldDisplayText() {
    order.displayAvailableMenu();
    assertEquals(false, outContent.toString().isEmpty());
}


/******************************************************************************/
/************** FICHIER CSV ***************************************************/
/******************************************************************************/

// CSV : Comma-Separated Values (fichier texte, pour stocker infos)

Path nom = Paths.get("fichier.csv");
// crée type path

Files.write(nom, String.format("texte").getBytes(), APPEND);
// peut déclancher une exception si fichier n'existe pas (à catcher)

lines.get(2.).split();

// A AJOUTER //
List<String>
assertEquals();
replace();
split();
.length
isEmpty();
trim();
contains()
// mot clé final

Integer.valueOf()

un scanner sc.

this

import
import static

/r /n;

String.format("texte%n");

// l'objet Math.

System.out.println("Hello World !");
// out : permet d'accéder à sortie standard
// println : afficher une ligne de texte