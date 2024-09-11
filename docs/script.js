// Tableau des slides
const slides = [
  {
    image: "slide1.jpg",
    tagLine: "Impressions tous formats <span>en boutique et en ligne</span>",
  },
  {
    image: "slide2.jpg",
    tagLine:
      "Tirages haute définition grand format <span>pour vos bureaux et events</span>",
  },
  {
    image: "slide3.jpg",
    tagLine: "Grand choix de couleurs <span>de CMJN aux pantones</span>",
  },
  {
    image: "slide4.png",
    tagLine: "Autocollants <span>avec découpe laser sur mesure</span>",
  },
];

let counter = 0;


//Sélection des éléments HTML

// Récupérer les balises img de banner
const allDomSlidesImages = document.querySelectorAll(".banner-img");
console.log(allDomSlidesImages);

// Récupérer tous les dots
const allDomDots = document.querySelectorAll(".dot");
console.log(allDomDots);

const tagLine = document.querySelector(".tag-line");
tagLine.innerHTML = slides[0].tagLine;


//Navigation vers l'image suivante
//Récupérer le chevron suivant
const arrowRight = document.querySelector(".arrow_right");

//Mettre un évènement click sur le chevron suivant
//Lorsque l'utilisateur clique :
arrowRight.addEventListener("click", () => {
  //Le compteur est incrémenté.
  counter = counter + 1;
//Si on dépasse la dernière image, on revient à 0 .
  if (counter === allDomSlidesImages.length) {
    counter = 0;

    //. Désactivation de l'ancienne image et du point (dot) correspondant


    allDomSlidesImages[allDomSlidesImages.length - 1].classList.remove( "active");
    allDomDots[allDomDots.length - 1].classList.remove("dot_selected");

   // 3. Activation de la première image et de son point (dot)
    allDomSlidesImages[counter].classList.add("active");
    allDomDots[counter].classList.add("dot_selected");
  } 


//. Sinon (cas général pour toutes les autres images)

else {
    allDomSlidesImages[counter - 1].classList.remove("active");
    allDomDots[counter - 1].classList.remove("dot_selected");
    allDomSlidesImages[counter].classList.add("active");
    allDomDots[counter].classList.add("dot_selected");
  }
  //. Mise à jour de la tagline en affichant la tagline correspondant à l'image active.

  tagLine.innerHTML = slides[counter].tagLine;

  //******slides[counter].tagLine récupère la tagline dans le tableau slides, à l'index correspondant à la valeur actuelle du compteur.
});

// Récupération du chevron précédent

const arrowLeft = document.querySelector(".arrow_left");

// //Mettre un évènement click sur le chevron précédent
arrowLeft.addEventListener("click", () => {
  //******arrowLeft.addEventListener() permet de définir une action à exécuter lorsqu'on clique sur l'élément. 
  //****Ici, l'action est un callback (une fonction fléchée () => {}), qui sera exécutée à chaque clic sur le chevron gauche.
  //. Décrémenter le compteur
  counter = counter - 1;

  if (counter < 0) {
    counter = allDomSlidesImages.length - 1;
//****Si c'est le cas, on fait boucler le carrousel en attribuant à counter la dernière valeur possible, c'est-à-dire allDomSlidesImages.length - 1, qui correspond à l'index de la dernière image du carrousel.
 //. Activer la dernière image et son point (dot)
 allDomSlidesImages[counter].classList.add("active");
    allDomDots[counter].classList.add("dot_selected");

//. Désactiver la première image et son point (dot)
    allDomSlidesImages[0].classList.remove("active");
    allDomDots[0].classList.remove("dot_selected");
  } 
  // Sinon (pour toutes les autres images)
else {

    allDomSlidesImages[counter].classList.add("active");
    allDomDots[counter].classList.add("dot_selected");
    allDomSlidesImages[counter + 1].classList.remove("active");
    allDomDots[counter + 1].classList.remove("dot_selected");
  }
  //Mise à jour de la tagline

  tagLine.innerHTML = slides[counter].tagLine;
});
//Après avoir mis à jour l'image affichée, on met à jour la tagline associé à l'image avec celle correspondant à l'index counter dans le tableau slides.