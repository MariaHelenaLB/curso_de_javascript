// <!-- https://github.com/gustavoguanabara/javascript -->
function carregar() {
    var msg = window.document.getElementById('msg')
    var img = window.document.getElementById('imagem')   
    
    var data = new Date()
    var hora = data.getHours()
    var minute = data.getMinutes()

    msg.innerHTML = `Agora são ${hora}H `

    if (hora >= 0 && hora < 12) {
        document.body.style.background = '#81B063'
        img.src = 'm.png'
    } else if (hora >= 12 && hora < 18) {
        document.body.style.background = '#587A85'
        img.src = 't.png'
    } else {
        document.body.style.background = '#30373D'
        img.src = 'n.png'
    }

}
