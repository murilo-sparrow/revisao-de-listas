var ui = {
    frase: document.getElementById('frase'),
    voltar: document.getElementById('voltar'),
    ir: document.getElementById('ir'),
}

var frases = [
    'Te desejo',
    'um feliz Natal',
    'e um ótimo Ano Novo',
]
var indice = 0


function atualizar() {
    ui.frase.innerHTML = frases[indice]
    if (indice === frases.length - 1) {
        ui.ir.disabled = true
    } else {
        ui.ir.disabled = false
    }
    if (indice === 0) {
        ui.voltar.disabled = true
    } else {
        ui.voltar.disabled = false
    }
}

function ir() {
    indice++
    atualizar()
}

function voltar() {
    indice--
    atualizar()
}

atualizar()