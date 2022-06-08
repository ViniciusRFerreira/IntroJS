function tabuada(){
    let inValor = document.getElementById('inValor')
    let outValor = document.getElementById('outValor')

    let valor = Number(inValor.value);
    for (let i = 0; i <= 10; i++){
        let mult = valor * 1;
        resp += valor + ' X ' + i + ' : ' + mult
    }
    outValor.textContent = resp;
}
let btMostrar = document.getElementById("btnTabuada")
btMostrar.addEventListener('click', tabuada)