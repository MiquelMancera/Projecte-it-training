let preguntaEnCurs = 0;
let preguntaUltima;

let arrBoolRespostes = [];
let respCorrectes = [];

const llistaPreguntes = [
  {
     tipusPreg: "tx",
     enunciatPreg: "Lorem ipsum dolor  *** Correcta = Lorem *** amet, consectetur adipiscing elit. Fusce hendrerit diam vitae urna pulvinar commodo. Suspendisse tristique eu justo in dignissim. Phasellus ut nibh ornare, porttitor sapien a, eleifend massa?",
     respostesPossibles: { 
        a: "",
        b: "",
        c: "",
        d: ""
     },
     respCorrecta: "Lorem"
  },
  {
     tipusPreg: "ch",
     enunciatPreg: "WUltricies *** Correcta = C *** nisi quam metus dictum justo magna litora, condimentum pulvinar libero porttitor sem eleifend odio, bibendum aliquet cursus facilisis lacus hendrerit. Malesuada vestibulum sapien aenean accumsan porttitor nisi hac. ",
     respostesPossibles: {
        a: "Seda ut perspiciatis unde omnis",
        b: "Nemo enim ipsam voluptatem quia",
        c: "At vero eos et accusamus et iusto odio",
        d: "Et harum quidem rerum facilis est et expedita"
     },
     respCorrecta: "c"
  },
  {
     tipusPreg: "ra",
     enunciatPreg: "Nullam tempor magnis *** Correcta = d *** interdum aliquam massa cras metus, eu urna suspendisse eros montes phasellus class quis natoque magnis libero porta id etiam placerat dui, lectus natoque turpis accumsan quis nisl aliquet.",
     respostesPossibles: {
        a: "Massa penatibus potenti pellentesque.",
        b: "Lectus laoreet senectus vitae risus lacinia.",
        c: "Litora rhoncus placerat urna sodales dignissim in mattis, lectus fusce elementum.",
        d: "Et harum quidem rerum facilis est et expedita"
     },
     respCorrecta: "d"
  },
  { 
     tipusPreg: "so",
     enunciatPreg: "Taciti vulputate iaculis  *** Correcta = a ***  ut facilisis ridiculus, curabitur morbi fermentum cubilia cursus, id blandit massa etiam hendrerit.",
     respostesPossibles: {
        a: "Mollis et ultrices lectus morbi nisi quisque imperdiet bibendum id nisl posuere.",
        b: "Condimentum himenaeos leo cubilia etiam turpis velit dui fames ultricies.",
        c: "Ac neque augue luctus habitasse ad porta cum nulla potenti quisque himenaeos.",
        d: ""
     },
     respCorrecta: "a"
  }
];

ompleRespCorrectes();
pintaQuestionari();

function ompleRespCorrectes(){

  respCorrectes[llistaPreguntes.length];
  for(let i=0; i<llistaPreguntes.length; i++){
    respCorrectes[i]=llistaPreguntes[i].respCorrecta;
  }
}

function pintaQuestionari(){
  let preguntaActualTxt;
  // Variable per associar la sortida a l'element HTML
  let contenidorQuestionari = document.getElementById("contenidorQuestionari");
  let elementArticle, elementTitol, elementEnunciat, elementRespostes, elementGrupBotons;
  let esVisible;
  let tipusPregText;

  for(let preguntaActual=0; preguntaActual<llistaPreguntes.length; preguntaActual++){
    preguntaEnCurs = preguntaActual;
    elementArticle = "";
    elementTitol = "";
    tipusPregText = "";
    elementEnunciat = "";
    elementRespostes = "";
    elementGrupBotons = "";

    preguntaActualTxt = ((preguntaActual+1)<10) ? "0" + (preguntaActual + 1) : preguntaActual + 1;
    
    esVisible = (preguntaActual==0) ? 'elementVisible' : 'elementOcult';
    
    elementArticle = `<article id="pregunta-${preguntaActualTxt}-${llistaPreguntes[preguntaActual].tipusPreg}" class="${esVisible}">`;
      let nouArticle = document.createElement("article");
      nouArticle.id = `pregunta-${preguntaActualTxt}-${llistaPreguntes[preguntaActual].tipusPreg}`;
      nouArticle.classList.add(esVisible);

    switch (llistaPreguntes[preguntaActual].tipusPreg){
      case "tx":
          tipusPregText = "text";
          break;
      case "ch":
          tipusPregText = "Check Box";
          break;
      case "ra":
          tipusPregText = "Radio Button";
          break;
      case "so":
          tipusPregText = "Select One";
          break;
    }

    elementTitol = `<span class="titol">Pregunta #${preguntaActual + 1}(${tipusPregText})</span>`;
    let nouTitol = document.createElement("span");
    nouTitol.classList.add("titol");
    //nouTitol.innerText = `Pregunta #${preguntaActual+1}(${tipusPregText}) `;

    let textTitolPregunta = document.createTextNode(`Pregunta #${preguntaActual+1}(${tipusPregText})`);
      nouTitol.appendChild(textTitolPregunta);
      nouArticle.appendChild(nouTitol);
      contenidorQuestionari.appendChild(nouArticle);
      
    elementEnunciat = `<div class="enunciat"><p>${llistaPreguntes[preguntaActual].enunciatPreg}</p></div>`;

    let nouEnunciatPregunta = document.createElement("div");
    nouEnunciatPregunta.classList.add("enunciat");

    let nouTextEnunciat = document.createElement("p");
    nouTextEnunciat.innerText=`${llistaPreguntes[preguntaActual].enunciatPreg}`;


    elementRespostes= ''
        + '<div class="respostes">'
        + '  <label class="opcio col1">'
        + '    <input type="text" id="'
        +         'resp-' + preguntaActualTxt
        +         '" name="resposta-'
        +         preguntaActual
        +         '" placeholder="Ut enim ad minima veniam" onchange="marcaComResposta()"/>'
        + '  </label>'
        + '</div> <!-- FINAL <div class="respostes">-->';


       elementGrupBotons = '<div class="col2 centrat">'
         + '  <button id="btAnt'
         + preguntaActualTxt
         + '" disabled onclick="passaAnterior(this)">&lt;&lt; Anterior</button>'
         + '  <button id="btSeg'
         + preguntaActualTxt
         + '" disabled onclick="passaSeguent(this)">Següent >></button>'
         + '</div>';


    console.log ("elementArticle = " + elementArticle);
    console.log ("elementTitol = " + elementTitol);
    console.log ("elementEnunciat = " + elementEnunciat);
    console.log ("elementRespostes = " + elementRespostes);
    console.log ("elementGrupBotons = " + elementGrupBotons);

   //  contenidorQuestionari.innerHTML += elementArticle 
   //      + elementTitol
   //      + elementEnunciat
   //      + elementRespostes
   //      + elementGrupBotons
   //      + '</article>';

  } 
  


}