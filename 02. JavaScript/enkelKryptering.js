const prompt = require("@kant2002/prompt-sync")();

const alfabet = "abcdefghijklmnopqrstuvwxyzæøå ";

let ukryptertTekst = prompt("Skriv inn teksten du vil kryptere: ");
let kryptertTekst = "";


for(let i=0; i < ukryptertTekst.length; i++) {
    let bokstav = ukryptertTekst[i];
    let indeks = alfabet.indexOf(bokstav);
    let nyIndeks = indeks + 3;
    let nyBokstav = alfabet[nyIndeks];
    kryptertTekst += nyBokstav;
}

console.log("Den krypterte teksten er:", kryptertTekst);

