let nom = process.argv[1]
let newnom = ""

for(let i = 45 ; i<= nom.length ; i++){
   newnom = newnom + nom.charAt(i)
}
console.log(newnom);
