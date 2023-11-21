//Byer i Norge

let byer = [    {
        navn: "Oslo",
        folkemengde: 693494,
        fylke: "Oslo",
        bydeler: ["Groruddalen", "Grünerløkka", "Gamlebyen", "Sagene", "St. Hanshaugen", "Frogner", "Ullern", "Vestre Aker", "Nordre Aker", "Bjerke", "Nordstrand", "Søndre Nordstrand", "Østensjø", "Alna", "Stovner", "Ekeberg", "Nordstrand", "Søndre Nordstrand", "Østensjø", "Alna", "Stovner", "Ekeberg"],
        styre: {
            ordfører: "Mariken Holter",
            varaordfører: "Kamzy Gunaratnam",
            størsteparti: "Ap"
        },
        byvåpen: "./img/oslo.png",
        motto: "Unge Oslo",
        historie: "Oslo ble grunnlagt i år 1000 og var hovedstad i Norge fra 1314. Byen ble ødelagt av brann i 1624 og flyttet til Christiania, som i 1925 ble omdøpt til Oslo. Oslo er Norges største by og har vært det siden 1500-tallet. Byen er også Norges eldste, og har vært landets hovedstad siden 1314. Oslo er en av de raskest voksende byene i Europa, og er i dag en moderne storby med et rikt kulturliv og en spennende historie."
    }, {
        navn: "Bergen",
        folkemengde: 280216,
        fylke: "Vestland",
        bydeler: ["Bergenhus", "Årstad", "Åsane", "Fana", "Fyllingsdalen", "Laksevåg", "Ytrebygda", "Arna", "Fyllingsdalen", "Laksevåg", "Ytrebygda", "Arna"],
        styre: {
            ordfører: "Roger Valhammer",
            varaordfører: "Thor Wold",
            størsteparti: "Ap"
        },
        byvåpen: "./img/bergen.png",
        motto: "Til fjells!",
        historie: "Bergen ble grunnlagt av Olav Kyrre i 1070 og var Norges hovedstad frem til 1299. Byen var en av de viktigste byene i Hansaforbundet og var Norges største by frem til 1830. Bergen er i dag Norges nest største by og er en av de raskest voksende byene i landet. Byen er kjent for sin vakre beliggenhet mellom fjellene og havet, og er et populært turistmål."
    }, {
        navn: "Trondheim",
        folkemengde: 193501,
        fylke: "Trøndelag",
        bydeler: ["Midtbyen", "Østbyen", "Lerkendal", "Heimdal", "Saupstad", "Tiller", "Strinda", "Byåsen", "Østbyen", "Lerkendal", "Heimdal", "Saupstad", "Tiller", "Strinda", "Byåsen"],
        styre: {
            ordfører: "Rita Ottervik",
            varaordfører: "Ola Lund Renolen",
            størsteparti: "Ap"
        },
        byvåpen: "./img/trondheim.png",
        motto: "Rom og vekst",
        historie: "Trondheim ble grunnlagt av Olav Tryggvason i 997 og var Norges hovedstad frem til 1217. Byen er Norges tredje største og er en av de raskest voksende byene i landet. Byen er kjent for sin vakre beliggenhet ved Nidelva og er et populært turistmål."
    }, {
        navn: "Stavanger",
        folkemengde: 133803,
        fylke: "Rogaland",
        bydeler: ["Hillevåg", "Hundvåg", "Eiganes og Våland", "Madla", "Storhaug", "Tasta", "Hinna", "Sandnes", "Sola", "Randaberg", "Rennesøy", "Klepp", "Time", "Gjesdal", "Hå", "Sola", "Randaberg", "Rennesøy", "Klepp", "Time", "Gjesdal", "Hå"],
        styre: {
            ordfører: "Kari Nessa Nordtun",
            varaordfører: "Bjørg Tysdal Moe",
            størsteparti: "Ap"
        },
        byvåpen: "./img/stavanger.png",
        motto: "Ut mot havet",
        historie: "Stavanger ble grunnlagt av Erling Skjalgsson i 1125 og var Norges hovedstad frem til 1299. Byen var en av de viktigste byene i Hansaforbundet og var Norges største by frem til 1830. Stavanger er i dag Norges fjerde største by og er en av de raskest voksende byene i landet. Byen er kjent for sin vakre beliggenhet mellom fjellene og havet, og er et populært turistmål."
    }, {
        navn: "Kristiansand",
        folkemengde: 63814,
        fylke: "Agder",
        bydeler: ["Vågsbygd", "Grim", "Hellemyr", "Tinnheia", "Justvik", "Randesund", "Søm", "Hånes", "Strai", "Hånes", "Strai"],
        styre: {
            ordfører: "Jan Oddvar Skisland",
            varaordfører: "Jørgen Kristiansen",
            størsteparti: "Ap"
        },
        byvåpen: "./img/kristiansand.png",
        motto: "Med hjertet i byen",
        historie: "Kristiansand ble grunnlagt av Erling Skjalgsson i 1125 og var Norges hovedstad frem til 1299. Byen var en av de viktigste byene i Hansaforbundet og var Norges største by frem til 1830. Kristiansand er i dag Norges sjette største by og er en av de raskest voksende byene i landet. Byen er kjent for sin vakre beliggenhet mellom fjellene og havet, og er et populært turistmål."
    }, {
        navn: "Bærum",
        folkemengde: 126640,
        fylke: "Viken",
        bydeler: ["Sandvika", "Haslum", "Løkeberg", "Stabekk", "Høvik", "Lysaker", "Jar", "Rud", "Ryen", "Sandvika", "Haslum", "Løkeberg", "Stabekk", "Høvik", "Lysaker", "Jar", "Rud", "Ryen"],
        styre: {
            ordfører: "Henrik Asheim",
            varaordfører: "Kristine Næss",
            størsteparti: "Høyre"
        },
        byvåpen: "./img/bærum.png",
        motto: "Videre sammen",
        historie: "Bærum ble grunnlagt av Erling Skjalgsson i 1125 og var Norges hovedstad frem til 1299. Byen var en av de viktigste byene i Hansaforbundet og var Norges største by frem til 1830. Bærum er i dag Norges femte største by og er en av de raskest voksende byene i landet. Byen er kjent for sin vakre beliggenhet mellom fjellene og havet, og er et populært turistmål."
    }, {
        navn: "Fredrikstad",
        folkemengde: 58357,
        fylke: "Viken",
        bydeler: ["Gamlebyen", "Kråkerøy", "Borge", "Cicignon", "Gressvik", "Rolvsøy", "Sellebakk", "Trosvik", "Værste", "Gamlebyen", "Kråkerøy", "Borge", "Cicignon", "Gressvik", "Rolvsøy", "Sellebakk", "Trosvik", "Værste"],
        styre: {
            ordfører: "Jon-Ivar Nygård",
            varaordfører: "Kari Agerup",
            størsteparti: "Ap"
        },
        byvåpen: "./img/fredrikstad.png",
        motto: "Fremad, Fremad!",
        historie: "Fredrikstad ble grunnlagt av Erling Skjalgsson i 1125 og var Norges hovedstad frem til 1299. Byen var en av de viktigste byene i Hansaforbundet og var Norges største by frem til 1830. Fredrikstad er i dag Norges syvende største by og er en av de raskest voksende byene i landet. Byen er kjent for sin vakre beliggenhet mellom fjellene og havet, og er et populært turistmål."
    }, {
        navn: "Tromsø",
        folkemengde: 58357,
        fylke: "Troms og Finnmark",
        bydeler: ["Sentrum", "Tromsdalen", "Kvaløysletta", "Tønsvika", "Holt", "Kroken", "Langnes", "Tomasjord", "Kvaløya", "Kvaløysletta", "Tønsvika", "Holt", "Kroken", "Langnes", "Tomasjord", "Kvaløya"],
        styre: {
            ordfører: "Gunnar Wilhelmsen",
            varaordfører: "Kristin Røymo",
            størsteparti: "Ap"
        },
        byvåpen: "./img/tromsø.png",
        motto: "Nordens Paris",
        historie: "Tromsø ble grunnlagt av Erling Skjalgsson i 1125 og var Norges hovedstad frem til 1299. Byen var en av de viktigste byene i Hansaforbundet og var Norges største by frem til 1830. Tromsø er i dag Norges åttende største by og er en av de raskest voksende byene i landet. Byen er kjent for sin vakre beliggenhet mellom fjellene og havet, og er et populært turistmål."
    }, {
        navn: "Drammen",
        folkemengde: 100279,
        fylke: "Viken",
        bydeler: ["Drammen", "Strømsø", "Brakerøya", "Åssiden", "Fjell", "Konnerud", "Skoger", "Tangen", "Drammen", "Strømsø", "Brakerøya", "Åssiden", "Fjell", "Konnerud", "Skoger", "Tangen"],
        styre: {
            ordfører: "Monica Myrvold Berg",
            varaordfører: "Jonas Andersen Øglænd",
            størsteparti: "Ap"
        },
        byvåpen: "./img/drammen.png",
        motto: "Byen mellom de seks fjell",
        historie: "Drammen ble grunnlagt av Erling Skjalgsson i 1125 og var Norges hovedstad frem til 1299. Byen var en av de viktigste byene i Hansaforbundet og var Norges største by frem til 1830. Drammen er i dag Norges niende største by og er en av de raskest voksende byene i landet. Byen er kjent for sin vakre beliggenhet mellom fjellene og havet, og er et populært turistmål."
    }, {
        navn: "Bodø",
        folkemengde: 52691,
        fylke: "Nordland",
        bydeler: ["Sentrum", "Mørkved", "Rønvik", "Mørkved", "Rønvik"],
        styre: {
            ordfører: "Irene Heng Lauvsnes",
            varaordfører: "Morten Skandfer",
            størsteparti: "Ap"
        },
        byvåpen: "./img/bodø.png",
        motto: "Byen mellom de åtte fjell",
        historie: "Bodø ble grunnlagt av Erling Skjalgsson i 1125 og var Norges hovedstad frem til 1299. Byen var en av de viktigste byene i Hansaforbundet og var Norges største by frem til 1830. Bodø er i dag Norges tiende største by og er en av de raskest voksende byene i landet. Byen er kjent for sin vakre beliggenhet mellom fjellene og havet, og er et populært turistmål."
    }
]

//Oppgave 1
// Bruk programmering til å endre innbyggertallet til Oslo, Bergen og Trondheim, slik at disse er riktige i forhold til siste tall. (Oslo: 709 037, Bergen: 288133, Trondheim: 212660)



//Oppgave 2
// Lag en funksjon som tar inn en by som parameter og returnerer en liste med bydelene i byen. Kall funksjonen med Oslo som parameter og skriv ut resultatet i konsollen.



//Oppgave 3
// Bydelene i blant annet Fredrikstad, Kristiansand og Bærum er ikke riktige. Lag en løkke som går gjennom alle byene og fjerne dubletter i bydelslista. 



//Oppgave 4
// Historien til de siste byene er mildt sagt tvilsom. Bruk stringmanipulering til å endre Kristiansands historie, slik at grunnlegger er Christian IV, ikke Erling Skjalgsson.



//Oppgave 5
//Lag en løkke som går gjennom alle byene og sorterer bydelslistene alfabetisk.



//Oppgave 6
//Sorter listen etter folketall, fra minst til størst.