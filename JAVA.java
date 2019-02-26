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

// noms en camelCase

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
/************** OBJETS ********************************************************/
/******************************************************************************/

// = variable d'un type d'une classe
// constructeur : passe valeur à création objet, même nom que classe

public class Personne {
    private Age age;

    public Personne(Age age) { // constructeur (pas besoin javadoc)
        this.age = age;
    }
}

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
toString();
replace();
split();
.length
isEmpty();
trim();
contains()
charAt()

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