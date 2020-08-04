var frases = [
    'Te desejo',
    'um feliz Natal',
    'e um ótimo Ano Novo',
]
var indice = 0

var frase = document.getElementById('frase')
frase.innerHTML = frases [0]

    var butaoVoltar = document.getElementById('voltar')
    butaoVoltar.disabled = true

function voltar(elemento) {
    if (indice !== 0) {
        indice = indice - 1

        var butaoIr = document.getElementById('ir')
        butaoIr.disabled = false

        var frase = document.getElementById('frase')
        frase.innerHTML = frases [indice]
    } else {
        elemento.disabled = true
    }
    console.log(indice)
}

function ir(elemento) {
    if (indice !== frases.length - 1) {
        indice = indice + 1
        elemento.disabled = false

        var butaoVoltar = document.getElementById('voltar')
        butaoVoltar.disabled = false
        
        var frase = document.getElementById('frase')
        frase.innerHTML = frases [indice]
    } else {
        elemento.disabled = true
    }
    console.log(indice)
}