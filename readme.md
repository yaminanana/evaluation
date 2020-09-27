


Etape 1-prise en main et intégration du design

A faire:

1-structurer la page html
2-choisir quel positionnement appliquer pour chaque section(flex, grid, position??)
3-faire le css de chaque partie:
         *.nav
         *.header
         *.section
         *.article
         *.footer

  à finir :     **footer à reprendre avant la fin du délais
                ** Remettre le p du header en position relative
                **repositionner le logo livre du h1 de la section
                **Mettre les prix dans les sélections de l'article 
                **agrandir le prix et l'afficher en jaune
                **afficher le résumé du livre en plus foncé
                **résoudre le problème au niveau de la nav
                **vérifier que les class et id sont utilisés à bon escient


4-faire des commit pour chaque partie du site finis




Difficultés rencontrées : positionnement des éléments dans leurs conteneurs


Etape 2-Passage à un désign "responsive"

A faire:


**2->800px la barre de recherche passe en dessous du logo(affichage correcte jusqu'à 737px)
**3->800px partie section =>on passe à deux cases à afficher à la place de trois (affichage correcte jusqu'à 737px)
**4->800px footer => on passe à deux cases à la place de trois (affichage correcte jusqu'à 737px)

à finir : 

1-transformer notre menu en un menu hamburger
            


à revoir :
Le responsive            

Difficultés rencontrées : le responsive dans sa globalité


Etape 3-Rendre notre site dynamique

A faire:

**1-créer un tableau de livres en js
**2-créer une fonction js afficheRecommandations() qui affiche les 3 premiers livres:

         function afficheRecommandations(){
         console.log  (tableau[0], tableau[1], tableau[2]);
}
         afficheRecommandations()

**2-créer une fonction js afficheRecommandations() qui affiche les livres de manière aléatoire:

         function afficheRecommandations(){
         console.log (tableau[Math.floor(Math.random(0.7)*Math.floor(3))]);
}

      afficheRecommandations();


**3-créer une fonction js afficheLivres(prixMax) qui affiche les livres à moins du prixMax passé en paramètre :

      function afficheLivre(prixMax){
      tableau.forEach(function(tableau){
        if (tableau.prix <= prixMax){
           console.log(tableau); 
        } 
 })
}

afficheLivre(25);


4-appelez vos deux fonctions au démarrage du site et vérifiez que le site s'affiche correctement


à finir :4-appelez vos deux fonctions au démarrage du site et vérifiez que le site s'affiche correctement



Difficultés rencontrées :les fonctions en js



Etape 4-intégration de l'API Google

A faire :

**1-Créer une fonction rechercheLivres(recherche) qui :
=>envoie la requête,
=>stocke les résultats dans notre tableau js,
=>au bon format

**2-En fin de fonction rechercheLivres(), appelez les fonctions afficheRecommandations() et afficheLivres(prixMax).




à finir :

3-Faites en sorte que lors d'une saisie dans la barre de recherche, cela appelle la fonction rechercheLivres().



Difficultés rencontrées :
connecté mon fichier javascript avec mon fichier html et avec mon site web.


Etape 5-Fabriquer sa propre API

**1-créer notre API dans notre script,




à finir :

2-Lorsque qu'on arrive sur le site, une requête est envoyée directement vers notre script en PHP,
3-Notre script PHP retourne du contenu textuel,
4-Notre site affiche le résultat.

Difficultées rencontrées :

connecté mon fichier php avec mon fichier javascript et avec mon site web.


A voir et à revoir :

1-utilisation flexbox css/grid css (site Pierre Giraud, https://css-tricks.com/snippets/css/a-guide-to-flexbox/,)
2-positionnement des éléments en css,
3-le responsive design,
4-les fonctions en js/PHP,
5-Comment consommer une API sur son site web.