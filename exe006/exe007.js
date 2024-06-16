function ate10() {

    // Pegando variavis e campos da pagina
    var msg = document.querySelector("#msg")
    var numero = Number(document.getElementById('numero').value)
    
    // criando contador para o numero escolhido
    for (let index = 100; index <= numero; index++) {


        // estabelecendo condição para criar uma div 
        if (index % 100 == 0) {

            // cria uma div dento da tag pai msg
            let divn = document.createElement('div')

            // inserindo conteudo na div filho q
            divn.text += `${index}`

            // colocando dentro a tag pai
            msg.appendChild(divn)

            // imprimido msg
            msg.innerHTML += `${index} `

        } else {

            // se não precisar criar uma nova div para querar o conteúdo insere o numero normalmente
            msg.innerHTML += `${index} `
        }



    }

}