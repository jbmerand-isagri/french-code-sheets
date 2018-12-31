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
--- PRK : primary key (numéro unique pour identifier)
--- FRK : foreign key (= PRK autre table en relation)

--------------------------------------------------------------------------------
---------- LES SGBD ------------------------------------------------------------
--------------------------------------------------------------------------------

-- Système de Gestion de Base de Données (SGBD)
-- logiciel pour stocker informations dans base de données
-- pour lire, écrire, modifier, trier, transformer, imprimer données contenues
-- plus connus : MySQL, PostgreSQL, SQLite, Oracle Database...
-- SGBDR (relationnels), SGBDO (objets), SGBD NoSQL (Not Only SQL), SGBDH (hiérarchiques)

--------------------------------------------------------------------------------
---------- CREER ---------------------------------------------------------------
--------------------------------------------------------------------------------

-- créer des tables
CREATE TABLE `utilisateur`
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

CREATE DATABASE IF NOT EXISTS `classicmodels`

-- insérer des entrées
INSERT INTO client (prenom, nom, ville, age) -- insertion 4 enregistrements
VALUES
('Rébecca', 'Armand', 'Saint-Didier-des-Bois', 24),
('Rébecca', 'Armand', 'Saint-Didier-des-Bois', 24);

--------------------------------------------------------------------------------
---------- SUPPRIMER -----------------------------------------------------------
--------------------------------------------------------------------------------

DROP TABLE utilisateur -- supprimer la table
DROP TABLE IF EXISTS `customers`; -- fait supprimer table si existe déjà

DELETE FROM utilisateur -- suppression d'une ligne dans la table
WHERE id = 1; -- optionnel, spécifie ligne à supprimer

DELETE FROM utilisateur
WHERE date_inscription > '2012-04-10';

DELETE FROM utilisateur; -- suppression de tous les utilisateurs de la table

--------------------------------------------------------------------------------
---------- MODIFIER ------------------------------------------------------------
--------------------------------------------------------------------------------

-- quand une table est créée, peut la modifier à la fin, puis exécute
-- l'entièreté du script pour ne pas exploser la bdd

ALTER TABLE utilisateur
ADD adresse_rue VARCHAR(255) -- ajout du champs adresse_rue sur la table
DROP nombre_achat -- suppression du champs
MODIFY code_postal INT -- modification du type du champs
CHANGE code_postal cp INT -- modification du nom du champs en 'cp'

UPDATE client -- mise à jour de plusieurs champs d'une table
SET rue = '49 Rue Ameline',
  ville = 'Saint-Eustache-la-Forêt',
  code_postal = '76210'
WHERE id = 2 -- sur l'enregistrement qui a l'identifiant 2

UPDATE produit -- mise à jour toutes les lignes de la table 'produit'
SET prix = 120

(MSRP - buyPrice) AS margin
-- détermine un alias temporaire pour ce calcul

--------------------------------------------------------------------------------
---------- SELECTIONNER --------------------------------------------------------
--------------------------------------------------------------------------------

-- les possibilités
SELECT *
FROM table
WHERE condition
GROUP BY expression -- permet filtrer les données sur une ou plusieurs colonnes
HAVING condition -- agit sur les données une fois ont été regroupées
{ UNION | INTERSECT | EXCEPT }
ORDER BY expression
LIMIT count -- affiche le nombre d'entrées
LIMIT x, y -- affiche de la xième à la yième entrée
OFFSET start

-- exemples

SELECT prenom, nom FROM client

SELECT * FROM client -- ensemble des possibilités (toutes les colonnes)

SELECT prenom, nom FROM client WHERE ville = 'Marseille'

SELECT * FROM client WHERE age < 30

SELECT addressLine1, addressLine2, city, country, state FROM offices
ORDER BY country DESC, state
-- liste bureaux (adresse et ville) triés par pays décroissant puis par état

WHERE productScale IN ('1:10', '1:18')
-- équivalent à WHERE productScale = '1:10' OR productScale = '1:18'

WHERE buyPrice BETWEEN 60 AND 90
-- équivalent à WHERE buyPrice >= 60 AND buyPrice <= 90

WHERE productName LIKE '196%'
-- qui ont un nom qui commence par 196 (%196 pour 196 à la fin)

-- résultat avec 2 chiffres de décimal (2ème argument)
SELECT ROUND(nom_colonne, 2) FROM `table`

SELECT productVendor, AVG(MSRP) AS averagePrice
FROM products
GROUP BY productVendor
ORDER BY averagePrice DESC

SELECT customerNumber, SUM(amount) AS totalCredit
FROM payments
WHERE paymentDate BETWEEN '2004-01-01' AND '2004-12-31'
GROUP BY customerNumber
HAVING totalCredit > 20000
ORDER BY totalCredit DESC

--------------------------------------------------------------------------------
---------- JOINTURES -----------------------------------------------------------
--------------------------------------------------------------------------------

--------------- internes -------------------------------------------------------
-- sélectionnent données qui ont correspondance entre les 2 tables
--- WHERE (ancienne syntaxe)
--- JOIN (nouvelle syntaxe)

-- commande INNER JOIN (= EQUIJOIN) = type de jointure très commun pour lier
-- plusieurs tables entre-elles. Retourne les enregistrements lorsque au moins
-- une ligne dans chaque colonne qui correspond à la condition.

INNER JOIN maTableCléPrimaire ON maTable.autreTable
-- joint les deux tables en utilisant clé primaire et étrangère

SELECT *
FROM table1
INNER JOIN table2 ON table1.id = table2.fk_id
-- sélectionne enregistrements des tables table1 et table2 lorsque données de
-- colonne “id” de table1 est égal aux données de la colonne fk_id de table2
-- tables appelées doivent systématiquement avoir un alias

-- exemple
SELECT customerName, contactLastName, contactFirstName, country, em.lastName
-- préfixe em pour indiquer provient de table employees
-- préfixe également quand une colonne est présente dans deux tables
FROM customers
INNER JOIN employees em ON employees.employeeNumber = customers.salesRepEmployeeNumber
WHERE country IN ('France', 'USA')
ORDER BY contactLastName, contactFirstName
-- sélectionne clients français ou américains (noms, infos sur contact et pays)
-- et nom de leur commercial dédié

--------------- externes -------------------------------------------------------
-- sélectionnent toutes données, même si certaines pas correspondance
--- LEFT JOIN pour récupérer toute la table "de gauche"
--- RIGHT JOIN pour récupérer toutes données table "de droite"

SELECT j.nom nom_jeu, p.prenom prenom_proprietaire
FROM proprietaires p
LEFT JOIN jeux_video j
ON j.ID_proprietaire = p.ID
-- proprietaires = table de gauche
-- jeux_video = table de droite
-- récupère tout contenu table de gauche (tous les propriétaires), même si n'ont
-- pas d'équivalence dans la table jeux_video

SELECT j.nom nom_jeu, p.prenom prenom_proprietaire
FROM proprietaires p
RIGHT JOIN jeux_video j
ON j.ID_proprietaire = p.ID
-- récupère tous les jeux, même si n'ont pas de propriétaires associés

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

--------------------------------------------------------------------------------
---------- DIVERS --------------------------------------------------------------
--------------------------------------------------------------------------------

DATEDIFF(date1, date2)

AUTOINCREMENT

USE `classicmodels`; -- montre veut utiliser cette bdd

NOT NULL
-- pour indiquer que l'information ne peut pas être null, doit être identifiée

DEFAULT NULL
-- indique par défaut mise à null (si pas remplie, pas embêté)

SELECT nom_du_champ FROM nom_du_tableau
-- requête SQL va sélectionner (SELECT) le champ “nom_du_champ” provenant (FROM)
-- du tableau appelé “nom_du_tableau”

PRIMARY KEY (`customerNumber`)
-- clé de référence pour identifier le client distinctement (est unique)

KEY `salesRepEmployeeNumber` (`salesRepEmployeeNumber`)
-- permet de faire référence dans une autre table

CONSTRAINT `customers_ibfk_1` FOREIGN KEY (`salesRepEmployeeNumber`) REFERENCES `employees` (`employeeNumber`)
-- pour faire jointure : pour établir des relations (références)
