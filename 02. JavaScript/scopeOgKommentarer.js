let globalVariabel = "Hei, jeg er global";

console.log(globalVariabel);

function enFunksjon() {
    console.log(globalVariabel);
    
    let lokalVariabel = "Hei, jeg er lokal";
    console.log(lokalVariabel);
}

enFunksjon();

//Linjen under fører til feilmelding, da lokalVariabel er definert inni enFunksjon
//console.log(lokalVariabel); 


/**
 * En funksjon som forventer tre parametere, to tall og en regneart 
 * 
 * @param {number} tall1 Det første tallet i regnestykket
 * @param {number} tall2 Det andre tallet i regnestykket
 * @param {string} regneart Regnearten som skal brukes i regnestykket: +, -, * eller /
 * @return {number} Resultatet av regnestykket
 */

function enKjempeEnkelKalkulator(tall1, tall2, regneart) {
    switch (regneart) {
        case "+":
            return tall1 + tall2;
            break
        case "-":
            return tall1 - tall2;
            break
        case "*":
            return tall1 * tall2;
            break
        case "/":
            return tall1 / tall2;
            break
        default:
            console.log("Noe mangler");
    }
}

enKjempeEnkelKalkulator()

enKjempeEnkelKalkulator(1,2,"+")