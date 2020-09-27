


tableau = [

     {
          auteur: "auteur1",
          titre: "titre1",
          resume: "resume1",
          image: "image1",
          prix: 28

     },



     {
          auteur: "auteur2",
          titre: "titre2",
          resume: "resume2",
          image: "image2",
          prix: 18
     },



     {
          auteur: "auteur3",
          titre: "titre3",
          resume: "resume3",
          image: "image3",
          prix: 22
     },



     {
          auteur: "auteur4",
          titre: "titre4",
          resume: "resume4",
          image: "image4",
          prix: 12
     }
]

//affiche le tableau:

//console.log(tableau);



//Affiche les trois premiers livres :

/*function afficheRecommandations(){
     console.log  (tableau[0], tableau[1], tableau[2]);
}

afficheRecommandations()*/

//livre aléatoire :

/*function afficheRecommandations() {
     console.log(tableau[Math.floor(Math.random(0.7) * Math.floor(3))]);
}

afficheRecommandations();*/


//prixMax :

/**
 * Afficher les livres dont les prix sont inférieur au paramétre prixMax
 * @param {string} prixMax 
 * @param {boucle} array.forEach(element => {
      });
 *@return {resultat}   
*/

/*function afficheLivre(prixMax) {
     tableau.forEach(function (tableau) {
          if (tableau.prix <= prixMax) {
               console.log(tableau);
          }
     })
}

afficheLivre();*/


//Etape 4 : API

const url = 'https://www.googleapis.com/books/v1/volumes?q=ecmascript';

//créer une requête 
let requete = new XMLHttpRequest();//crée notre objet qui nous permettra de faire nos requêtes
requete.open('GET', url)
requete.responseType = 'json';// on demande une réponse en format json
requete.send();

//crée la fonction qui envoie la requête et qui stocke les résultats
requete.onload = function rechercheLivres(recherche) {
     if (requete.readyState === XMLHttpRequest.DONE) {
          if (requete.status === 200) {
               let reponse = requete.response; //stocke les résultats
               /*console.log(reponse);*/
               let prixEnEuros = reponse.listPrice;
               /*console.log(prixEnEuros);*/
               document.querySelector('.prix').textContent = prixEnEuros;
          }
     }
}

const monbBouton = document.getElementById("GO");
const divResultat = document.getElementById("resultat");

addEventListener("click", function () {
     divResultat.innerHTML = rechercheLivres();
});
rechercheLivres();

afficheRecommandations();
afficheLivres(20);


//requête vers script php

let xhr = new XMLHttpRequest();

xhr.open("GET", "php/sample-api.json", true);
xhr.responseType = 'text';
xhr.send('resultat');

xhr.onreadystatechange = function recupere() {
     /*console.log(this);*/
     if (this.readyState == 4 && this.status == 200) {
          let reponse = xhr.response;

     }
}
recupere();












