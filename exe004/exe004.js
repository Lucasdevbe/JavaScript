function carregar() {
    

    var msg = window.document.getElementById('msg')
    var imagem = document.getElementById('imagem')
    var data = new Date()
    var hora = data.getHours

    if (hora >= '00:00' && hora <= '12:00') {
        
        msg.innerHTML = 'olá, Bom dia '

    } else if (hora > '12:00' && hora <= '18:00') {
        
        msg.innerHTML = 'olá, Boa tarde '        
    } else {
        msg.innerHTML = 'olá, Boa noite'
    }

}