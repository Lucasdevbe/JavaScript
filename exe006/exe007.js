function ate10() {
    

    var msg = document.querySelector("#msg")
    var numero = Number(document.getElementById('numero').value)
  

    
        

    for (let index = 0; index < numero; index++) {

       

        if (index % 5 == 0) {
    
            let divn = document.createElement('div')
            

            msg.appendChild(divn)
            
            
        } 

        

    }
   
}