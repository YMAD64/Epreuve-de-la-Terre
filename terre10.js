const args = process.argv.slice(2)
let result = []

for(let i=2 ; i < args ; i++){
    result.push(args%i)
}
resultString = result.join(' ')

if(process.argv.length > 3){
    console.log("ERREUR : Le programme ne peut prendre qu'un argument")
}
else if(isNaN(args[0])===true){
    console.log("ERREUR : L'argument doit être un nombre !")
}
else if(resultString.includes(' 0 ') || args==0 || args==1 || args==4 ){
    console.log(`Non, ${args} n'est pas un nombre premier`)
}
else console.log(`Oui, ${args} est un nombre premier`);


////////////////////////////////////////////////////////////////////////////////////////////////////////
//8/10/23//

function isPremier (nombre){
    let premier = true
    for(let i=2 ; i<nombre ; i++){
        if (nombre%i == 0){
            premier = false
            break
        }
    } return premier
} 

if(args.length != 1){
    console.log("erreur");
}

else if(isNaN(args)){
    console.log("erreur");
}

else if ((args == 0)||(args == 1)){
    console.log(`Non, ${args} n'est pas un nombre premier`);
}

else if (isPremier(args)==true){
    console.log(`Oui, ${args} est un nombre premier`)
}
else if (isPremier(args)==false){
    console.log(`Non, ${args} n'est pas un nombre premier`)
}