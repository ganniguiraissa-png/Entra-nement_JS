/*exo1
const bouton = document.querySelector("#btn")
const titre = document.querySelector("#title")
const para = document.querySelector("#texte")


bouton.addEventListener("click", () => {
    titre.style.color='violet';
    para.textContent="Le texte est différent";
    document.body.style.backgroundColor = 'blue';

});*/

/*exo2

const  ht = document.querySelector("#prix")
const  tva = document.querySelector("#taux")
const  button = document.querySelector("#envoie") 
const resultat = document.querySelector("#resultat")

       button.addEventListener("click", () => {
           event.preventDefault(); // pour eviter que les inputs s'actualise automatiquement
           const prixHT = Number(ht.value);
           const tauxTVA = Number(tva.value);

           const montantTVA =( prixHT * tauxTVA )/ 100;
           const prixTTC = prixHT + montantTVA;

           
           resultat.style.width="300px"
           resultat.style.height="200px"

          


           resultat.textContent = "TVA :" + montantTVA  +  "   "  +
           "TTC :" +  prixTTC  
              
           
       });*/


//exo3

const pr = document.querySelector("#name")
const ag = document.querySelector("#age")
const vil = document.querySelector("#ville")
const color = document.querySelector("#couleur")
const button = document.querySelector("#envoie")
const resultat = document.querySelector("#info")

button.addEventListener("click", () => {
    event.preventDefault();
    resultat.innerHTML = "Prenom : " + pr.value  + "<br>" +
      "Age : " + ag.value + "<br>" +
       "Ville : " + vil.value + "<br>"  +
       "Couleur preferée : " + color.value;


    resultat.style.backgroundColor = color.value;
    resultat.style.display = "block";
})

//exo4

const degres = document.querySelector("#temp")
const convertion = document.querySelector("#conv")
const reponse = document.querySelector("#resul")

convertion.addEventListener ("click" , () => {
    event.preventDefault();
    const temp = Number(degres.value)
    const conv = ((temp * 9) / 5) + 32

    reponse.textContent = "Convertion : " +   conv + "°F"


})



