const bilder = [
    {
        filnavn: "./img/Jan_van_Eyck_Diptych_Crucifixion_Right_hellscape_1024x1024.webp",
        bildetekst: "Scener frå Helvete"
    }, {
        filnavn: "./img/Plato-Aristotle-philosophers-detail-Raphael-School-of.webp",
        bildetekst: "Filosofar"
    }, {
        filnavn: "./img/RENAISSANCE.webp",
        bildetekst: "Renessanse"
    }, {
        filnavn: "./img/selfportrait-by-albrecht-durer-oil-on-wood-1498-147863706-58ab5a813df78c345b153782.webp",
        bildetekst: "Selvportrett"
    },{
        filnavn: "./img/Saint-Michael-oil-wood-Demon-Raphael-Paris.webp",
        bildetekst: "Demonar"
    },{
        filnavn: "./img/the-concert-in-the-egg-1480.jpg!HD.jpg",
        bildetekst: "Konsert i eit egg"
    },{
        filnavn: "./img/the-seven-deadly-sins-and-the-four-last-things-1485.jpg",
        bildetekst: "Dei sju dødssynden pluss fire"
    },{
        filnavn: "./img/The-Creation-of-Adam-ceiling-fresco-Sistine.webp",
        bildetekst: ""
    },{
        filnavn: "./img/Vertumnus_årstidernas_gud_målad_av_Guiseppe_Arcimboldo_edit.jpg",
        bildetekst: "Han var ikkje akkurat eit fruktfat"
    }
]

let currentIndex = 0;

function generateGallery(imageArray, targetElement) {
    for (let i = 0;  i < imageArray.length; i++) {
        const imageElement = document.createElement("img");
        imageElement.src = imageArray[i].filnavn;
        imageElement.alt = imageArray[i].bildetekst;
        imageElement.dataset.bildetekst = imageArray[i].bildetekst;
        imageElement.style.height = "200px";

        imageElement.addEventListener("click", function(event) {
            console.log("click")
            mainImage.src = event.target.src;
            mainImage.alt = event.target.dataset.bildetekst;
            mainImage.style.width = "80%";
        });

        targetElement.appendChild(imageElement);
    }
}

const gallery = document.querySelector("#galleri");
generateGallery(bilder, gallery);

const mainImage = document.querySelector("#mainImg");
