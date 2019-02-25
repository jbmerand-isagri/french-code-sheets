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
- IDE répandu : IntelliJ
- un fichier = une partie logique de l'appli, contient classe portant même nom
- fichiers séparés dans des packages (sous-dossiers)

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
- ALT+ENTREE sur objet/outil : ajout ligne pour importer en haut fichier

/******************************************************************************/
/************** VARIABLES *****************************************************/
/******************************************************************************/

// noms en camelCase

/* types primitifs */
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

/* types complexes (objets) */
// faut voir comme objet de la vie réelle, représente concepts
// possède fonctionnalités et des composants

String // chaînes de caractères
int[] arr // tableaux

String s1 = new String("Texte");
// crée un string avec un constructeur

String s2 = "Autre texte";
// utilise "" pour créer directement un string

/******************************************************************************/
/************** CLASSES *******************************************************/
/******************************************************************************/

// toute classe publique doit être déclarée dans un fichier portant son nom

public class Main {
    public static void Main(String[] args) {
        Order order = new Order();
        order.runMenu();
    }
}
// la classe principale d'un programme

// public : toutes les autres classes peuvent y accéder

/******************************************************************************/
/************** TABLEAUX ******************************************************/
/******************************************************************************/

// basé sur 0
// nécessite une boucle pour afficher

int[] tableau = new int[27];
// crée tableau de 27 cases

tableau[0] = 22;
// associe valeur

int[] tableau = {33, 22, 10, 4};
// crée tableau en assignant valeurs


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
varText.contains("hello"); // bool, test si mot contenu dans variable


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
*/

// format Given_ParamètresDuTest_When_ContexteOùEst_Then_RésultatAttendu
@Test
public void Given_Nothing_When_DisplayMenuSelection_Then_ShouldDisplayText() {
    order.displayAvailableMenu();
    assertEquals(false, outContent.toString().isEmpty());
}


// A AJOUTER //
assertEquals();
toString();
replace();
split();
.length
contains()
charAt()

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