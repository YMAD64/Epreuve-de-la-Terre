const args = process.argv.slice(2)


let resultat = args[0]/args[1];
let resultatEntier = Math.trunc(resultat)
let reste = args[0]%args[1];

if(resultat < 1 || args[1]==0){
    console.log("erreur.");

}
else console.log(`résultat : ${resultatEntier} \nreste : ${reste}`);
