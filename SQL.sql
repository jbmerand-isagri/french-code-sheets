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

DECIMAL, NUMERIC -- à privilégier
FLOAT, REAL, DOUBLE, SMALLINT, INTEGER

INT : nombre entier

-- TYPE STRING

CHAR
CHARACTER
VARCHAR : texte court (doit spécifier entre 1 et 255 caractères)
NCHAR
NVARCHAR
TEXT : très long texte possible

-- TYPE TIME ET DATE

DATE      -- stocke date format AAAA-MM-JJ (Année-Mois-Jour)
TIME      -- stocke moment format HH:MM:SS (Heures:Minutes:Secondes)
DATETIME  -- stocke date et moment journée format AAAA-MM-JJ HH:MM:SS
TIMESTAMP -- stocke nombre secondes depuis 1/01/1970 00h00min00s
YEAR      -- stocke année, soit format AA, soit format AAAA
INTERVAL

-- TYPE BINAIRE

BIT, NBIT
BLOB -- (exe, zip, ...)
IMAGE


-- TYPE SPATIAL

-- ...

-- TRANSTYPAGE : permet changer type de données d'une colonne pour effectuer
-- comparaison données de types hétérogène

SELECT CHB_ID, CHB_NUMERO, CHB_POSTE_TEL
FROM T_CHAMBRE
WHERE CAST(CHB_POSTE_TEL AS INTEGER) / 10 > CHB_NUMERO
-- fonction CAST(...AS...) permet de convertir et de comparer


--------------------------------------------------------------------------------
---------- OPERATEURS ENSEMBLISTES ---------------------------------------------
--------------------------------------------------------------------------------

-- s'utilisent entre deux clauses SELECT. Tables doit correspondre en qutté
-- colonnes et types

-- UNION :  récupère tout (concaténation de deux tables)
SELECT ... FROM ... WHERE ...
UNION
SELECT ... FROM ... WHERE ...
-- par défaut doublons sont automatiquement éliminés (utiliser UNION ALL sinon)

INTERSECT -- pas dans tous les SGBD -> partie en commun
SELECT ... FROM ... WHERE ... INTERSECT
SELECT ... FROM ... WHERE ...
-- remplaçable par commandes usuelles :
SELECT a,b FROM table1 WHERE EXISTS (SELECT c,d FROM table2 WHERE a=c AND b=d)

EXCEPT -- pas dans tous les SGBD -> lignes dans une table, moins celles d'une autre
SELECT a,b FROM table1 WHERE ...
MINUS
SELECT c,d FROM table2 WHERE ...
-- remplaçable par commandes usuelles :
SELECT a,b FROM table1 WHERE NOT EXISTS (SELECT c,d FROM table2 WHERE a=c AND b=d)

--------------------------------------------------------------------------------
---------- BASE DE DONNEES RELATIONNELLES --------------------------------------
--------------------------------------------------------------------------------

-- info organisée dans tableaux deux dimensions appelés 'relations' ou 'tables'
-- entité : un objet de gestion et ses données (personne, entreprise...)
--- porte des attributs ou propriétés (nom, prenom...)
-- BD = une ou plusieurs relations (font lien entre données)
-- lignes des relations appelées 'nuplets' ou 'enregistrements'
-- colonnes appelées 'attributs'
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
CREATE TABLE table
(colonne1 type1 contraintes,
colonne2 type2 contraintes,
......... .........
, contraintes de table)

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

-- CONTRAINTES

-- de colonne : [NOT] NULL | UNIQUE | PRIMARY KEY | CHECK ( prédicat_de_colonne)
--  | FOREIGN KEY [colonne] REFERENCES table (colonne)

NULL / NOT NULL -- précise si la  colonne est obligatoire.
DEFAULT -- valeur par défaut qui est placée dans la colonne lors des insertions et de certaines opérations particulières, lorsque l'on a pas donné de valeur explicite à la colonne.
PRIMARY KEY -- précise si la colonne est la clef de la table. (nécessite que la colonne soit NOT NULL)
UNIQUE -- les valeurs de la colonne doivent être uniques (pas de doublon).
CHECK -- permet de préciser un prédicat qui acceptera la valeur s'il est vérifié.
FOREIGN KEY -- permet, pour les valeurs de la colonne, de faire référence à des valeurs existantes dans une colonne d'une autre table. Ce mécanisme s'appelle intégrité référentielle.

-- de table : CONSTRAINT nom_contrainte UNIQUE | PRIMARY KEY ( liste_colonne) 
-- | CHECK ( prédicat_de_table) | FOREIGN KEY liste colonne REFERENCES nom_table (liste_colonne)



CREATE DATABASE IF NOT EXISTS `classicmodels`

-- insérer des entrées
INSERT INTO client (prenom, nom, ville, age) -- insertion 4 enregistrements
VALUES
('Rébecca', 'Armand', 'Saint-Didier-des-Bois', 24),
('Rébecca', 'Armand', 'Saint-Didier-des-Bois', 24);
-- ou
INSERT INTO table (col1, .. , coln) -- liste des noms des colonnes pour lesquelles ont donne une valeur
SELECT ...

--------------------------------------------------------------------------------
---------- SUPPRIMER -----------------------------------------------------------
--------------------------------------------------------------------------------

DELETE FROM table
WHERE prédicat -- indique lignes devant être supprimées (facultative, si non présente : toutes les lignes de la table supprimées)

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
ALTER TABLE nom_table

ALTER TABLE table -- ajouter une colonne
ADD (col1 type1, col2 type2,...)

ALTER TABLE table -- modification d'une colonne
MODIFY (col1 type1, col2 type2,...)

ALTER TABLE table -- suppression d'une colonne
DROP COLUMN col

ALTER TABLE EMP -- supprimer une contrainte
DROP CONSTRAINT NOM_UNIQUE

ALTER TABLE EMP -- ajouter contrainte
ADD CONSTRAINT SAL_MIN CHECK...

ALTER TABLE EMP -- modifier contrainte
MODIFY CONSTRAINT SAL_MIN DISABLE

ALTER TABLE utilisateur
ADD adresse_rue VARCHAR(255) -- ajout du champs adresse_rue sur la table
DROP nombre_achat -- suppression du champs
MODIFY code_postal INT -- modification du type du champs
CHANGE code_postal cp INT -- modification du nom du champs en 'cp'

UPDATE table
SET col1 = exp1, col2 = exp2,...
WHERE prédicat
-- ou
UPDATE table
SET (col1, col2,...) = (SELECT...) -- valeurs de col1 et col2 mises à jour dans toutes les lignes satisfaisants le prédicat
WHERE prédicat -- facultative, si absente toutes les lignes sont mises à jour

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
SELECT * -- ou liste de colonnes
FROM table -- ou nom de la vue
WHERE condition -- prédicats (prioritaire sur suite)
GROUP BY expression -- filtrer données sur une/plusieurs colonnes (agrégation) pour faire des opérations
HAVING condition -- agit sur les données une fois ont été regroupées => pour faire des conditions sur le GROUP BY
{ UNION | INTERSECT | EXCEPT }
ORDER BY expression -- ASC ou DESC
LIMIT count -- affiche le nombre d'entrées
LIMIT x, y -- affiche de la xième à la yième entrée
OFFSET start

-- opérateurs

* -- toutes les colonnes
DISTINCT -- élimine les doublons dans la réponse
AS -- sert à donner nom à de nouvelles colonnes créées par la requête
|| -- concaténer des champs de type caractères
+, -, *, / -- opérateurs mathématiques traditionnels

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
---------- FONCTIONS AGREGATION ET STATISTIQUES --------------------------------
--------------------------------------------------------------------------------

-- font des opérations sur plusieurs entrées pour retourner une seule valeur

-- SYNTAXE
SELECT AVG(prix) AS prix_moyen FROM jeux_video WHERE possesseur='Patrick';

AVG()    -- calculer moyenne sur un ensemble d’enregistrements
COUNT()  -- compter nombre enregistrements table ou colonne distincte
MAX()    -- récupérer valeur maximum colonne sur un ensemble de lignes
MIN()    -- récupérer valeur minimum même manière que MAX()
SUM()    -- calculer somme sur un ensemble d’enregistrements

ABS -- valeur absolue
MOD -- modulo
SIGN -- signe
SQRT -- racine carrée
CEIL (SQL Server) -- plus grand entier
FLOOR -- plus petit entier
ROUND -- arrondi
TRUNC (SQL Server convert) -- tronqué
EXP -- exponentielle
POWER -- puissance
LN / LOG / COS / COSH / SIN / SINH / TAN / TANH
PI -- constante pi

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
CURRENT_DATE      -- mysql
DAY() MONTH() YEAR()    -- extraire jour, mois ou année (ex : DAY(date))
HOUR() MINUTE() SECOND() -- extraire heures, minutes, secondes
DATE_FORMAT(date, '%d/%m/%Y %Hh%imin%ss')  -- formater une date
DATE_ADD(date, INTERVAL 15 DAY) DATE_SUB() -- ajouter, soustraire des dates


--------------------------------------------------------------------------------
---------- TRAITEMENT CHAINES DE CARACTERES ------------------------------------
--------------------------------------------------------------------------------

-- SUBSTRING (extraire sous-chaine, renvoie ici les initiales)
SELECT CLI_NOM, CLI_PRENOM, SUBSTRING(CLI_PRENOM,1,1) +
SUBSTRING(CLI_NOM,1,1) AS INITIALES
FROM T_CLIENT
-- ou
SUBSTRING(CLI_PRENOM FROM 1 FOR 1) -- fait la même chose

CONCAT (Mysql, Oracle, PostgreSQL) -- concaténer (utiliser de préférence ||)
INITCAP(Oracle, PostgreSQL) -- initiales en lettres capitales
LPAD(Mysql, Oracle, PostgreSQL) -- complément/troncature à n position à gauche
RPAD(Mysql, Oracle, PostegreSQL -- complément/troncature à n position à droite
LTRIM / RTRIM -- suppression des espaces en tête/queue d'une chaine
REPLACE -- remplacement
SOUNDEX -- code de consonance (phonétique souvent anglaise)
INSTR(Mysql, Oracle) -- position d'une chaine dans une sous chaine
PATINDEX(Sql Server) -- position d'une chaine dans une sous chaine


--------------------------------------------------------------------------------
---------- SOUS-INTERROGATIONS -------------------------------------------------
--------------------------------------------------------------------------------

-- dans le clause WHERE, dans la clause FROM
-- possibilité qu'un prédicat employé dans une clause WHERE comporte un SELECT emboité

WHERE exp *op* (SELECT ...)

-- sous-interrogation peut ramener plusieurs lignes à condition que opérateur
-- de comparaison admette à sa droite ensemble de valeurs
--> comparateurs pour comparer une valeur à un ensemble de valeurs :
IN
-- opérateurs obtenus en ajoutant ANY ou ALL à la suite opérateurs compa classiques
ANY -- comparaison sera vraie si elle est vraie pour au moins un élément de l'ensemble
ALL -- comparaison sera vraie si elle est vraie pour tous les éléments de l'ensemble

-- liste employés gagnant plus que tous employés du département 30 :
SELECT NOME, SAL
FROM EMP
WHERE SAL > ALL (SELECT ALL FROM EMP WHERE DEPT=30)

-- DANS LA CLAUSE FROM
SELECT A.x, A.y, B.z
FROM table A, (SELECT x, z FROM table) B WHERE A.x = B.x

-- part du salaire chaque employé par rapport à masse salariale
SELECT nom, salaire, round(salaire/b.masse*100)
FROM employes, (SELECT sum(salaire) AS masse FROM employes) b;

-- SOUS-REQUETES SYNCHRONISEES
-- = sous-requête qui s'exécute pour chaque ligne de la requête principale et non une fois pour toute
-- suffit faire varier une condition en rappelant dans sous-requête la valeur de la ou les colonnes de la requête principale quoi doit servir de condition
-- 2. Affichez toutes les commandes pour lesquelles les frais de ports dépassent la moyenne des frais de ports pour ce client.
SELECT NO_COMMANDE
FROM commandes c1
WHERE PORT > (SELECT AVG(PORT) FROM commandes c2 WHERE c1.CODE_CLIENT = c2.CODE_CLIENT);


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