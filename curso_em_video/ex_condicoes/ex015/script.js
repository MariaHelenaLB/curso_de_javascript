function verificar() {
    var data = new Date()
    var ano = data.getFullYear()
    var fano = document.getElementById('txtano')
    var res = document.querySelector('div#res')

    if (fano.value.length == 0 || fano.value > ano) {
        window.alert('Verifique os dados novamente!')
    } else {
        var fsex = document.getElementsByName('radsex') 
        var idade = ano - Number(fano.value)
        var gênero = ''
        var img = document.createElement('img')
        img.setAttribute('id', 'foto')

        if (fsex[0].checked) {
            gênero = 'Homem'

            if (idade >=0 && idade < 14) {
                //criança
                img.setAttribute('src', 'img/cmenino.png')
            } else if (idade < 21) {
                //adolescente
                img.setAttribute('src', 'img/menino.png')
            } else if (idade < 50) {
                //adulto
                img.setAttribute('src', 'img/homem.png')
            } else {
                //idoso
                img.setAttribute('src', 'img/idoso.png')
            }
        } else if (fsex[1].checked) {
            gênero = 'Mulher'

            if (idade >=0 && idade < 14) {
                //criança
                img.setAttribute('src', 'img/cmenina.png')
            } else if (idade < 21) {
                //adolescente
                img.setAttribute('src', 'img/menina.png')
            } else if (idade < 50) {
                //adulto
                img.setAttribute('src', 'img/mulher.png')
            } else {
                //idoso
                img.setAttribute('src', 'img/idosa.png')
            }
        }
        res.style.textAlign = 'center'
        res.innerHTML = `Detectamos: ${gênero} com ${idade} anos.`
        res.appendChild(img)
    }
}
