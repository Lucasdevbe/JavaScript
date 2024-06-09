

let cliques = 0
let msg = window.document.getElementById('msg')

function clicar() {
    cliques++
    msg.innerHTML= `contador igual a ${cliques}`

}
function zerar(){

    cliques = 0
    msg.innerHTML=`contador igual a 0`
}