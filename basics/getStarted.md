# INTRODUCTION
## PRÉSENTATION DE TYPESCRIPT
TypeScript est un langage  à typage statique conçu par Anders Heljsberg (également concepteur du langage C#). Son but est de rendre plus fiable et facile l'écriture du code en JavaScript. Le code en TS sera compilé en JS. (comme SCSS)

## Quels sont les avantages de TS?
- Limites les erreurs
- Meilleure autocomplétion et documentation
- Cible la version de compilation du code TS en JS (ES5,ES6, etc)

## Quels sont les désavantages de TS?
- Outils supplémentaire
- L'écosystème JavaScript
- Perte en flexibilité (mais gagne en prévisibilité)
- Code moins lisible
  
## A QUEL MOMENT UTILISER TYPESCRIPT ?
TS permet d'apporter une rigueur dans votre code. Sa prévisibilité permet d'éviter les bugs. Son ciblage permet de nous passer d'outil comme "Babel" par exemple. C'est pourquoi nous vous conseillons d'utiliser TS pour de gros projets.

## TYPAGE
Le principal apport du langage TypeScript est la possibilité d'associer un type à une donnée.

```
let result: number;
let message: string;
let response: boolean;
let obj: any;
```
- **number** : pour les nombres entiers ou flottants.
- **string** : pour les chaînes de caractères.
- **boolean** : pour les booléens donc true ou false.
- **any** : type par défaut attribuer par TS à une variable globale s'il ne reconnait pas son type lors de sa déclaration.

Le typage peut aussi se faire implicitement:
``let message = "Hello World"  // message sera un string``


# HOW TO USE IT

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
function greeter(person: string) {
  console.log("Hello, " + person);
}
 
let user = "John Doe";

greeter(user);
```

## Annotations de type

Les annotations de type dans TypeScript sont des moyens légers d'enregistrer le contrat prévu de la fonction ou de la variable. Dans ce cas, nous souhaitons que la fonction greeter soit appelée avec un seul paramètre de type string. Nous pouvons essayer de modifier l'appel de la fonction greeter pour passer un tableau à la place :



## Connexion à l'api REST API 


