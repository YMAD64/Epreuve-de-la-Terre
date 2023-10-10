const args = process.argv.slice(2)
let stringArgs = args.join('-')

function compare(x,y){return x - y;
}
let newArgs = (args.sort(compare));
let newStringArgs = newArgs.join('-')

if(stringArgs === newStringArgs){
    console.log("Triée !");
}
else console.log("Pas triée !");



// args.forEach(function(i){
//     {
//         console.log(args[i-1]);
//     }
// })

// let nombre1 = parseInt(args[0])
// let nombre2 = parseInt(args[1])
// let nombre3 = parseInt(args[2])
// // console.log(nombre1);
// console.log(nombre2);
// console.log(nombre3);

///////////////////////////////////////////////////////
//10/10/23//

//const args = process.argv.slice(2)
//console.log(args);

function trié(array){
    for (let i=0 ; i<array.length ; i++){
        if(parseInt(array[i])>parseInt(array[i+1])){
        return false
        } 
        
    } return true
}

if(trié(args)){
    console.log("Triée !");
}
else{
    console.log("Pas triée !");
}