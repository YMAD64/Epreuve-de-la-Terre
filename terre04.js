let args = process.argv.slice(2)
let argsString = args.join()
if(args.length < 1){
    console.log("Tu ne me la mettras pas à l'envers");
}

else if(argsString%2===0){
    console.log("pair");
}
else if(argsString%2===1){
    console.log("impair");
}
else if(argsString%2===-1){
    console.log("impair");
}
else console.log("Tu ne me la mettras pas à l'envers"); 