let alphabet = "abcdefghijklmnopqrstuvwxyz"
let newAlpha = ""
for (i = 0 ; i < 26 ; i++) {
    newAlpha = newAlpha + alphabet.charAt(i);
}
console.log(newAlpha);