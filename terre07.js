const args = process.argv.slice(2)
let argsString = args.join('')
let argsStringLength = argsString.length

if(process.argv.length > 3){
    console.log(".erreur")
}
else if(isNaN(argsString) === false){
    console.log(".erreur")   
}

else console.log(argsStringLength);
