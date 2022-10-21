const args = process.argv.slice(2)

let nombre1 = parseInt(args[0])
let nombre2 = parseInt(args[1])
let nombre3 = parseInt(args[2])
if(process.argv.length > 5){
    console.log('.erreur');
}
else if(nombre1 === nombre2 || nombre1 === nombre3 || nombre2 === nombre3){
    console.log('erreur.');
}

else if(nombre1 < nombre2 && nombre2 < nombre3){
    console.log(nombre2);
}
else if(nombre1 < nombre3 && nombre3 < nombre2){
    console.log(nombre3);
}
else if(nombre3 < nombre2 && nombre2 < nombre1){
    console.log(nombre2);
}
else if(nombre3 < nombre1 && nombre1 < nombre2){
    console.log(nombre1);
}
else if(nombre2 < nombre3 && nombre3 < nombre1){
    console.log(nombre3);
}
else if(nombre2 < nombre1 && nombre1 < nombre3){
    console.log(nombre1);
}



