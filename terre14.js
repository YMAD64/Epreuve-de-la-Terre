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