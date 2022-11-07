const args = process.argv.slice(2) 

let chiffre1 = args[0]
let chiffre2 = args[1]
let res = chiffre1

for (let i = 0 ; i < chiffre2 ; i++){
    res = chiffre1 * res
   
    
}
console.log(res);