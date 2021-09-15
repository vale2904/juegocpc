let calcular=document.getElementById("calcular");
let next=document.getElementById("next");

calcular.addEventListener("click",verificarRespuesta);
next.addEventListener("click",numeros);


function verificarRespuesta(){
    

    let numero1=document.getElementById("numero1").value;
    let numero2=document.getElementById("numero2").value;
    let resultado=document.getElementById("resultado").value;
    let gift=document.getElementById("gift");

    let calcularResultado= Number(numero1)+Number(numero2);
    
    if(resultado==calcularResultado){

        console.log("ok");
        gift.classList.remove("invisible");
        gift.src="https://giphy.com/embed/RLW9YEaSBfBMt79fm4";

    }else{
        console.log("ojo");
        gift.classList.remove("invisible");
        gift.src="https://giphy.com/embed/xU9TT471DTGJq";

    }



}
function numeros(){
    gift.classList.remove("visible");
     numero1.value=getRandomInt(1,10);
    numero2.value=getRandomInt(1,10);

    function getRandomInt(min, max) {
        return Math.floor(Math.random() * (max - min)) + min;
      }
    
}
 
  