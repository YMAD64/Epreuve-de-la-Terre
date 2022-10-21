const args = process.argv.slice(2)
const argsString = args.join()
let Dheure = argsString.charAt(0)
let Uheure = argsString.charAt(1)
let heure = Dheure+Uheure
let Dmintute = argsString.charAt(3)
let Uminute = argsString.charAt(4)
let minute = Dmintute+Uminute

if(heure >= 24){console.log("ERREUR ! Format incorrect");
}
else if(minute >= 60){console.log("ERREUR ! Format incorrect");
}
else if(argsString.length!=5){console.log("ERREUR ! Veuillez entrer l'heure sous la forme HH:MM");
}
else if(argsString.charAt(2)!= ':'){console.log("ERREUR ! Veuillez entrer l'heure sous la forme HH:MM");
}
else if(isNaN(heure)===true || isNaN(minute)===true){console.log("ERREUR ! Veuillez entrer l'heure sous la forme HH:MM");
}

else if(heure >= 12){
    let nheure = heure - 12
    console.log(`${nheure}:${minute}PM`);
}
else if(heure < 12){
    console.log(`${heure}:${minute}AM`);
}
