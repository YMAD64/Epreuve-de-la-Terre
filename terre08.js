const args = process.argv.slice(2)
let resultat = args[0]**args[1];
if(args[1]<0){
    console.log("ERREUR : L'exposant ne peut pas être négatif !");
}
else if(isNaN(args[0])===true || isNaN(args[1])===true){
    console.log("ERREUR : Les arguments doivent être des nombres !");
}
else if(process.argv.length > 4){
    console.log("ERREUR : Le programme ne peut prendre que deux arguments")
}


else console.log(resultat);