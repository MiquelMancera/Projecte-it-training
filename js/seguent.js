function passaSeguent(objRebut){
  let idObjPare = document.getElementById(objRebut.parentElement.id);
  idObjPare.classList.remove("elementVisible");
  idObjPare.classList.add("elementOcult");
  
  let coleccioArticles = document.getElementsByTagName("article");
  let idObjPreguntaSeguent;

  for (let index = 0; index < coleccioArticles.length; index++) {
    if(coleccioArticles[index].id==idObjPare.id){
      idObjPreguntaSeguent=coleccioArticles[index+1].id;
    };
  }

  document.getElementById(idObjPreguntaSeguent).classList.add("elementVisible");
  document.getElementById(idObjPreguntaSeguent).classList.remove("elementOcult");
}