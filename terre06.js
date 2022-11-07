function inverserChaine(){

    let args = process.argv.slice(2)
    let argsString = args.join()
    let reverseString = ""
    
    for(let i = argsString.length ; i >= 0 ; i--){
        reverseString = reverseString + argsString.charAt(i)
    }
    console.log (reverseString)
} 
inverserChaine() 


