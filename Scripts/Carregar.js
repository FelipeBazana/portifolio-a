
const datas = JSON.parse( localStorage.getItem("datas") ) || []

datas.forEach(data => card(data))

function card (data){

    const CardData = `
        <div class="nes-container is-rounded form" >

            <div>

                <p class="title">Name = ${data.name}</p>
                
                <p class="title">${data.id}</p>

                <p>Weight = ${data.weight}</p>  
            
                <p>Price = ${data.price}</p>
            
                <p>Brand = ${data.brand}</p>

                <p>Description:</p>
                <p>${data.description}</p>
            
                <button type="button" onClick="Deleter('${data.id}')" class="nes-btn is-error">Remove</button>


                
            </div>

        </div>    
    ` 
    const card = document.createElement("div")

    card.id = data.id

    card.innerHTML = CardData

    document.querySelector("#lista-de-tarefas").appendChild(card)

}
