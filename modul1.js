
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
//console.log(lista);
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
        let br=document.createElement('br');
        container.appendChild(br)
    }
}
// let obj={ x:j*10, y:i*10, pocetak:false, istrazen:false, cilj:false, roditelj:-1, oznaka:idKocke-1, prepreka:false, najkraci:false} 
// Math.floor(Math.random() * 3); 
// lista.push(obj)
function nacrtajIDodajUListuPrepreka(visina, sirina){
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
        let obj={ x:j*10, y:i*10, pocetak:false, istrazen:false, cilj:false, roditelj:-1, oznaka:idKocke-1, prepreka:false, najkraci:false} 
      let tf=[false,true, false]  
      let r = tf[Math.floor(Math.random() * 3)]; 
      if(r){obj.prepreka=true
    }else{ obj.prepreka=false }

      lista.push(obj)
       }
       let br=document.createElement('br');
           container.appendChild(br)
   }
   //console.log(lista);
   return lista
   }///kraj funkcije






export { nacrtajIDodajUListu, repaint,nacrtajIDodajUListuPrepreka }