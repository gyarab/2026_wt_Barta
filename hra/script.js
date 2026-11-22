let mista = [];
const skore = document.getElementById("skore");
const skoreFinal = document.getElementById("skoreFinal");
console.log("Vítejte v trackovacím programu funkce otoc()");

for (let i = 0; i < 12; i++){
    mista[i] = document.getElementById(i);
}

let pokusu = 0; // počet otočení
let posl_cislo = 0; // poslední otočené číslo, pokud sudý tah
let lzeOtocitVse = true; // neaktivní blokace otáčení

// let karticky = [1, 2, 3, 4, 5, 6, 1, 2, 3, 4, 5, 6];
let karticky = ["52t", "KT8", "NB18", "RegioFox", "RegioPanter", "Trollino24", "52t", "KT8", "NB18", "RegioFox", "RegioPanter", "Trollino24"];

let noveKarticky = []; // zamíchaný seznam kartiček
let neotacet = []; // kartičky uhodnuté a které nelze otáčet zpět
zamichat();

function otoc(cislo){
    console.log("Otáčím: " + cislo);
    if (lzeOtocit(cislo) == true && lzeOtocitVse == true){
        console.log("Úspěšná autorizace");
        console.log("Nyní nelze otáčet");
        lokace = "./Karticky/" + noveKarticky[cislo] + ".png";
        mista[cislo].src = lokace;
        console.log("Otáčím");
        pokusu = pokusu + 1;
        console.log("Nyní pokusů: " + pokusu);

        if (jeSuda(pokusu)){
            console.log("Číslo je sudé - kontrola");
            if (noveKarticky[cislo] == noveKarticky[posl_cislo]){
                neotacet.push(cislo, posl_cislo);
                console.log("Karty jsou stejné -> již nesmí být otočeny");
                zkontrolujHotovost();
            } else{
                console.log("Karty nejsou stejné -> čekám");
                lzeOtocitVse = false;
                setTimeout(() => {
                    mista[posl_cislo].src = "./Karticky/zakryteLogoPexeso2.png";
                    mista[cislo].src = "./Karticky/zakryteLogoPexeso2.png";
                    lzeOtocitVse = true;
                }, 500);
                console.log("Karty zpět otočeny");
            }
            skore.innerHTML = pokusu / 2;
        }
        else{
            console.log("Číslo není sudé, pokračuji");
            posl_cislo = cislo;
            console.log("Zaznamenávám poslední číslo: " + posl_cislo);
        }
        console.log("Nyní lze znovu otáčet");
        console.log(".");
    }

}

function lzeOtocit(cislo){
    for(let i = 0; i < 12; i++){
        if (neotacet.includes(cislo)){
            return false;
        }
    }
    return true;
}

function zkontrolujHotovost(){
    if (neotacet.length == 12){
        skoreFinal.innerHTML = pokusu / 2;
        document.getElementById('hotovo').showModal();
    }
}

function reset(){
    for(let i = 0; i < 12; i++){
        mista[i].src = "./Karticky/zakryteLogoPexeso2.png";
        pokusu = 0;
        skore.innerHTML = 0;
        neotacet = [];
    }
}

function zamichat(){

    reset();

    let obsazene_pozice = [];

    for (let i = 0; i < karticky.length; i++){

        let spravneCislo = false;

        while(spravneCislo == false){

            let moznaPozice = Math.floor(Math.random() * 12);

            if (!(obsazene_pozice.includes(moznaPozice))){

                noveKarticky[i] = karticky[moznaPozice];
                obsazene_pozice.push(moznaPozice);
                spravneCislo = true;
            }
        }
    }
}

function jeSuda(cislo){
    let zaokrouhlit = Math.floor(cislo / 2);
    if (zaokrouhlit * 2 == cislo){
        return true;
    }
    else{
        return false;
    }
}
