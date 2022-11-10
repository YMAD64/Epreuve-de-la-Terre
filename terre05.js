// 1 FONCTION
function isNumber(args){
    if((isNaN(args)==true)){
    return false
    }
}

function diviser(args){
    if(args[0]/args[1] < 1){
    resultat = 0
    }
    else resultat = args[0]/args[1]
}

function tronquer(resultat) {
    tronc = Math.trunc(resultat)
}

function reste(args){
    reste = args[0]%args[1]
}
function afficher(){
    if(resultat == 0){
        console.log("erreur.");
    }
    else console.log(`resultat : ${tronc}\nreste : ${reste}`);
}


// 2 PASSING

let args = process.argv.slice(2)


// 3 LA GESTION D'ERREUR



if(args[1]<=0){
    console.log("erreur.")
    return false
}


// 4 RESOLUTION

isNumber(args)
diviser(args)
tronquer(resultat)
reste(args)
afficher()





