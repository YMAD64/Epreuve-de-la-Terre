


// 1 FONCTION

function afficherNomFichier(cheminBrut, nomFichier){
   for (i = 45 ; i <= cheminBrut.length ; i++) {
       nomFichier = nomFichier + cheminBrut.charAt(i);
   }
   console.log(nomFichier);   
}
 

// 2 GESTIOON ERREUR



// 3 PASSING

let cheminBrut = process.argv[1]
let nomFichier = ""

// 4 RESOLUTION

afficherNomFichier(cheminBrut, nomFichier)

// 5  RESULTAT