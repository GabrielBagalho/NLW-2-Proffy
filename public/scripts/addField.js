//procurar o botão
document.querySelector("#add-time")
.addEventListener('click', cloneField)

// quando clicar no botão

// Execultar uma ação
function cloneField() {
    // duplicar os campos. que campos?
    const newFieldContainer = document.querySelector(".schedule-item").cloneNode(true)

    // Pegar os campos. que campos? 
    const fields = newFieldContainer.querySelectorAll("input")
    
    // para cada campo, limpar
    fields.forEach(function(field){
        //pegar o filds do momento e limpa ele
        field.value = ""
    })

    // colocar na página
    document.querySelector("#schedule-items").appendChild(newFieldContainer)
} 


