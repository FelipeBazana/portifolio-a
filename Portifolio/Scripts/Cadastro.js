document.querySelector('#save').addEventListener('click', () => {

    
    const form = document.querySelector('form')

    const data = {

        id: 'id_' + new Date().getTime(),

        name: form.name.value,

        weight: form.weight.value,

        price: form.price.value,

        brand: form.brand.value,

        description: form.description.value

    }

    error(data)

    save(data)

})

function save(data){

    if (data.name.trim() != '' & data.weight.trim() != '' & data.weight.trim() > '0' & data.price.trim() != '' & data.price.trim() > '0' & data.brand.trim() != ''){

        const datas = JSON.parse( localStorage.getItem("datas") ) || []

        datas.push(data)

        localStorage.setItem("datas", JSON.stringify(datas))

        window.location.href = "LoadNess.html"
    }
}



function error(data){

    reset()

    if (data.name.trim() == ''){
        
        document.querySelector("#name").classList.add("is-error")
        document.querySelector("#name-erro").innerText = "o nome é obrigatório"
        
    }

    if (data.weight.trim() == '' || data.weight.trim() <= '0'){
        
        document.querySelector("#weight").classList.add("is-error")
        document.querySelector("#weight-erro").innerText = "o peso é obrigatório e maior que zero"
        
    }

    if (data.price.trim() == '' || data.price.trim() <= '0'){
        
        document.querySelector("#price").classList.add("is-error")
        document.querySelector("#price-erro").innerText = "o preco é obrigatório e maior que zero"
        
    }

    if (data.brand.trim() == ''){
        
        document.querySelector("#brand").classList.add("is-error")
        document.querySelector("#brand-erro").innerText = "a marca é obrigatório"
        
    }

}

function reset(){  

    const text = document
                .querySelectorAll("input.is-error, textarea.is-error")

    text
        .forEach(input => input.classList.remove("is-error") )

    document.querySelectorAll(".nes-field span")
            .forEach( span => span.innerText = "")

}



    
