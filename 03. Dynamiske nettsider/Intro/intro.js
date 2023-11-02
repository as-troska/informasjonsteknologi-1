// console.log("Hei, verden!")

// let overskriftEl = document.querySelector("#overskrift")

// let btnKnapp

// let inpFornavn

// overskrift.innerHTML = "Intro til JavaScript i nettleseren"

// overskrift.style.color = "red"

// let lenke = document.querySelector("#link")

// lenke.href = "https://www.google.com";

// lenke.innerHTML = "Google";

// document.body.style.backgroundColor = "lightblue";

// 

// console.log(farger.length)



// if (tilfeldigTall > 5) {
//     overskrift.style.color = "white"
// }

let knpKnapp = document.querySelector("#knapp")

knpKnapp.addEventListener("click", endreFarge)

function endreFarge() {
    let tilfeldigTall = Math.floor(Math.random() * 10)
    let farger = ["red", "green", "blue", "yellow", "purple", "orange", "pink", "brown", "black", "white"];

    document.body.style.backgroundColor = farger[tilfeldigTall]
    alert("Du har trykket på knappen")
}