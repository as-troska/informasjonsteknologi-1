let liste = ["Tiger", "Løve", "Gorilla", "Elefant", "Krokodille", "Giraff", "Flodhest", "Neshorn", "Kenguru"]

console.log("Vi har følgende dyr i vår dyrehage: ")

for (let teller = 0; teller < liste.length; teller++) {
    console.log("- " + liste[teller])
}

console.log("Vi har også følgende dyr i vår dyrehage: ")

for (let dyr in liste) {
    console.log("- " + liste[dyr])
}

let tall = [1, 2, 3, 4, 5, 6, 7, 8, 9]

let sum = 0;

for (let tallet in tall) {
    sum += Number(tallet)
}

console.log(sum)


let tilfeldigetTall = [1243, 124, 23, 23.5, 100000]

tilfeldigetTall.sort()

console.log(tilfeldigetTall)

let listeMedNavn = ["Per", "Pål", "Espen", "Arne", "Knut", "Kari", "Line", "Lise"]

listeMedNavn.sort()
listeMedNavn.reverse()

console.log(listeMedNavn)

tilfeldigetTall.sort(function (a, b) {
    return a - b
})

console.log(tilfeldigetTall)
