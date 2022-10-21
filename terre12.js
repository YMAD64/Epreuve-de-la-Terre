const args = process.argv.slice(2)
const argsString = args.join()
let Dheure = argsString.charAt(0)
let Uheure = argsString.charAt(1)
let heure = Dheure+Uheure
let Dmintute = argsString.charAt(3)
let Uminute = argsString.charAt(4)
let minute = Dmintute+Uminute

if(heure >= 12){console.log("ERREUR ! Format incorrect");
}
else if(minute >= 60){console.log("ERREUR ! Format incorrect");
}
else if(argsString.length!=7){console.log("ERREUR ! Veuillez entrer l'heure sous la forme HH:MMAM ou HH:MMPM");
}
else if(argsString.charAt(2)!= ':'){console.log("ERREUR ! Veuillez entrer l'heure sous la forme HH:MMAM ou HH:MMPM");
}
else if(isNaN(heure)===true || isNaN(minute)===true){console.log("ERREUR ! Veuillez entrer l'heure sous la forme HH:MMAM ou HH:MMPM");
}

else if(argsString.charAt(5)=="P"){
    newHeure = heure -(-12)
    console.log(`${newHeure}:${minute}`);
}
else if(argsString.charAt(5)=="A"){
    console.log(`${heure}:${minute}`)
}

