//console.log("Ola Mundo!")
function calcularMedia(){
    //criar referencia aos elementos da pagina

    let inNome = document.getElementById("inNome")
    let inNota1 = document.getElementById("inNota1")
    let inNota2 = document.getElementById("inNota2")
    let outNome = document.getElementById("outNome")
    let outMedia = document.getElementById("outMedia")
    let outSituacao = document.getElementById("outSituacao")

    //obtem os valores dos campos de edição da página
    let nome = inNome.value;
    let nota1 = Number(inNota1.value);
    let nota2 = Number(inNota2.value);
    
    //calcular media das notas
    let media = (nota1 + nota2) / 2;

    //criar estrutura condicional para verificação da condição do aluno
    if(media >= 7) {
        //apresenta os dado na tela
        outMedia.textContent = 'A média é: ' + media.toFixed(2);
        outNome.textContent = 'Nome: ' + nome
        outSituacao.textContent = 'Parabéns você vai sair so IFPR'
        outSituacao.style.color = 'green'
    } else if (media >= 4){
        outMedia.textContent = 'A média é: ' + media.toFixed(2);
        outNome.textContent = 'Nome: ' + nome
        outSituacao.textContent = 'Você está de exame'
        outSituacao.style.color = 'orange'
    } else{
        outMedia.textContent = 'A média é: ' + media.toFixed(2);
        outNome.textContent = 'Nome: ' + nome
        outSituacao.textContent = 'Você falhou, continuará no IFPR'
        outSituacao.style.color = 'red'
    }

    
}

//Criar referência ao elemento

let btResultado = document.getElementById("btnCalcular")
//registrar um evento de click a função calcularMedia
btResultado.addEventListener('click', calcularMedia)