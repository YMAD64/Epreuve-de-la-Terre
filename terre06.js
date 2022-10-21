const args = process.argv.slice(2)
let argsString = args.join(' ')
let stringToArray = argsString.split('')
let reverse = stringToArray.reverse()
let resultat = reverse.join('') 

console.log(resultat)