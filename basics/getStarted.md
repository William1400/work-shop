# INTRODUCTION

Commençons par créer une première application Web simple avec TypeScript.


## Installation de TypeScript

Il y a deux façons principales d'obtenir le TypeScript disponible pour votre projet :

- Via npm (le gestionnaire de paquets Node.js)
- En installant les plugins Visual Studio de TypeScript

Visual Studio 2017 et Visual Studio 2015 Update 3 incluent la prise en charge du langage TypeScript par défaut mais n'incluent pas le compilateur TypeScript, tsc. Si vous n'avez pas installé TypeScript avec Visual Studio, vous pouvez toujours le télécharger.

Pour les utilisateurs de npm :

``npm install -g typescript``


## Création de votre premier fichier TypeScript

Dans votre éditeur, tapez le code JavaScript suivant dans greeter.ts :

```
function greeter(person) {
  console.log("Hello, " + person);
}
 
let user = "John Doe";
 
greeter(user);
```

## Compilation de votre code

Nous avons utilisé une extension .ts, mais ce code n'est que du JavaScript. Vous auriez pu le copier/coller directement à partir d'une application JavaScript existante.

En ligne de commande, lancez le compilateur TypeScript :

``tsc greeter.ts``

Le résultat sera un fichier greeter.js qui contient le même JavaScript que celui que vous avez entré. Nous sommes prêts à utiliser TypeScript dans notre application JavaScript !

Nous pouvons maintenant commencer à tirer parti de certains des nouveaux outils offerts par TypeScript. Ajoutez une annotation de type : string à l'argument de la fonction 'person' comme indiqué ici :

```
function greeter(person: <span style="color=red">string </span>) {
  return "Hello, " + person;
}
 
let user = "Jane User";
```




