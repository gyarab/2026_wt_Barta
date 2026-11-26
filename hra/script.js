let mista = [];
const skore = document.getElementById("skore");
const skoreFinal = document.getElementById("skoreFinal");

for (let i = 0; i < 12; i++){
    mista[i] = document.getElementById(i);
}

let pokusu = 0; // počet otočení

let posl_cislo = 100;
let prave_cislo = 100;
let lzeOtocitVse = true; // neaktivní blokace otáčení při přiřazení nesprávné dvojice

let karticky = ["52t", "KT8", "NB18", "RegioFox", "RegioPanter", "Trollino24", "52t", "KT8", "NB18", "RegioFox", "RegioPanter", "Trollino24"];

let noveKarticky = []; // zamíchaný seznam kartiček
let neotacet = []; // kartičky uhodnuté a které nelze otáčet zpět
zamichat();

function otoc(cislo){
    if (lzeOtocit(cislo) == true && lzeOtocitVse == true){
        lokace = "./Karticky/" + noveKarticky[cislo] + ".png";
        mista[cislo].src = lokace;
        pokusu = pokusu + 1;

        if (jeSuda(pokusu)){
            prave_cislo = cislo;
            if (noveKarticky[cislo] == noveKarticky[posl_cislo]){
                neotacet.push(cislo, posl_cislo);
                zkontrolujHotovost();
                console.log(neotacet);
            } else{
                lzeOtocitVse = false;
                setTimeout(() => {
                    mista[posl_cislo].src = "./Karticky/zakryteLogoPexeso2.png";
                    mista[cislo].src = "./Karticky/zakryteLogoPexeso2.png";
                    lzeOtocitVse = true;
                    posl_cislo = 100; 
                    prave_cislo = 100;
                }, 800);
            }
            skore.innerHTML = pokusu / 2;
        }
        else{
            posl_cislo = cislo;
        }
    }

}

function lzeOtocit(cislo){
    if (neotacet.includes(cislo) || posl_cislo == cislo || prave_cislo == cislo){
        return false;
    }
    else{
        return true;
    }
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
