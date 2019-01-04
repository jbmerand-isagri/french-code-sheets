## Commandes unix principales

**Circuler, copier, déplacer dans les dossiers**

`cd chemin` `cd ..`  // se placer dans le répertoire demandé, parent

`pwd`  // indiquer dossier actuel

`cp fichierACopier nouveauNom`  // copier dans même répertoire
`cp fichierACopier chemin/`  // copier dans autre répertoire
`cp -R`  // copier dossier et tout son contenu
`cp *.jpg mondossier/`  // copier tous jpg vers mondossier
`cp so* mondossier/`  // copier tous fichiers commençant par so

`mv nomDuFichier mondossier/`  // déplacer un fichier

**CRUD fichiers et dossiers**

`touch`  // créer fichier

`mkdir`  // créer dossier

`ls` `ls nomDossier` 
`ls -a` //  tout afficher 
​	`-l` liste détaillée 
​	`-lh` liste détaillée lisible
​	`-lt` par ordre de modification

`cat` `cat -n` afficher contenu fichier, avec numéros de ligne

`less` `head` `tail` // afficher contenu fichier : progressivement, premières lignes, dernières lignes

`mv nomAncien nouveauNom`  // renommer un fichier
`mv nomAncien mondossier/nouveauNom`  // faire les deux

`rm fichier1 fichier2`  // supprimer un ou plusieurs 
​	`-i`	 // demander confirmation pour chacun
​	`-f`	 // forcer suppression
​	`-v`	 // verbose (expliciter action)
`rm -r dossier/`	 // supprimer un dossier et son contenu
`rm *`  // supprime tous fichiers et dossiers répertoire actuel

`rmdir`  // supprimer dossier vide

**Divers**

`date` 

`clear`  // effacer contenu affiché du termial

`history`  // rappeler historique des commandes

`sudo`  // passer en superutilisateur

## Commandes git

*Utiliser un outil de versionning pour garder les traces de toutes les modifications. Un commit = une série de modifications. On avance dans le temps en créant une suite de commits, puis en les améliorant = l’historique. Le résultat final : la somme de tous ces commits.*

*Workflow : récupérer les modifications - créer une branche - écrire le code - faire des commits - envoyer sur remote...*

### Récupérer le projet, les modifications

`git clone https://...`  // télécharger un projet
`git checkout master`  // se positionner sur branche master
`git pull`  // récupérer les modifications du serveur

(`git pull origin master`  // récupérer modifications sur branche principale (plus rapide))

### Utiliser des branches pour travailler

*branche : divergence du code principal qui permet de faire des expérimentations, de créer une nouvelle fonctionnalité*

##### Créer une branche, basculer dessus et coder

`git branch` // indique la branche actuelle
`git branch nomBranche` // créer nouvelle branche
`git checkout nomBranche` // se positionner sur la branche

(`git checkout -b`  // créer branche et s'y positionner)

##### Lorsque terminé, charger les fichiers et demander une pull request (github)

`git add .`
`git status`
`git commit -m "mon changement"`
`git push` // la branche apparait sur github, peut faire pull request, puis une fois ok, merge pull request pour fusionner avec master

##### Supprimer ou fusionner une branche

`git branch -d nomDeLaBranche`  // supprimer la branche

`git merge nomDeLaBranche`  // fusionner branche actuelle avec celle indiquée

*si conflit : ouvrir document, voir lignes concernées, modifier, signaler conflit résolu et faire commit sans message (message alors automatique de résolution de conflit)*

### Sauvegarder, envoyer son code

`git status` // statut du répertoire
`git add monFichier.js` // ajouter le fichier à l'index
`git add .` // ajouter tous les fichiers
`git commit -m "mon message"` // créer un commit avec un message
`git push` // envoyer les fichiers (appliquer les modifications)

(`git commit -am "message"`  //  faire commit sur fichiers déjà indexés)

### Maintenir un fork à jour

1. Se placer dans le répertoire du fork, puis : `git remote -v`  // voir le remote configuré pour le repository du fork

2. `git remote add upstream https://github.com/...`  // url du repository original comme pour un git clone

3. `git remote -v`  // doit voir à présent l'url du fork comme `origin` et l'url du repository original comme `upstream`

`git pull upstream master` // synchroniser le fork avec l'upstream repository

### Lire et modifier des commits

`git log`  // afficher historique des commits
`git blame nomDuFichier`  // indiquer qui a modifié quelle ligne
`git show SHADuCommit`  // indiquer modifications exactes du commit
`git checkout SHADuCommit`  // se positionner sur le commit
`git revert SHADuCommit`  // créer nouveau commit qui fait l’inverse
`git commit --amend -m "msg"`  // modifier message du dernier commit
`git reset --hard`  // annuler tous les changements qui ne sont pas encore commités

**Eviter les commits superflus**

`git stash`  // mettre de côté modifications en cours

`git stash pop`  // retrouver modifications laissées de côté (stash vidé)

`git stash appli`  // garder les modifications dans le stash

### Ignorer des fichiers

*Pour raisons de sécurité (pas de variables de configuration pour mdp, clé secrète...) et de clarté.*

Créer le fichier `.gitignore` , l'ajouter à l'index et faire un commit. Dans ce fichier : liste les fichiers que l'on ne souhaite pas versionner, en indiquant chemins complets.

```
1 motsdepasse.text
2 config/application.yml
```

### Divers

`git --version`

`git init`  // faire suivi du répertoire (établir un repository)

`git remote`	  // sauvegarder sur l’ordinateur distant *(ou GitHub, Bitbucket...)*

**S'identifier**
`git config user.name  "userName"`
`git config user.email "userEmail"`

