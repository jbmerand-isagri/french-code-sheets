# VOCABULAIRE

**Abstraction** : permet description générique d'un ensemble, se focaliser sur l'essentiel et de cacher les détails. Processus d'abstraction consiste à identifier pour un ensemble d'éléments :

- des caractéristiques communes à tous les éléments
- des mécanismes communs à tous les éléments

**Algorithme** : manière de résoudre un problème

**Algorithme naïf** : algorithme simple, très proche de la pensée quotidienne

**API, interface de programmation applicative** : "application programming interface", ensemble normalisé de classes, méthodes, fonctions qui sert de façade par laquelle un logiciel offre des services à d'autres logiciels. Elle est offerte par une bibliothèque logicielle ou un service web, le plus souvent accompagnée d'une description qui spécifie comment des programmes consommateurs peuvent se servir de ses fonctionnalités. Les détails de sa mise en oeuvre sont cachés. Exemples d'API : DOM, Canvas, de sérialisation XML, de gestion de courriels, de connexion (annuaires, bases de données)...

**Arbre binaire** : structure, très utile pour trier l’information, analogue à une liste chaînée sauf que chaque cellule possède jusqu'à deux suivants. Chaque cellule mère a 0, 1 ou 2 cellules enfant qui elles-mêmes sont liées à d’autres cellules. Les cellules sont appelées des nœuds ou des sommets. Un nœud n’ayant pas de fils s’appelle une feuille.

**Boucle** : permet de répéter des instructions un certain nombre de fois. La boucle s’arrête quand le programme a rencontré la condition d’arrêt.

- boucles « tant que » : répétition tant que les conditions sont remplies
- boucles « jusqu’à » : répétition jusqu’à ce que les conditions soient remplies

**Classe** `POO` : résultat des processus d'encapsulation et d'abstraction. C'est une catégorie d'objets. Elle définit un type.

**Classe abstraite** `POO` : ne peut être instanciée. La classe fille doit définir les caractéristiques abstraites (retardées) pour être instanciable.

**Complexité algorithmique** : sert à comparer algorithmes entre eux. On utilise la notation de Landau 'O(n)'. Complexité temporelle, spatiale (stockage), exponentielle, linéaire, en temps constant

**Composition** : symbolise l'existance d'une agrégation forte, entre deux entités (classes). Toute classe agrégée est détruite quand la classe composite est détruite. Elle ne peut l'être que par une seule classe composite.

```C++
class Voiture {
  private:
    // Tout objet de type Voiture est responsable de l'attribut 'carbu', lequel est un objet de type Carburateur.
    // Quand un objet de type Voiture est créé, son attribut 'carbu' est créé automatiquement.
    // Quand un objet de type Voiture est détruit, son attribut 'carbu' est également détruit.
    Carburateur carbu;
```

**Constante** : définit une valeur qui ne changera pas

**Constructeur** `POO` : méthode appelée implicitement lors de l'instanciation de l'objet.

**CRUD** : opérations courantes (Create, Read, Update, Delete)

**Encapsulation** : principe de regrouper des données brutes (souvent masquées) avec un ensemble de routines permettant de les lire et de les manipuler dans un même objet informatique. L'ensemble est comme une boite noire avec un comportement et des propriétés spécifiées. Pilier de la `POO` (chaque classe définit méthodes et propriétés pour interagir avec les données membres = interface d'utilisation). Masque et protège une partie du code à l'utilisateur (le codeur).

**Files** **(Queue)** : traitement de données FIFO First In, First Out (premier arrivé, premier sorti)

**Fonction** : ensemble d’instructions représenté par un nom

**Graphe** : ensemble de cellules reliées les unes aux autres non plus par un lien d'ascendance, comme dans le cas d'un arbre, mais par une relation. Visuellement, il s'agit d'un ensemble de sommets reliés par des arcs.

**Héritage** `POO` : établit une relation de généralisation-spécialisation qui permet d'hériter dans la déclaration d'une nouvelle classe (classe dérivée/fille/enfant/sous-classe) des caractéristiques (propriétés ou méthodes) de la déclaration d'une autre classe (classe de base/mère/parent/super-classe). Le type de la classe parent est hérité. Sous-classe hérite de l'ensemble des attributs et des méthodes de la classe parent (`java` sauf pour les constructeurs). Crée réseau de dépendances qui définit une hiérarchie de classes.

- **Enrichissement** : attributs/méthodes supplémentaires définies dans la sous-classe
- **Spécialisation** : méthodes héritées redéfinies dans la sous-classe

**Index** : position d’un élément dans une liste

**Instruction** : tâche effectuée par un ordinateur (opération basique, itération, condition…)

**Interface** `POO` : niveau de perception externe ("visible") de l'objet. Ensemble de signatures de méthodes publiques d'un objet. Méthodes accessibles depuis l'extérieur d'une classe, par lesquelles peut modifier un objet, communiquer avec lui.

**Layout** : modèle de page

**Liste chainée** **(Syngly-linked list)** : ensemble de valeurs enregistrées dans des endroits différents de la mémoire. Chaque élément s’appelle une cellule et vient avec un pointeur (une adresse de l’élément).

**Piles** : traitement de données LIFO Last In, First Out (dernier arrivé, premier sorti)

**Polymorphisme** : concept consistant à fournir une interface unique à des entités pouvant avoir différents types. Plusieurs sortes fondamentales :

- ad hoc `surcharge (POO)`: interface unique implémentée par plusieurs routines,  potentiellement hétérogènes, ayant même identifiant
- paramétré `programmation générique (POO)` `polymorphisme (PF)` : interface unique implémentée par une seule routine utilisant un type générique pour au moins un de ses paramètres, que la routine soit membre d'une classe ou non
- p. par sous-typage `p. par héritage (POO)` `p. d'inclusion (PF)` : interface unique implémentée par une routine membre ayant le même identifiant dans chaque classe faisant partie de la même hiérarchie d'héritage

**Récursivité** : fonction qui fait référence à elle-même. Doit contenir une instruction conditionnelle d’arrêt et un appel récursif (appelle d’elle-même).

**Récursivité croisée** : deux fonctions s’appellent l’une-l’autre

**Routine** : entité informatique qui encapsule une portion de code effectuant un traitement spécifique bien identifié (tâche, calcul...) relativement indépendant du reste du programme. On la range souvent dans une bibliothèque pour la rendre disponible tout en préservant l'intégrité de son implémentation. Deux formes principales :

- la procédure : ne retourne aucune valeur, réalise une opération bien déterminée et dont l'emploi joue le rôle d'une instruction ad-hoc
- la fonction : retourne une et une seule valeur

**SEA** : "search engine advertising", moyens payants (liens sponsorisés, publicités...) pour améliorer le positionnement d'un site

**SEO** : "search engine optimization", ensemble de techniques visant à optimiser la visibilité d'une page web dans les résultats de recherche (les SERP). Ces techniques cherchent à améliorer la compréhension de la thématique et du contenu d'une ou de l'ensemble des pages d'un site web par les robots d'indexation et à augmenter le trafic naturel (organique) du site, ce qui résulte à une meilleure visibilité.

- leviers internes :
  - accessibilité des contenus
  - codage sémantique
  - mise en place d'une arborescence optimisée
  - maillage interne des pages
  - contenu jugé "frais"
- leviers externes :
  - nombre de liens entrants
  - qualité des liens entrants
  - signaux apportés par les réseaux sociaux

**Signature de type** : définit les types de données acceptables pour une fonction ou une méthode. Inclut au moins nom de la fonction et nombre de paramètres. (Dans certains langages, spécifie également type de la valeur de retour et les types de ses paramètres.)

**Structure de données** : structure qui permet de stocker plusieurs données de même type ou de types différents dans un seul conteneur (la structure). Une structure est composée de plusieurs champs, chaque champ correspondant à une donnée. Ex : objets, tableaux.

**Structure de contrôle** : instruction particulière d'un langage de programmation impératif pouvant dévier le flot de contrôle du programme la contenant lorsqu'elle est exécutée

- les **alternatives** : if, if-else, switch... Effectuent un test logique sur une condition et permettent un choix entre divers blocs d'instructions suivant le résultat de ce test
- les **boucles** : while, do-while, for... Exécutent une portion de code plusieurs fois de suite tant qu'une condition de continuation est remplie ou qu'une condition de sortie n'est pas remplie
  - b. à pré-condition : condition vérifiée avant première boucle ("tant que")
  - b. à post-condition : condition vérifiée après première boucle ("jusqu'à ce que")
  - b. à condition d'arrêt : condition vérifiée au milieu boucle (break, exit, continue...)
  - b. itérative : compteur utilisé pour compter nombre d'itérations (for)
  - b. de parcours : boucle exécutée sur chacun éléments d'une liste (itérateur foreach)
- les appels de fonction
- les constructions de gestion d'exceptions : try-catch...

**Surcharge** : surdéfinition, polymorphisme ad-hoc, overloading. Permet de choisir entre différentes versions d'une même fonction ou méthode selon le nombre et le type des arguments fournis. Ne pas confondre avec polymorphisme d'inclusion et la redéfinition de méthiode (overriding).

- Statique : choix de version en fonction nombre d'arguments et leur type statique déclaré à la compilation
- Dynamique (dispatch multiple) : choix de version en fonction du type dynamique des arguments constaté à l'exécution

**Switch** : commence par évaluer l'expression qui lui est donnée puis il va aiguiller notre programme vers le cas correspondant

**Table de Hachage** : structure de données qui associe une valeur à une clé (et non pas un indice). La clé peut être un mot ou un chiffre.

**Tableau** : structure qui permet de mémoriser plusieurs données de type semblable ou différent

**Tri à bulles** : algorithme qui avance dans une liste d'éléments. Il compare les données deux à deux et les échange si la première valeur est plus élevée que la seconde.

**Variable** : représentation d’une idée, d’un objet, par un nom, un symbole, qui nous permet d’y faire référence plus tard. Permet de stocker des infos (3 paramètres : nom, type, valeur / contenu)

**WYSIWYG** : "What You See Is What You Get", désigne interface graphique utilisateur qui permet à l'utilisateur de voir son document tel qu'il sera publié. Donne accès intuitif aux fonctionnalités et permet ainsi de mettre en forme le document sans avoir à utiliser des commandes complexes.
