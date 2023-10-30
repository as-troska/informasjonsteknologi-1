let norge = {
    navn: "Norge",
    folketall: 5379475,
    myntenhet: "NOK",
    hovedstad: "Oslo",
    fylker: ["Oslo", "Viken", "Innlandet", "Vestfold og Telemark", "Agder", "Rogaland", "Vestland", "Møre og Romsdal", "Trøndelag", "Nordland", "Troms og Finnmark"]
}

norge.navn = "Noreg"

console.log(norge.navn + " har " + norge.folketall + " innbyggere og bruker " + norge.myntenhet + " som myntenhet. Hovedstaden er " + norge.hovedstad + ".")


class Land {
    constructor(navn, folketall, myntenhet, hovedstad, fylker) {
        this.navn = navn;
        this.folketall = folketall;
        this.myntenhet = myntenhet;
        this.hovedstad = hovedstad;
        this.fylker = fylker;
    }
    visInfo() {
        console.log(this.navn + " har " + this.folketall + " innbyggere og bruker " + this.myntenhet + " som myntenhet. Hovedstaden er " + this.hovedstad + ".")
    }
}

let sverige = new Land("Sverige", 10333456, "SEK", "Stockholm", ["Stockholm", "Västra Götaland", "Skåne", "Östergötland", "Jönköping", "Kronoberg", "Kalmar", "Gotland", "Blekinge", "Halland", "Värmland", "Örebro", "Västmanland", "Dalarna", "Gävleborg", "Västernorrland", "Jämtland", "Västerbotten", "Norrbotten"])
let danmark = new Land("Danmark", 5814461, "DKK", "København", ["Hovedstaden", "Sjælland", "Syddanmark", "Midtjylland", "Nordjylland"])

sverige.visInfo()

danmark.visInfo()

class Rektangel {
    constructor(hoyde, bredde) {
        this.hoyde = hoyde;
        this.bredde = bredde;
    }
    beregnAreal() {
        return this.hoyde * this.bredde
    }
    beregnOmkrets() {
        return (this.hoyde + this.bredde) * 2
    }
}


let rektangelA = new Rektangel(5, 10)

let rektangelB = new Rektangel(10, 20)

console.log(rektangelA.beregnAreal())

console.log(rektangelB.beregnOmkrets())


let listeMedRektangler = [rektangelA, rektangelB]

for (let rektangel of listeMedRektangler) {
    console.log(rektangel.beregnAreal())
    console.log(rektangel.beregnOmkrets())
}


class Elf {
    constructor(name, weapon) {
        this.name = name;
        this.str = Math.floor(Math.random() * 18 + 1)
        this.dex = Math.floor(Math.random() * 18 + 1)
        this.con = Math.floor(Math.random() * 18 + 1)
        this.int = Math.floor(Math.random() * 18 + 1)
        this.wis = Math.floor(Math.random() * 18 + 1)
        this.cha = Math.floor(Math.random() * 18 + 1)
    }
    attack() {
        console.log(this.name + " attacks with " + this.weapon)
    }
}


let elf1 = new Elf("Legolas", "Bow")

console.log(elf1)