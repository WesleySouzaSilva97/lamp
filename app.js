/**
 * Simples simulador de uma lâmpada
 * @authorWesley Souza
 */

function quebrar() {
   document.getElementById('lamp').src="img/broken.jpg"

    // reproduzindo um arquivo de audio no JS
    // Passo 1: copiar o arquivo de audio para o projeto
    // Passo 2: usar a classe Audio(biblioteca nterna JS)
    let som = new Audio()
    som.play()
    som.src= "sound/glassbreaking.wav"
  
}

function onoff() {
    document.getElementById('interruptor').src="img/swon.png"
    
}
