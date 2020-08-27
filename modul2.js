function pathFindingAlgoritam(niz, najkraciPutNiz){
    let prekid=0;
    let nizIstrazenih=[]
    //let najkraciPutNiz=[]
for(let i=0;i<niz.length;i++){
    if((niz[i].istrazen==true)||(niz[i].pocetak==true)){
        nizIstrazenih.push(niz[i])
    }
    if(niz[i].cilj==true&&niz[i].istrazen==true){
        if(niz[i].najkraci==false){
               niz[i].najkraci=true;
               najkraciPutNiz.push(niz[i]);
        }
                console.log('gornji if');
                console.log(najkraciPutNiz.length);
               prekid=1;
    }
}/////prvi for (nezavisan)

if(prekid==0){
for(let i=0;i<nizIstrazenih.length;i++){

    for(let j=0;j<niz.length;j++){

       if(((niz[j].x==nizIstrazenih[i].x&&(niz[j].y==nizIstrazenih[i].y+10||niz[j].y==nizIstrazenih[i].y-10)))||
        ((niz[j].y==nizIstrazenih[i].y&&(niz[j].x==nizIstrazenih[i].x+10||niz[j].x==nizIstrazenih[i].x-10)))){
            if(niz[j].prepreka==false&&niz[j].istrazen==false){
           niz[j].istrazen=true;
           niz[j].roditelj=nizIstrazenih[i].oznaka;
           if(niz[j].pocetak==true){
               niz[j].roditelj=-1;
          }
    
        }
     
      }//if koji ucitava nove(mozda i najbitniji)
   }

}///////drugi for koji trazi i dodeljuje statuse
}///if za prekid
else{
    console.log('elseeeeee');
for(let i=0;i<niz.length;i++){
   
   for(let j=0;j<najkraciPutNiz.length;j++){
                
       if(niz[i].oznaka==najkraciPutNiz[j].roditelj&&niz[i].najkraci==false){
        console.log('ifffffffffff'+ najkraciPutNiz[j].oznaka);
           niz[i].najkraci=true;
           najkraciPutNiz.push(niz[i])
  
       }
   }

}/////for za najkraci puts
}/////else
return najkraciPutNiz;      
}/////kraj


export {pathFindingAlgoritam }