const prompt = require('prompt-sync')({ sigint: true });

const tall = Math.floor(Math.random() * 10) + 1;
let rettSvar = false;
let forsok = 0;


while(!rettSvar) { 
    let gjett = prompt("Hvilket tall gjetter du? ");
    forsok++;
    if(gjett == tall) {
        console.log("Du gjettet riktig!");
        console.log("Du brukte", forsok, "forsøk");
        rettSvar = true;
    } else if (gjett > tall) {
        console.log("Du gjettet for høyt");        
    } else {
        console.log("Du gjettet for lavt");
    }

    gjett == tall ? rettSvar = true : rettSvar = false;

}




