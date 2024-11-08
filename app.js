/**
 * Simples simulador de uma lâmpada
 * @author Wesley Souza
 */

//variaveisde apois lógico
let chave = false // o interruptor inicia desligada
let lampada = true // a lâmpada está ok

// Pré carregamento do arquivo de áudio 
let som = new Audio("sound/breaking-glass.mp3") // quando é APENAS um som pode colocar ele  dentro do "("sound/breaking-glass.mp3")"


function quebrar() {
    if (lampada === true){
        document.getElementById('lamp').src = "img/broken.jpg"
    //reproduzindo um arquivo de áudio no JS
    //Passo 1: copiar o arquivo de áudio para o projeto
    //Passo 2: usar a classe Audio (biblioteca interna do JS)
    //Passo 3: Pré carregar o arquivo de áudio para sincronizar com a troca de imagem (Experiência do usuario)
    som.play()
    // apoio a lógica para oJS identificar a lâmpada quebrada
    lampada = false
    }
}

function onoff() {
    if (chave === false) {
        document.getElementById('interruptor').src = "img/swon.png"
        chave = true // O JS agora sabe que a chave está ligada
        //verificar se a lâmpada está intacta antes de ascender
        if (lampada === true) {
            document.getElementById('lamp').src = "img/on.jpg"
        }

    } else {
        document.getElementById('interruptor').src = "img/swoff.png"
        chave = false
        //verificar se a lâmpada está intacta antes de ascender
        if (lampada === true) {
            document.getElementById('lamp').src = "img/off.jpg"
        }

    }
}
