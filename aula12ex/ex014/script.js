function carregar() {
    var msg = document.getElementById('msg')
    var img = document.getElementById('imagem')
    var agora = new Date()
    var hora = agora.getHours()
    msg.innerText = `Agora são ${hora} hora(s)`
    if (hora >= 0 && hora < 5){
        // MADRUGADA
        img.src = 'madruga.png'
        document.body.style.background = 'black'
    }else if (hora < 12){
        // BOM DIA!
        img.src = 'manha.png'
        document.body.style.background = '#c9af5d'
    }else if (hora < 18){
        // BOA TARDE!
        img.src = 'tarde.png'
        document.body.style.background = '#fbcf90'
    }else{
        // BOA NOITE!
        img.src = 'noite.png'
        document.body.style.background = '#153041'
    }
}