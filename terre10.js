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

