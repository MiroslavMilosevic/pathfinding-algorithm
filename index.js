import { nacrtajIDodajUListu, repaint } from './modul1.js'
import { pathFindingAlgoritam} from './modul2.js'
let visina=10;
let sirina=15;
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
function glavna(najkraciPutNiz){

setTimeout(function(){
pathFindingAlgoritam(niz, najkraciPutNiz)
repaint(visina, sirina, niz)
//console.log(niz);
glavna(najkraciPutNiz);
},300)
}
glavna(najkraciPutNiz1);