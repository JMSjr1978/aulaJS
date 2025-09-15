function carregar() {
    var msg = window.document.getElementById('msg')
    var img = window.document.getElementById('imagem')
    var data = new Date()
    var hora = data.getHours()
        if (hora >= 6 && hora < 12) {
        // Bom dia!
        msg.innerHTML = `Agora são ${hora} horas. Bom dia!`
        img.src ="ex014/fotomanha.png" 
        document.body.style.background = '#e2ad9f'
    } else if (hora >= 12 && hora <= 18) {
        // Boa tarde!
        msg.innerHTML = `Agora são ${hora} horas. Boa tarde!`
        img.src ="ex014/fototarde.png"
        document.body.style.background = '#914242ff'
    } else if (hora >= 18 && hora < 23) {
        // Boa noite!
        msg.innerHTML = `Agora são ${hora} horas. Boa noite!`
        img.src ="ex014/fotonoite.png"
        document.body.style.background = '#363535ff'
    } else {
        // Boa madrugada!
        msg.innerHTML = `Agora são ${hora} horas. Boa madrugada!`
        img.src ="ex014/madrugada250.png"
        document.body.style.background =  '#3d3939ff'

    }
}

