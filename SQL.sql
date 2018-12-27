--------------------------------------------------------------------------------
---------- DEFINITION ----------------------------------------------------------
--------------------------------------------------------------------------------

-- SQL : Structured Query Language (langage de requête structurée)
-- langage informatique normalisé pour exploiter bdd relationnelles
-- pour opérations d'algèbre relationnelle (intersection,sélection,jointure...)
-- langage interprété par un SGBD (système gestion base de données)

-- bdd contient des tables (tableaux) où colonnes = champs, lignes = entrées

-- INFOS :

-- instructions se terminent par ;
-- nom de la table, des champs en minuscule
-- utiliser underscore lorsque plusieurs mots
-- indique systématiquement un id (unique)
-- éviter utiliser mots clés réservés


--------------------------------------------------------------------------------
---------- LES PRINCIPAUX TYPES ------------------------------------------------
--------------------------------------------------------------------------------

-- TYPE NUMERIC

TINYINT   :   1 octet   -128 minimum          127 maximum
SMALLINT  :   2         -32768                32767
MEDIUMINT :   3         -8388608              8388607
INT       :   4         -2147483648           2147483647
BIGINT    :   8         -9223372036854775808  9223372036854775807

INT : nombre entier

-- TYPE STRING

VARCHAR : texte court (doit spécifier entre 1 et 255 caractères)

TEXT : très long texte possible

-- TYPE TIME ET DATE

DATE      -- stocke date format AAAA-MM-JJ (Année-Mois-Jour)
TIME      -- stocke moment format HH:MM:SS (Heures:Minutes:Secondes)
DATETIME  --  stocke date et moment journée format AAAA-MM-JJ HH:MM:SS
TIMESTAMP -- stocke nombre secondes passées depuis 1 janvier 1970 à 00h00min00s
YEAR      -- stocke année, soit format AA, soit format AAAA

-- TYPE SPATIAL


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

-- pour chaque association, définir des cardinalités
-- (définit nombre liaisons possibles entre deux entités) :
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
-- FRK : foreign key (pour établir relation avec autre table qui a ce numéro en PRK)


--------------------------------------------------------------------------------
---------- LES SGBD ------------------------------------------------------------
--------------------------------------------------------------------------------

-- Système de Gestion de Base de Données (SGBD)
-- logiciel pour stocker informations dans base de données
-- pour lire, écrire, modifier, trier, transformer, imprimer données contenues
-- plus connus : MySQL, PostgreSQL, SQLite, Oracle Database...
-- SGBDR (relationnels), SGBDO (objets), SGBD NoSQL (Not Only SQL), SGBDH (hiérarchiques)



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

/* liste bureaux (adresse et ville) triés par pays décroissant puis par état */
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
HAVING condition -- agit sur les données une fois ont été regroupées
{ UNION | INTERSECT | EXCEPT }
ORDER BY expression
LIMIT count -- affiche le nombre d'entrées
LIMIT x, y -- affiche de la xième à la yième entrée
OFFSET start

(MSRP - buyPrice) AS margin
-- détermine un alias temporaire pour ce calcul


-- résultat avec 2 chiffres de décimal (2ème argument)
SELECT ROUND(nom_colonne, 2)
FROM `table`

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

-- font des opérations sur plusieurs entrées pour retourner une seule valeur

-- SYNTAXE
SELECT AVG(prix) AS prix_moyen FROM jeux_video WHERE possesseur='Patrick'

AVG()    -- calculer moyenne sur un ensemble d’enregistrements
COUNT()  -- compter nombre enregistrements table ou colonne distincte
MAX()    -- récupérer valeur maximum colonne sur un ensemble de lignes
MIN()    -- récupérer valeur minimum même manière que MAX()
SUM()    -- calculer somme sur un ensemble d’enregistrements

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
---------- FONCTIONS SCALAIRES -------------------------------------------------
--------------------------------------------------------------------------------

-- agissent sur chaque entrée récupérée

-- SYNTAXE
SELECT UPPER(nom) AS nom_maj FROM table

UPPER()   -- convertir en majuscules
LOWER()   -- convertir en minuscules
LENGTH()  -- compter le nombre de caractères
ROUND()   -- arrondir un nombre décimal


--------------------------------------------------------------------------------
---------- FONCTIONS GESTION DATES ---------------------------------------------
--------------------------------------------------------------------------------

NOW()                   -- obtenir date et heure actuelles
CURDATE() CURTIME()     -- date (AAAA-MM-JJ) et heure (HH:MM:SS)
DAY() MONTH() YEAR()    -- extraire jour, mois ou année (ex : DAY(date))
HOUR() MINUTE() SECOND) -- extraire heures, minutes, secondes
DATE_FORMAT(date, '%d/%m/%Y %Hh%imin%ss')  -- formater une date
DATE_ADD(date, INTERVAL 15 DAY) DATE_SUB() -- ajouter, soustraire des dates
