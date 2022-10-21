const args = process.argv.slice(2)
let argsString = args.join()


let resultat = Math.sqrt(args[0]);
if(process.argv.length > 3){
    console.log("ERREUR : Le programme ne peut prendre qu'un argument")
}
else if(isNaN(args[0])===true){
    console.log("ERREUR : L'argument doit être un nombre !");
}
else if(argsString.includes('.')===true){
    console.log("ERREUR : L'argument doit être un entier !");
}
else if(args[0] <= 0){
    console.log("ERREUR : L'argument doit être positif");
}

else console.log(resultat)