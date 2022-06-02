/*
    CIT 281 Project 1
    Name: Beatrice Wetton
*/
const alphabet = 'abcdefghijklmnopqrstuvwxyz';
let result = "";
function getRandomInteger(min, max) {
    return Math.floor(Math.random() * (max - min) + min);
}
for (i = 0; i < getRandomInteger(5,25); i++){
    result += alphabet.charAt(Math.floor(Math.random() * alphabet.length));
}
console.log(result);
