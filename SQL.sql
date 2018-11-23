--------------------------------------------------------------------------------
---------- DEFINITION ----------------------------------------------------------
--------------------------------------------------------------------------------

-- SQL : Structured Query Language (langage de requête structurée)
-- langage informatique normalisé pour exploiter BD relationnelles
-- pour opérations d'algèbre relationnelle (intersection,sélection,jointure...)
-- langage interprété par un SGBD (système gestion base de données)

.: SYNTAXE :.

instructions se terminent par ;

--------------------------------------------------------------------------------
---------- LES TYPES -----------------------------------------------------------
--------------------------------------------------------------------------------

/* TYPE NUMERIQUE

TINYINT   :   1 octet   -128 minimum          127 maximum
SMALLINT  :   2         -32768                32767
MEDIUMINT :   3         -8388608              8388607
INT       :   4         -2147483648           2147483647
BIGINT    :   8         -9223372036854775808  9223372036854775807

UNSIGNED
-- attibut pour avoir toujours une valeur positive (min = 0)

ZEROFILL

INT(x)
-- attribut pour  préciser nombre chiffres minimum à l'affichage d'une colonne
-- de type INT(ou dérivés) (mais peut toujours y stocker même nombre)

*/

VARCHAR(100)
-- Type de l'information : indique pas plus de 100 caractères
-- 120-150 pour pays
-- mettre taille la plus précise possible pour un accès rapide
INT
TINYINT (1 octet, -> 127 caractères)
SMALL INT
BOOL
DATE
TIME
DATETIME
BLOB

TEXT : contenu d'un article... (que pour grandes portions, gourmand en performance)

nom de la table, des champs en minuscule
utiliser underscore lorsque plusieurs mots
indique systématiquement un id (unique)

.: INFORMATIONS :.

Commence par vérifier que la BD n'existe pas déjà :
CREATE DATABASE IF NOT EXISTS `classicmodels`

Montre qu'on veut utiliser cette BD :
USE `classicmodels`;

Fait supprimer une table si elle existe déjà :
DROP TABLE IF EXISTS `customers`;


*/

DATEDIFF(date1, date2)

NOT NULL
-- pour indiquer que l'information ne peut pas être null, doit être identifiée

DEFAULT NULL
-- indique par défaut mise à null (si pas remplie, pas embêté)

SELECT nom_du_champ FROM nom_du_tableau
-- requête SQL va sélectionner (SELECT) le champ “nom_du_champ” provenant (FROM) du tableau appelé “nom_du_tableau”

PRIMARY KEY (`customerNumber`)
-- clé de référence pour identifier le client distinctement (est unique)

KEY `salesRepEmployeeNumber` (`salesRepEmployeeNumber`)
-- permet de faire référence dans une autre table

CONSTRAINT `customers_ibfk_1` FOREIGN KEY (`salesRepEmployeeNumber`) REFERENCES `employees` (`employeeNumber`)
-- pour faire jointure : pour établir des relations (références)


--------------------------------------------------------------------------------
---------- CREER ---------------------------------------------------------------
--------------------------------------------------------------------------------

CREATE TABLE utilisateur
(
  id INT PRIMARY KEY NOT NULL,
  nom VARCHAR(100),
  prenom VARCHAR(100),
  email VARCHAR(80),
  date_naissance DATE,
  pays VARCHAR(120),
  ville VARCHAR(255),
  code_postal VARCHAR(5),
  nombre_achat INT
)

--------------------------------------------------------------------------------
---------- MODIFIER ------------------------------------------------------------
--------------------------------------------------------------------------------

-- Quand une table est créée, peut la modifier.
-- A la fin, puis exécute l'entièreté du script pour ne pas exploser la base de données.

ALTER TABLE utilisateur
ADD adresse_rue VARCHAR(255) -- ajout du champs adresse_rue sur la table
DROP nombre_achat -- suppression du champs
MODIFY code_postal INT -- modification du type du champs
CHANGE code_postal cp INT -- modification du nom du champs en 'cp'

DROP TABLE utilisateur -- supprimer la table (très dangereux)

AUTOINCREMENT

LMD : langage de manipulation des données
INSERT INTO client (prenom, nom, ville, age) -- insertion 4 enregistrements dans table 'client'
VALUES -- inquie que les valeurs suivantes sont données
('Rébecca', 'Armand', 'Saint-Didier-des-Bois', 24),
('Rébecca', 'Armand', 'Saint-Didier-des-Bois', 24);

UPDATE client -- mise à jour de plusieurs champs d'une table
SET rue = '49 Rue Ameline',
  ville = 'Saint-Eustache-la-Forêt',
  code_postal = '76210'
WHERE id = 2 -- sur l'enregistrement qui a l'identifiant 2

UPDATE produit -- mise à jour toutes les lignes de la table 'produit'
SET prix = 120

DELETE FROM utilisateur -- suppression d'une ligne dans la table
WHERE id = 1; -- optionnel, spécifie ligne à supprimer

DELETE FROM utilisateur
WHERE date_inscription > '2012-04-10';

DELETE FROM utilisateur; -- suppression de tous les utilisateurs de la table

--------------------------------------------------------------------------------
---------- SELECTIONNER --------------------------------------------------------
--------------------------------------------------------------------------------

SELECT ville FROM client

SELECT prenom, nom FROM client

SELECT * FROM client -- ensemble des possibilités (toutes les colonnes)

SELECT ville FROM client WHERE id = 220

SELECT prenom, nom FROM client WHERE ville = 'Marseille'

SELECT * FROM client WHERE age < 30

/* La liste des bureaux (adresse et ville) triés par pays décroissant puis par état */
SELECT addressLine1, addressLine2, city, country, state FROM offices ORDER BY country DESC, state

WHERE productScale IN ('1:10', '1:18')	/* équivalent à WHERE productScale = '1:10' OR productScale = '1:18' */

WHERE buyPrice BETWEEN 60 AND 90	/* équivalent à WHERE buyPrice >= 60 AND buyPrice <= 90 */

WHERE productName LIKE '196%'
-- qui ont un nom qui comme par 196 (%196 pour 196 à la fin)

-- Les possibilités
SELECT *
FROM table
WHERE condition
GROUP BY expression
HAVING condition
{ UNION | INTERSECT | EXCEPT }
ORDER BY expression
LIMIT count
OFFSET start

(MSRP - buyPrice) AS margin
-- détermine un alias temporaire pour ce calcul


GROUP BY
-- permet de filtrer les données sur une ou plusieurs colonnes

SELECT productVendor, AVG(MSRP) AS averagePrice
FROM products
GROUP BY productVendor
ORDER BY averagePrice DESC

/* Le crédit des clients qui ont payé plus de 20000$ durant l'année 2004 trié par crédit décroissant */
SELECT customerNumber, SUM(amount) AS totalCredit
FROM payments
WHERE paymentDate BETWEEN '2004-01-01' AND '2004-12-31'
GROUP BY customerNumber
HAVING totalCredit > 20000
ORDER BY totalCredit DESC

--------------------------------------------------------------------------------
---------- FONCTIONS D'AGREGATION ----------------------------------------------
--------------------------------------------------------------------------------

-- AVG()    calculer la moyenne sur un ensemble d’enregistrement
-- COUNT()  compter nombre enregistrements table ou colonne distincte
-- MAX()    récupérer la valeur maximum d’une colonne sur un ensemble de ligne. Cela s’applique à la fois pour des données numériques ou alphanumérique
--MIN()     récupérer la valeur minimum de la même manière que MAX()
--SUM()     calculer la somme sur un ensemble d’enregistrement


Pour obtenir le résultat avec 2 chiffres de décimal il convient de spécifier le nombre de décimal souhaité comme 2ème argument.

SELECT ROUND(nom_colonne, 2)
FROM `table`

INNER JOIN maTableCléPrimaire ON maTable.autreTable
-- joint les deux tables en utilisant clé primaire et étrangère
-- commande INNER JOIN, aussi appelée EQUIJOIN, est un type de jointures très communes pour lier plusieurs tables entre-elles. Cette commande retourne les enregistrements lorsqu’il y a au moins une ligne dans chaque colonne qui correspond à la condition.

SELECT *
FROM table1
INNER JOIN table2 ON table1.id = table2.fk_id
La syntaxe ci-dessus stipule qu’il faut sélectionner les enregistrements des tables table1 et table2 lorsque les données de la colonne “id” de table1 est égal aux données de la colonne fk_id de table2.
-- tables appelées doivent systématiquement avoir un alias


/* La liste des clients français ou américains (nom du client, nom, prénom du contact et pays) et de leur commercial dédié (nom et prénom) triés par nom et prénom du contact */
SELECT customerName, contactLastName, contactFirstName, country, em.lastName, em.firstName --em pour indiquer provient d'une autre table, préfixe également quand une colonne est présente dans deux tables
FROM customers
INNER JOIN employees em ON employees.employeeNumber = customers.salesRepEmployeeNumber
WHERE country IN ('France', 'USA')
ORDER BY contactLastName, contactFirstName


--------------------------------------------------------------------------------
---------- BASE DE DONNEES RELATIONNELLES --------------------------------------
--------------------------------------------------------------------------------

-- info organisée dans tableaux deux dimensions appelés 'relations' ou 'tables'
-- entité : un objet de gestion et ses données (personne, entreprise...)
--- prote des attributs ou propriétés (nom, prenom...)
-- BD = une ou plusieurs relations (font lien entre données)
-- lignes des relations appelées 'nuplets' ou 'enregistrements'
-- colonnes appelées 'attributs' ou 'champs'
-- presque tous les SGBDR utilisent langage SQL pour interroger les BD

-- pour chaque association, définir des cardinalités (définit nombre liaisons possibles entre deux entité) :
--- 1-1 : une personne travaille dans une entreprise
--- 1-N : une entreprise emploie N personnes
--- N-N
--- 0-1

---------- METHODE MERISE ------------------------------------------------------
-- pour conceptualiser et construire la BD
-- ensemble d'étapes à suivre
-- MCD : modèle conceptuel des données (schéma)
-- MPD : modèle physique de données :
-- PRK : primary key (numéro unique pour identifier)
-- FRK : foreign key (pour établir une relation avec une autre table qui a ce numéro en PRK)

--------------------------------------------------------------------------------
---------- LES SGBD ------------------------------------------------------------
--------------------------------------------------------------------------------

-- Système de Gestion de Base de Données (SGBD)
-- logiciel pour stocker informations dans base de données
-- pour lire, écrire, modifier, trier, transformer, imprimer données contenues
-- plus connus : MySQL, PostgreSQL, SQLite, Oracle Database...
-- SGBDR (relationnels), SGBDO (objets), SGBD NoSQL (Not Only SQL), SGBDH (hiérarchiques)


--------------------------------------------------------------------------------
---------- phpMyAdmin ----------------------------------------------------------
--------------------------------------------------------------------------------

-- de base : root pour s'authentifier, rien pour mdp
-- 1. coller code dans onglet SQL
-- 2. appuyer sur CTRL + ENTREE
-- 3. apparait à gauche
-- 4. tester si requête fonctionne dans BD avant de l'utiliser en PHP

-- voir schéma MCD : logo phpMyAdmin > nomBD > en haut à droite 'concepteur'


FONCTIONS : NOW()
