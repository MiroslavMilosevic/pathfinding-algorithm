import { nacrtajIDodajUListu, repaint } from './modul1.js'
import { pathFindingAlgoritam} from './modul2.js'
function glavna(najkraciPutNiz){


    setTimeout(function(){
    pathFindingAlgoritam(niz, najkraciPutNiz)
    repaint(visina, sirina, niz)
    //console.log(niz);
    glavna(najkraciPutNiz);
    },500)
    }
let visina=25;
let sirina=25;
let niz=nacrtajIDodajUListu(visina,sirina);
niz[15].pocetak=true;
niz[67].cilj=true;

niz[30].prepreka=true;
niz[31].prepreka=true;
niz[32].prepreka=true;
niz[33].prepreka=true;
niz[34].prepreka=true;
niz[35].prepreka=true;
niz[36].prepreka=true;
niz[37].prepreka=true;
niz[38].prepreka=true;
niz[39].prepreka=true;
niz[40].prepreka=true;
niz[41].prepreka=true;
niz[43].prepreka=true;
niz[44].prepreka=true;
niz[56].prepreka=true;
niz[71].prepreka=true;
niz[86].prepreka=true;
niz[87].prepreka=true;
niz[102].prepreka=true;
niz[117].prepreka=true;
repaint(visina, sirina, niz)
let najkraciPutNiz1=[]

let dugmeVisinaSirina=document.getElementById('dugmeVS');
dugmeVisinaSirina.innerText='Podesi'
dugmeVisinaSirina.addEventListener('click', function(){
      let visina2=document.getElementById('visina').value;   
      let sirina2=document.getElementById('sirina').value;
     niz = nacrtajIDodajUListu(Number(visina2), Number(sirina2));

})


let dugmezapokretanje=document.getElementById('dugmeZaPokretanje')
dugmezapokretanje.innerText='Pokreni'
dugmezapokretanje.addEventListener('click', function(){
    glavna(najkraciPutNiz1)})

