let args = process.argv.slice(2)
let alphabet = "abcdefghijklmnopqrstuvwxyz"
let newAlpha = ""
let argsString = args.join() 
let index = alphabet.indexOf(argsString)

for (i = index ; i < 26 ; i ++) {
    newAlpha = newAlpha + alphabet.charAt(i);

}
    console.log(newAlpha);

