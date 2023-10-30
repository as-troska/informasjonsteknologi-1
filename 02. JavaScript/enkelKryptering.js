const prompt = require("@kant2002/prompt-sync")({sigint: true, encoding: "windows-1252"});

const alfabet = "abcdefghijklmnopqrstuvwxyzæøå ";

let ukryptertTekst = prompt("Skriv inn teksten du vil kryptere: ");
console.log("Du skrev:", ukryptertTekst)
let kryptertTekst = "";


// for(let i=0; i < ukryptertTekst.length; i++) {
//     let bokstav = ukryptertTekst[i];
//     let indeks = alfabet.indexOf(bokstav);
//     let nyIndeks = indeks + 3;
//     let nyBokstav = alfabet[nyIndeks];
//     kryptertTekst += nyBokstav;
// }

// console.log("Den krypterte teksten er:", kryptertTekst);

