
function nacrtajIDodajUListu(visina, sirina){
 let lista=[]    
let container=document.getElementById('container');
container.innerHTML='';
let idKocke=0;
for(let i=0;i<visina;i++){
    for(let j=0;j<sirina;j++){
    let kocka=document.createElement('div')
    kocka.className='kocke';
    kocka.id=idKocke;
    idKocke++;
    container.appendChild(kocka)
    lista.push
    ( { x:j*10, y:i*10, pocetak:false, istrazen:false, cilj:false, roditelj:-1, oznaka:idKocke-1, prepreka:false, najkraci:false} )
    }
    let br=document.createElement('br');
        container.appendChild(br)

}
console.log(lista);
return lista
}///kraj funkcije


function repaint(visina, sirina, niz){
    let container=document.getElementById('container');
    container.innerHTML='';
    let idKocke=0;
    for(let i=0;i<visina;i++){
        for(let j=0;j<sirina;j++){
            let kocka=document.createElement('div')
            kocka.className='kocke';
            kocka.id=idKocke;
            if(niz[idKocke].pocetak==true){
                kocka.className='pocetak';
            }else if(niz[idKocke].pocetak==false&&niz[idKocke].istrazen==true&&niz[idKocke].cilj==false&&niz[idKocke].prepreka==false){
                kocka.className='istrazen';
            }else if(niz[idKocke].pocetak==false&&niz[idKocke].cilj==true&&niz[idKocke].prepreka==false){
                kocka.className='cilj';
            }else if(niz[idKocke].prepreka==true){
                kocka.className='prepreka';
            }
            idKocke++;
         
            container.appendChild(kocka)

        }
        let br=document.createElement('br');
        container.appendChild(br)
    }
}







export { nacrtajIDodajUListu, repaint }