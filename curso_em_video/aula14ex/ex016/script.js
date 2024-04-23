function contar() {
    var inicio = document.getElementById('txti')
    var fim = document.getElementById('txtf')
    var pula = document.getElementById('txtp')
    var res = document.getElementById('res')

    if (inicio.value.length == 0 || fim.value.length == 0 || pula.value.length == 0) {
        res.innerHTML = 'Impossível contar!'
        window.alert ('[ERRO] revise se faltou algum dado!')
        
    } else {
        res.innerHTML = 'Contando: <br>'
        var i = Number(inicio.value)
        var f = Number(fim.value)
        var p = Number(pula.value)

        if (p <= 0) {
            window.alert('Contagem Inválida')
        }

        if (i < f) {
            //contagem crescente
            for(var c = i; c <= f; c += p) {
                res.innerHTML += ` ${c} \u{1F92F}`
            }
        } else {
            //contagem regressiva
            for(var c = i; c >= f; c -= p) {
                res.innerHTML += ` ${c} \u{1F92F}`
            }
        }
        res.innerHTML += `\u{1F973}`
    } 
}