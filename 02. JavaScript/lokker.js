// To typer løkker: for og while


// while-løkke - kjører så lenge en betingelse er sann
// Vi ser ofte en variant som ser slik ut while(true) { ... }
// Dette er en evig løkke, og vil kjøre helt til programmet avsluttes
// Vi kan avslutte en løkke med break

// while(true) {
//     console.log("Hei, jeg er en evig løkke");
//     break;    
// }

// let teller = 0;

// while (teller < 11) {
//     console.log("Teller er:", teller);
//     teller++;
// }

// let sant = true;

// while (sant === true) { 
//     let tilfeldigTall = Math.floor(Math.random() * 10) + 1;
//     console.log("Tilfeldig tall er:", tilfeldigTall);

//     if(tilfeldigTall === 5) {
//         console.log("Vi har truffet 5, avslutter løkken");
//         sant = false;
//     }


// }

let i = 0;
while(i < 10000000) {
    i++;
}

console.log("Løkken er ferdig, i er:", i);

// for-løkke - kjører et gitt antall ganger

for(let teller = 0; teller < 11; teller = teller + 3) {
    for(let teller2 = 0; teller2 < 11; teller2++) {
        console.log("Teller er:", teller, "Teller2 er:", teller2);
    }
}
