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

// classe de base
package fr.jbmerand;

import com.sun.org.apache.xpath.internal.SourceTree;

public class Main {

    public static void main(String[] args) {
	    System.out.println("Hello World !");
    }
}

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

int age = 28; // type Integer (peut : x + - %)
double age2 = 28.5; // décimal (peut : x + - / %)
boolean a = true;

/* types complexes (objets) */
// faut voir comme objet de la vie réel, représente concepts
// possède fonctionnalités et des composants

String varText = new String("mon texte");
String varText2 = "autre texte"; // raccourci syntaxique de String

/******************************************************************************/
/************** CLASSES *******************************************************/
/******************************************************************************/

public class Main {
    public static void Main(String[] args) {
        Order order = new Order();
        order.runMenu();
    }
}


/******************************************************************************/
/************** FONCTIONS *****************************************************/
/******************************************************************************/

/**
 * Display a selected menu.
 * @param nbMenu The selected menu.
 */
public void displaySelectedMenu(int nbMenu) {
    nbMenu = nbMenu + 5;
}

/******************************************************************************/
/************** CONDITIONS ****************************************************/
/******************************************************************************/
// variable de type booléen créée

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

while (counter < 5) {
    // code;
    counter = counter + 1;
}

for (int counter = 0; counter < 5; counter = counter + 1) {
    // code;
}

do {
    // code;
    i++;
} while (i < 5);

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

/******************************************************************************/
/************** STRING ********************************************************/
/******************************************************************************/

varText.length(); // obtenir longueur de la chaine de caractères
varText.contains("hello"); // bool, test si mot contenu dans variable

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

assertEquals();
toString();
replace();
split();

System.out.println("Hello World !");
// out : permet d'accéder à sortie standard
// println : afficher une ligne de texte