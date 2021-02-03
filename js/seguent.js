function passaSeguent(objRebut){
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
}


function passaAnterior(objRebut){
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
}

function mostraElement(idRebut){
  document.getElementById(idRebut).classList.add("elementVisible");
  document.getElementById(idRebut).classList.remove("elementOcult");
}

function amagaElement(idRebut){
  document.getElementById(idRebut).classList.remove("elementVisible");
  document.getElementById(idRebut).classList.add("elementOcult");
}