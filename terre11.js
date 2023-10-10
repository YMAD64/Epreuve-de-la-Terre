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
else if(heure == 0 && minute == 0){
    console.log("12:00AM");
}
else if(heure == 12 && minute == 0){
    console.log("12:00PM");
}
else if(heure >= 12){
    let nheure = heure - 12
    console.log(`${nheure}:${minute}PM`);
}
else if(heure < 12){
    console.log(`${heure}:${minute}AM`);
}

//////////////////////////////////////////////////////////////////////
//09/10/23
//const args = process.argv.slice(2)
const stringArgs = args.join()


function convert(string){
    if ((string.length < 4) || (string.length > 5)){
        return false
    }
    
     
    else if(string.length == 4){
        hoursNumber = `${string[0]}`
        minutesNumber = `${string[2]}${string[3]}`
        return true
    }

    else if(stringArgs.length == 5){
        hoursNumber = `${string[0]}${string[1]}`
        minutesNumber = `${string[3]}${string[4]}`
        return true
    }
    
    
}


convert(stringArgs)

function convertHours(string1, string2){
    hours = string1
    min = string2
    
    if(isNaN(string1)){
        console.log("erreur");
    }
    else if (isNaN(string2)){
        console.log(("erreur"));
    }
    else if ((hours > 23) || (hours < 0)){
        console.log("erreur");
    }
    else if ((min > 59)||(min < 0)){
        console.log("erreur");
    } 
    else if (hours == 0 ){
        newHours = 12
        console.log(`${newHours}:${min} AM`);
    }
    else if (hours > 12){
        newHours = hours-12
        console.log(`${newHours}:${min} PM`);
    }
    else if ((hours <= 12)&&(hours > 0)){
        newHours = hours
        console.log(`${newHours}:${min} AM`);
    }
}


if (convert(stringArgs)){
    convertHours(hoursNumber,minutesNumber);
    }
else console.log("ERREUR");