function playSonido (idElementoAudio){
  document.querySelector(idElementoAudio).play();
}
/* const listaDeTeclas = document.querySelectorAll('input[type=button]');
console.log(listaDeTeclas); */

const listaDeteclas = document.querySelectorAll('.tecla');


for (let contador = 0; contador < listaDeteclas.length; contador++) {
  const tecla = listaDeteclas[contador];
  const instrumento = tecla.classList[1];
  console.log(instrumento)

  const idAudio = `#sonido_${instrumento}`;
  console.log(idAudio)

  tecla.onclick = function(){
    playSonido(idAudio);
  };
  tecla.onkeydown = function(evento){
    
    if(evento.code === 'Space' || evento.code === 'Enter'){
      tecla.classList.add('activa');
    }
    console.log(evento.code === 'Space' || evento.code === 'Enter');
  }
  tecla.onkeyup = function(){
    tecla.classList.remove('activa');
  }
  

}





//9 elementos que tenemos como botones
/* while(contador < 9){
  const tecla = listaDeteclas[contador]
  const instrumento = tecla.classList[1];
  console.log(instrumento)

  const idAudio = `#sonido_${instrumento}`
  console.log(idAudio)

  tecla.onclick = function(){
    playSonido(idAudio)
  };
  contador = contador + 1;
} */








//ejemplo de como se realiza con mucho codigo
/* function clap() {
  document.querySelector('#sonido_tecla_clap').play()
}
clap()

document.querySelector('.tecla_clap').onclick = clap;
 */



