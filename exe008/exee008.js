let numero = []
let msg = window.document.querySelector('#msg')



function finalizar() {

} function limpar() {

    numero = []
    msg.innerHTML = ``
    array.innerHTML = ``


}

function inserir() {



    numero.push(Number(document.getElementById('numero').value))



    let i = 0

    while (i < numero.length) {

        msg.innerHTML = ``
        let msg_itens = document.createElement('div')
        msg_itens.Number = numero[i]

        msg.appendChild(msg_itens)

        msg.innerHTML += `${numero[i]}`



        i++
    }

    for (let index = 0; index < numero.length; index++) {

        let array = document.getElementById('array')

        array.innerHTML = `${numero}`
    }


}