import { nacrtajIDodajUListu, repaint } from './modul1.js'
import { pathFindingAlgoritam} from './modul2.js'
import {proveraVelicineTerena,isPocetakPostavljen} from  './modul3Provere.js'
import {repaintSaListenerima} from  './modul4Klikovi.js'
let visina=20;//staticke, sluze za dve funkcije
let sirina=20;//staticke, sluze za dve funkcije
let najkraciPutNiz1=[]//staticka
function glavna(najkraciPutNiz){
       console.log('pokrenuta glavna funkcija sa algoritmom');
    setTimeout(function(){
    pathFindingAlgoritam(niz, najkraciPutNiz)
    repaint(visina, sirina, niz)
    glavna(najkraciPutNiz);
    },100)
    }

let niz=nacrtajIDodajUListu(visina,sirina);
// niz[15].pocetak=true;
// niz[97].cilj=true;
//niz[117].prepreka=true;

repaint(visina, sirina, niz)
let divStart=document.getElementById('startDiv');////////////pocetak postavljanja starta, cilja i prepreka
divStart.addEventListener('click', function(){

    repaint(visina, sirina, niz)
    repaintSaListenerima(visina, sirina, niz, divStart.title)
})
let divCilj=document.getElementById('ciljDiv');
divCilj.addEventListener('click', function(){
    repaint(visina, sirina, niz)
    repaintSaListenerima(visina, sirina, niz, divCilj.title)
})
let divPrepreka=document.getElementById('preprekaDiv');
divPrepreka.addEventListener('click', function(){
    repaint(visina, sirina, niz)
    repaintSaListenerima(visina, sirina, niz, divPrepreka.title)
})

let dugmeVisinaSirina=document.getElementById('dugmeVS');
dugmeVisinaSirina.innerText='Podesi velicinu terena'
dugmeVisinaSirina.addEventListener('click', function(){
       visina=document.getElementById('visina').value;   
       sirina=document.getElementById('sirina').value;
      if(proveraVelicineTerena(visina, sirina)){
      niz = nacrtajIDodajUListu(Number(visina), Number(sirina));
      repaint(visina, sirina, niz)
      }
})

let dugmezapokretanje=document.getElementById('dugmeZaPokretanje')
dugmezapokretanje.innerText='Pokreni'
dugmezapokretanje.addEventListener('click', function(){
    if(isPocetakPostavljen(niz)){
    glavna(najkraciPutNiz1)      
    }
})

