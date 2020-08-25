import { nacrtajIDodajUListu, repaint } from './modul1.js'
import { pathFindingAlgoritam} from './modul2.js'
let visina=10;
let sirina=10;
let niz=nacrtajIDodajUListu(visina,sirina);
niz[15].pocetak=true;
niz[47].cilj=true;
// niz[45].prepreka=true;
// niz[35].prepreka=true;
// niz[36].prepreka=true;
// niz[37].prepreka=true;
repaint(visina, sirina, niz)
function glavna(){

setTimeout(function(){
pathFindingAlgoritam(niz)
repaint(visina, sirina, niz)
//console.log(niz);
glavna();
},600)
}
glavna();