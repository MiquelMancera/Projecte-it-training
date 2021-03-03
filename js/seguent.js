preguntaEnCurs = 0;

for (var i = 0; i <= llistaPreguntes.length; i++) {
  arrBoolRespostes.push(false);
};

function marcaComResposta(){
  arrBoolRespostes[preguntaEnCurs]=true;

  let idBotoAHabilitar = "btSeg0" + (preguntaEnCurs + 1);
  document.getElementById(idBotoAHabilitar).disabled = false;

  // document.getElementById("myBtn").disabled = true;
  // id="btAnt01" 
  // id="btSeg01" 
}

function passaSeguent(objRebut){
  if (preguntaEnCurs == preguntaUltima){
    alert("Ets a la darrera pregunta!" + preguntaEnCurs + " de " + preguntaUltima);
    preguntaEnCurs --;
  } else {
    //alert("Ets a la pregunta " + preguntaEnCurs + " de " + preguntaUltima);
    
    if (arrBoolRespostes[preguntaEnCurs]==false){
      alert("No hi ha cap valor!");
    } else {
      let idObjPregAct = objRebut.parentElement.parentElement.id;
      
      let colArticles = document.getElementsByTagName("article");
      let idObjPregSeg;
      for (let i = 0; i < colArticles.length; i++) {
        if(colArticles[i].id == idObjPregAct){
          idObjPregSeg = colArticles[i+1].id;
          break;
        };
      }
      
      amagaElement(idObjPregAct);
      mostraElement(idObjPregSeg);
      preguntaEnCurs++;
    }
  }


}


function passaAnterior(objRebut){
  alert("Ets a la pregunta " + preguntaEnCurs + " de " + preguntaUltima);
  let idObjPregAct = objRebut.parentElement.parentElement.id; 
  let colArticles = document.getElementsByTagName("article");
  let idObjPregAnt;
    for (let i = 0; i < colArticles.length; i++) {
    if(colArticles[i].id == idObjPregAct){
      idObjPregAnt = colArticles[i-1].id;
      break;
    };
  }
  
  amagaElement(idObjPregAct);
  mostraElement(idObjPregAnt);
  preguntaEnCurs--;

}

function mostraElement(idRebut){
  document.getElementById(idRebut).classList.add("elementVisible");
  document.getElementById(idRebut).classList.remove("elementOcult");
}

function amagaElement(idRebut){
  document.getElementById(idRebut).classList.remove("elementVisible");
  document.getElementById(idRebut).classList.add("elementOcult");
}