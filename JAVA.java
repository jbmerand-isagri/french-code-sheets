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
/************** VARIABLES *****************************************************/
/******************************************************************************/

/*************** TYPES PRIMITIFS **********************************************/
// moins lourds, meilleure performances

byte // nombre, 1 byte
short // nombre, 2 bytes
int // nombre, 4 bytes
long // nombre, 8 bytes
float // nombre décimal, 4 bytes
double // nombre décimal, 8 bytes
char // un caractère, 2 bytes
boolean // vrai ou faux, 1 byte

int monNombre;
monNombre = 5;
// ou
int monNombre = 5;

double d = 4.5;

float f = 4.5f; /* ou */ float f = (float) 4.5;

boolean b = false;

/*************** TYPES COMPLEXES (OBJETS) *************************************/
// faut voir comme objet de la vie réelle, représente concepts
// possède fonctionnalités et des composants

Double
Integer
Boolean

String // chaînes de caractères
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

getChars(int srcBegin, int srcEnd, char[] dst, int dstBegin)
// void; copie les crc du string dans le tableau de crc

indexOf(int ch [String str] [String str, int fromIndex])
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

offsetByCodePoints(int index, int codePointOffset) // int
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

subSequence(int beginIndex, int endIndex)
// CharSequence; retourne nouvelle séquence crc qui est une partie séquence

substring(int beginIndex [, int endIndex])
// String; retourne nouvelle chaune qui est sous-chaine de la chaine

toCharArray()
// char[]; convertit chaine en un nouveau tableau de crc

toLowerCase([Locale locale])
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
/************** TABLEAUX ******************************************************/
/******************************************************************************/

// basé sur 0, nécessite boucle pour afficher, taille non augmentable
// aucune fonctionnalité livrée directement avec

int[] tableau = new int[27];
// crée tableau de 27 cases

tableau[0] = 22;
// associe valeur

int[] tableau = {33, 22, 10, 4};
// crée tableau en assignant valeurs


/******************************************************************************/
/************** LISTES ********************************************************/
/******************************************************************************/

List<String> names = new ArrayList<String>();
// ArrayList est une classe de type générique (peut fonctionner avec plusieurs
// autres types et doit donc le préciser quand on le crée)

names.add("Ashe");
// bool, ajoute valeur

names.get(0);
// retourne valeur selon index

names.indexOf("Ashe");
// retourne index de la valeur

names.contains("Ashe");
// bool, indique si valeur présente dans la liste

names.remove("Ashe");
// bool, supprime valeur de la liste

Map<String, Integer> ages = new HashMap<String, Integer>();
// HashMap sert à stocker couples de clés et de valeurs

ages.put("John, 44");
// ajoute valeur ou la met à jour si existante

ages.containsKey("John");
// bool, indique si clé présente

ages.get("John");
// retourne valeur

ages.remove("John");
// retourne sa valeur, supprime

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