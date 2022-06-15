//criar referencia aos elementos do html
const frm = document.querySelector('Form')
const respNome = document.querySelector('span')
const respLista = document.querySelector('pre')


const pacientes = [] //declara o vetor global

frm.addEventListener('submit', (e) => {
    e.preventDefault() //formulario nao enviar dados
    const nome = frm.inPaciente.value //obtem o nome do paciente
    pacientes.push(nome) //adiciona elemento no final do vetor
    console.log(pacientes);
    let lista = '' //string para concatenar
    for (let i = 0; i < pacientes.length; i++){
    lista += `${i + 1}. ${pacientes[i]}\n`
    }
    respLista.innerText = lista //exiba a lista de pacientes
    frm.inPaciente.value = ''
    frm.inPaciente.focus() //posiciona o cursor no campo
    
})
frm.btnUrgencia.addEventListener('click', () =>{
    //verifica validações
    if(!frm.checkValidity()){
        alert('Informe o nome do paciente a ser atendido em carater de urgencia')
        frm.inPaciente.focus()
        return //retorna ao form
    }
    const nome = frm.inPaciente.value //obtem o nome do paciente
    pacientes.unshift(nome) //adiciona paciente no inicio do vetor
    let lista = '' //string para concatenar
    //for each aplicado no vetor de pacientes
    pacientes.forEach((paciente, i) => (lista += `${i + 1}. ${pacientes[i]}\n`))
    respLista.innerText = lista //exiba a lista de pacientes
    frm.inPaciente.value = '' //limpa o conteúdo do campo
    frm.inPaciente.focus() //posiciona o cursor no campo

})