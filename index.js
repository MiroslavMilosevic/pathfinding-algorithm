import { nacrtajIDodajUListu, repaint } from './modul1.js'
import { pathFindingAlgoritam} from './modul2.js'
import {proveraVelicineTerena} from  './modul3Provere.js'
import {repaintSaListenerima} from  './modul4Klikovi.js'
let visina=20;//staticke, sluze za dve funkcije
let sirina=20;//staticke, sluze za dve funkcije
let najkraciPutNiz1=[]//staticka
function glavna(najkraciPutNiz){

    setTimeout(function(){
    pathFindingAlgoritam(niz, najkraciPutNiz)
    repaint(visina, sirina, niz)
    glavna(najkraciPutNiz);
    },500)
    }

let niz=nacrtajIDodajUListu(visina,sirina);
// niz[15].pocetak=true;
// niz[97].cilj=true;
//niz[117].prepreka=true;
//console.log(niz);

repaint(visina, sirina, niz)
let div111=document.getElementById('startDiv');
div111.addEventListener('click', function(){
    console.log('maja');
    repaintSaListenerima(visina, sirina, niz, div111.title)
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
    glavna(najkraciPutNiz1)})

