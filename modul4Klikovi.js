
function repaintSaListenerima(visina, sirina, niz, lisener){
    let container=document.getElementById('container');
    container.innerHTML='';
    let idKocke=0;
    for(let i=0;i<visina;i++){
        for(let j=0;j<sirina;j++){
       console.log(idKocke+' ads');
            let kocka=document.createElement('div')
            console.log(lisener);
            if(lisener=='start'){
                let br=idKocke;
                kocka.addEventListener('click', function(){
                    console.log(br);
                    niz[br].pocetak=true;
                    console.log('zoi');
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