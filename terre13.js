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


////////////////////////////////////////////////////
//10/10/23//

//const args = process.argv.slice(2)
//const stringArgs = args.join()

// console.log(args);

let nbre1 = parseInt(args[0])
let nbre2 = parseInt(args[1])
let nbre3 = parseInt(args[2])

function suisse(nb1,nb2,nb3){
    if((nb1 < nb2) && (nb2 < nb3)){
        console.log(nb2);
    }
    else if((nb1 < nb3) && (nb3 < nb2)){
        console.log(nb3);
    }
    else if((nb2 < nb1) && (nb1 < nb3)){
        console.log(nb1);
    }
    else if ((nb1 > nb2) && (nb2 > nb3)){
        console.log(nb2);
    }
    else if ((nb1 > nb2) && (nb2 < nb3) && (nb1 && nb3)){
        console.log(nb3);
    }
    else if ((nb1 < nb2) && (nb2 > nb3) && (nb1 > nb3)){
        console.log(nb1);
    }
}

suisse(nbre1,nbre2,nbre3)


