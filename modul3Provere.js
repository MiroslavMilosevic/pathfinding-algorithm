function proveraVelicineTerena(visinaValue, sirinaValue){
     if((Number(visinaValue)<=20&&Number(visinaValue)>0)&&(Number(sirinaValue)<=40&&Number(sirinaValue)>0)){
         return true;
     }else{
         console.log('dhfkashkljdfas');
         return false;
     }
}///////////////////////////////////////////////////////////////////////
function isPocetakPostavljen(niz){
      for(let i=0;i<niz.length;i++){
          if(niz[i].pocetak==true){
              return true;
          }
      }
      return false;
}///////////////////////////////////////////////////////////////////////
function isCiljPostavljen(niz){
    for(let i=0;i<niz.length;i++){
        if(niz[i].cilj==true){
            return true;
        }
    }
    return false;
}//////////////////////////////////////////////////////////////////////////



export {proveraVelicineTerena, isPocetakPostavljen, isCiljPostavljen}