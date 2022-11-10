// 1 FONCTION
function pairOuImpair(param){
    
    args = process.argv.slice(2) 
        
    stringArg = args.join()
    
    if(isNaN(process.argv.slice(2))==true){
        stringArg = param
    }
    
    if(args.length < 1){
        console.log("Tu ne me la mettras pas à l'envers");
    }
    
    else if(stringArg%2===0){
        console.log("pair");
    }
    else if(stringArg%2===1){
        console.log("impair");
    
    }

}


// 2 GESTIOON ERREUR
 

 
 
// 3 PASSING



// 4 RESOLUTION
pairOuImpair(67)

// 5  RESULTAT






// else console.log("Tu ne me la mettras pas à l'envers"); 