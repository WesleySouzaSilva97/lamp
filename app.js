/**
 * Simples simulador de uma lâmpada
 * @authorWesley Souza
 */

// variaveis de apoio

let chave = false //o interruptor inicia desligado
let lampada = true  // a lampada OK (não esta quebrada)

function quebrar() {
    if(lampada === true){
    document.getElementById('lamp').src = "img/broken.jpg"

    // reproduzindo um arquivo de audio no JS
    // Passo 1: copiar o arquivo de audio para o projeto
    // Passo 2: usar a classe Audio(biblioteca nterna JS)
    let som = new Audio()
    som.play()
    som.src = "sound/glassbreaking.wav"
    //apoio a lógica para o JS identificar a lâmpada quebrada
    lampada = false
} 

}

function onoff() { //inicio
    if (chave === false && lampada === true) {
        // ligar a chave 
        document.getElementById('interruptor').src = "img/swon.png"
        chave = true // O JS agora sabe que a chave está ligada
        //acender a lâmpada
        document.getElementById('lamp').src = "img/on.jpg"

    } else if(lampada === true) {
        document.getElementById('interruptor').src = "img/swoff.png"
        chave = false// O JS agora sabe que a chave está desligado
        //desligar a lampada
        document.getElementById('lamp').src = "img/off.jpg"
    }
}