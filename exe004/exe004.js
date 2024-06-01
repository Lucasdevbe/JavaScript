function carregar() {
    

    var msg = window.document.getElementById('msg')
    var imagem = document.getElementById('imagem')
    var data = new Date()
    var hora = data.getHours()

    if (hora >= '00' && hora <= '12') {
        
        msg.innerHTML = 'olá, Bom dia '

    } else if (hora > '12' && hora <= '22') {
        
        msg.innerHTML = 'olá, Boa tarde '        
    } else {

        msg.innerHTML = `agora sao ${hora} horas`
        
    }


}