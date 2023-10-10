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
///////////////////////////////////////////////////////////////
//09/10/23
// const args = process.argv.slice(2)
// const stringArgs = args.join()

// //console.log(stringArgs);

// function convert(string){
    
//     if ((string.length < 6 || (string.length > 7))){
//         return false
//     }
    
     
//     else if(string.length == 6){
//         hoursNumber = `${string[0]}`
//         minutesNumber = `${string[2]}${string[3]}`
//         moment = `${string[4]}${string[5]}`
//         return true
    
//     }

//     else if(stringArgs.length == 7){
//         hoursNumber = `${string[0]}${string[1]}`
//         minutesNumber = `${string[3]}${string[4]}`
//         moment = `${string[5]}${string[6]}`
//         return true
//     }
    
    
// }


// function convertHours(string1, string2, string3){
//     hours = string1
//     min = string2
//     moment = string3
    
//     if(isNaN(string1)){
//         console.log("erreur");
//     }
//     else if (isNaN(string2)){
//         console.log(("erreur"));
//     }
//     else if ((moment != 'PM')&&(moment != 'AM')){
//         console.log("erreur");
//     }
//     else if ((hours > 12) || (hours < 1)){
//         console.log("erreur");
//     }
//     else if ((min > 59)||(min < 0)){
//         console.log("erreur");
//     } 
//     else if ((hours == 12 )&&(moment == 'PM')){
//         newHours = 12
//         console.log(`${newHours}:${min}`);
//     }
//     else if ((hours == 12 )&&(moment == 'AM')){
//         newHours = 0
//         console.log(`${newHours}:${min}`);
//     }
//     else if ((hours != 12) && (moment == 'AM')){
//         newHours = hours
//         console.log(`${newHours}:${min}`);
//     }
//     else if ((hours != 12) && (moment == 'PM')){
//         newHours = 12 + parseInt(hours)
//         console.log(`${newHours}:${min}`);
// }
// }

// if (convert(stringArgs)){
//     convertHours(hoursNumber,minutesNumber,moment);
//     }

// else console.log("ERREUR")
