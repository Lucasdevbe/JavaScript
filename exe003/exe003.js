function carregar() {
    var msg = window.document.getElementById('msg')
    var imagem = window.document.getElementById('imagem')
    var data = new Date()
    var hora = data.getHours()
    imagem = 

    msg.innerHTML = `agora sao ${hora} horas`
    msg.innerHTML = `hoje é dia ${data}`
    imagem.innerHTML = ``

}