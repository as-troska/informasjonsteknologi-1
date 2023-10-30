function enFunksjonSomSierHei() {
    return "Hei,";
}



function heiDu(navn) {
    console.log(enFunksjonSomSierHei(), navn)
}

heiDu("Per");
heiDu("Kari");
heiDu("Ola");


function enKjempeEnkelKalkulator(tall1, tall2, regneart) {
    if (regneart === "+") { 
        return tall1 + tall2;
    } else if (regneart === "-") {
        return tall1 - tall2;
    } else if (regneart === "*") {
        return tall1 * tall2;
    } else if (regneart === "/") {
        return tall1 / tall2;
    } else { 
        console.log("Noe mangler")
    }
}

let svar = enKjempeEnkelKalkulator(10, 2, "laks");

console.log(svar);






