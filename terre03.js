// 1 FONCTION

// convertirArgsEnValeurNumerique => va me dire en quelle position est ma lettre dans l'alphabet
function convertirArgsEnValeurNumerique(liste) {
    args = process.argv.slice(2)
    stringArg = args.join()
    position = liste.indexOf(stringArg)
    
}
function creerNouvelListeEtAfficher(liste, nouvelleListe) {
    for (i = position ; i < liste.length ; i ++) {
        nouvelleListe = nouvelleListe + liste.charAt(i);
    
    }
    console.log(nouvelleListe);
}


 
// 2 GESTIOON ERREUR
 
 
 
// 3 PASSING

let alphabet = "abcdefghijklmnopqrstuvwxyz"
let newAlpha = ""

// 4 RESOLUTION

convertirArgsEnValeurNumerique(alphabet)
creerNouvelListeEtAfficher(alphabet, newAlpha)

// 5  RESULTAT

