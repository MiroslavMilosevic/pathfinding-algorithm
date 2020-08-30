function skidenjeStarta(niz){
for(let i=0;i<niz.length;i++){
    if(niz[i].pocetak==true){
        niz[i].pocetak=false;
    }}}
    function skidenjeCilja(niz){
        for(let i=0;i<niz.length;i++){
            if(niz[i].cilj==true){
                niz[i].cilj=false;
            }}}


function repaintSaListenerima(visina, sirina, niz, lisener){
    let container=document.getElementById('container');
    container.innerHTML='';
    let idKocke=0;
    for(let i=0;i<visina;i++){
        for(let j=0;j<sirina;j++){
  //     console.log(idKocke+' ads');
            let kocka=document.createElement('div')
           // console.log(lisener);
            if(lisener=='start'){
                let br=idKocke;
                kocka.addEventListener('click', function(){
                    skidenjeStarta(niz);
                    niz[br].pocetak=true;
                    repaintSaListenerima(visina, sirina, niz, lisener)
                })   
            }else if(lisener=='cilj'){
                let br=idKocke;
                kocka.addEventListener('click', function(){
                    skidenjeCilja(niz);
                    niz[br].cilj=true;
                    repaintSaListenerima(visina, sirina, niz, lisener)
                })
            }else if(lisener=='prepreka'){
                let br=idKocke;
                kocka.addEventListener('dragover', function(){
                    niz[br].prepreka=true;
                    repaintSaListenerima(visina, sirina, niz, lisener)
                })
                kocka.addEventListener('click', function(){
                    console.log(123);
                  //  if(niz[br].prepreka=false){
                    niz[br].prepreka=!niz[br].prepreka
                // }else{
                //     niz[br].prepreka=false;
                // }
                    repaintSaListenerima(visina, sirina, niz, lisener)
                })            
            }
            kocka.className='kocke';
            kocka.id=idKocke;
            // kocka.innerText=idKocke
            // kocka.setAttribute('style','color:white')
            if(niz[idKocke].pocetak==true){
                kocka.className='pocetak';
            }else if(niz[idKocke].cilj==true){
                kocka.className='cilj';
            }else if(niz[idKocke].pocetak==false&&niz[idKocke].istrazen==true&&niz[idKocke].cilj==false&&niz[idKocke].prepreka==false&&niz[idKocke].najkraci==false){
                kocka.className='istrazen';
            }else if(niz[idKocke].pocetak==false&&niz[idKocke].cilj==true&&niz[idKocke].prepreka==false&&niz[idKocke].najkraci==false){
                kocka.className='cilj';
            }else if(niz[idKocke].prepreka==true&&niz[idKocke].najkraci==false){
                kocka.className='prepreka';
            }else if(niz[idKocke].najkraci==true){
                 kocka.className='najkraciPut'
            }
            idKocke++;
         
            container.appendChild(kocka)

        }
     //   idKocke++;
        let br=document.createElement('br');
        container.appendChild(br)
    }
}

export { repaintSaListenerima }