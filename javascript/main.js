


tableau = [

     {
          titre: "La peau de chagrin",
       auteur: "Honoré de Balzac" ,
       prix: 18 ,
       image: "https://i0.wp.com/lyber.org/wp-content/uploads/2019/07/ob_8fec4b_adc72fa84a393cd5ff248ce6269aa3971f7f2a.jpg?fit=600%2C317&ssl=1" ,
       resume: " Raphaël de Valentin est un jeune marquis malchanceux, ruiné et solitaire, au bord du suicide. Il doit sa survie à un antiquaire, chez qui il trouve par hasard un talisman, une peau de chagrin censée exaucer le moindre de ses désirs." 

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
          titre: "La peau de chagrin",
          auteur: "Honoré de Balzac" ,
          prix: 12 ,
          image: "https://i0.wp.com/lyber.org/wp-content/uploads/2019/07/ob_8fec4b_adc72fa84a393cd5ff248ce6269aa3971f7f2a.jpg?fit=600%2C317&ssl=1" ,
          resume: " Raphaël de Valentin est un jeune marquis malchanceux, ruiné et solitaire, au bord du suicide. Il doit sa survie à un antiquaire, chez qui il trouve par hasard un talisman, une peau de chagrin censée exaucer le moindre de ses désirs." 
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

function afficheRecommandations() {
     tableau.sort(function (a, b) {return 0.5 - Math.random() })

     for (let i = 0;i < tableau.length; i++){
          let livre = tableau[i]

          const auteurHTML = document.querySelectorAll('.auteur')[i];
          const titreHTML = document.querySelectorAll('.titre')[i];
          const imageHTML = document.querySelectorAll('.image')[i];
          const prixHTML = document.querySelectorAll('.prix')[i];

          auteurHTML.innerText = livre.auteur;
          titreHTML.innerText = livre.titre;
          imageHTML.src = livre.image;
          prixHTML.innerText = livre.prix + 'euros';

          //console.log(livre.auteur);
     }
}


//prixMax :


function afficheLivre(prixMax) {
     for(i = 0; i < tableau.length; i++){
          let livre = tableau[i];

          if(livre.prix >= prixMax){
               continue;
          }

          const imageHTML = document.querySelectorAll('.image')[i];
          const titreHTML = document.querySelectorAll('.titre')[i];
          const auteurHTML = document.querySelectorAll('.auteur')[i];
          const prixHTML = document.querySelectorAll('.prix')[i];
          const descriptionHTML = document.querySelectorAll('.resume')[i];


          auteurHTML.innerText = livre.auteur;
          titreHTML.innerText = livre.titre;
          imageHTML.src = livre.image;
          prixHTML.innerText = livre.prix + 'euros';
          descriptionHTML.innerText = livre.resume;

          //console.log(livre.titre);
     }
}




//Etape 4 : API



function rechercheLivres(){

let input = document.querySelector('#recherche').value;
fetch('https://www.googleapis.com/books/v1/volumes?q=${input}')

.then((reponse) => { 
     return reponse.json();
 }) 

 .then ((data) =>{
const livresApi = data.items;
tableau.splice(0,tableau.length)
 })
livresApi.foreach(livre =>{

     const livreFormat = {
          titre: livre.volumeInfo?.title,
          auteur: livre.volumeInfo?.authors?.join(','),
          prix: livre.volumeInfo?.listPrice?.amount,
          image: livre.volumeInfo?.imagelinks.thumbnail,
          resume: livre.volumeInfo?.description,
     }
     tableau.push(livreFormat);
})
afficheRecommandations();
afficheLivres(20);

}
//crée la fonction qui envoie la requête et qui stocke les résultats
/*requete.onload = function() {
     if (requete.readyState === XMLHttpRequest.DONE) {
          if (requete.status === 200) {
               let reponse = requete.response; //stocke les résultats
               console.log(reponse);
               let prixEnEuros = reponse.listPrice;
               /*console.log(prixEnEuros);
               document.querySelector('.prix').textContent = prixEnEuros;
          }
     }
}
console.log(rechercheLivres);
}
rechercheLivres();
afficheRecommandations();
afficheLivres();
const search = document.getElementById("recherche").value;
const monbBouton = document.getElementById("GO");
const divResultat = document.getElementById("resultat");

monbBouton.addEventListener("click", function () {
     document.getElementById("resultat").textContent = rechercheLivres();
});





//requête vers script php

let xhr = new XMLHttpRequest();

xhr.open("GET", "php/sample-api.json", true);
xhr.responseType = 'text';
xhr.send('resultat');

xhr.onreadystatechange = function recupere() {
     /*console.log(this);
     if (this.readyState == 4 && this.status == 200) {
          let reponse = xhr.response;

     }
}
recupere();*/












