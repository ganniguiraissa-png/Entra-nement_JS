//exo1
const bouton = document.querySelector("#btn")
const titre = document.querySelector("#title")
const para = document.querySelector("#texte")


bouton.addEventListener("click", () => {
    titre.style.color='violet';
    para.textContent="Le texte est différent";
    document.body.style.backgroundColor = 'blue';

});

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

            
            resultat.style.white="300px"
            resultat.style.height="200px"

           


            resultat.textContent = "TVA :" + montantTVA  +  "   "  +
            "TTC :" +  prixTTC  
               
            
        });*/


