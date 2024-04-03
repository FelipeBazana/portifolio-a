
document.querySelector('#raridade').addEventListener('change', CalculoEndo)
document.querySelector('#nivel-inicial').addEventListener('change', CalculoEndo)
document.querySelector('#nivel-final').addEventListener('change', CalculoEndo)


function CalculoEndo(){

    const Raridade = document.querySelector('#raridade').value

    const NivelInical = document.querySelector('#nivel-inicial').value

    const NivelFinal = document.querySelector('#nivel-final').value

    let Endos = (NivelFinal - NivelInical) * Raridade * 10

    let Creditos = (NivelFinal - NivelInical) * Raridade * 1000

    if (Endos < 0){

        Endos = 0

        Creditos = 0

    }
    

    document.querySelector('#endos').innerText = Endos

    document.querySelector('#creditos').innerText = Creditos
}