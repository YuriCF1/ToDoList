//Gets
const adTrab = document.getElementById('maisTrabalho')
const linha = document.querySelector('.card_linhas')
let inputsTarefas;
let inputsDescricao;

let id = 0;

let trabalhos;

let telasLimpadas = 0;

var inputTarefa;

// const setBanco = () => JSON.stringify(localStorage.getItem('toDoList')) ?? []; // ?? = Se não existir

// const getBanco = () => JSON.parse(localStorage.getItem('toDoList')) ?? []; // ?? = Se não existir
// const bancoTrabalho = getBanco();

let bancoTrabalho = [
    {'tarefa': "Andar", 'descricao': "Calçada", 'status': ""},
    {'tarefa': "Correr", 'descricao': "Rua", 'status': "checked"},
    {'tarefa': "Nadar", 'descricao': "Piscina", 'status': ""}
    
    
]


const atualizarTela = () => {
    limparTarefas();
    bancoTrabalho.forEach((item, indice) => criarTarefa(item.tarefa, item.descricao,item.status, indice));
    //________________________ESTUDO________________________________
    //Uso do for each
    // numbers.forEach((number, index, array) => {
    //     console.log(array);
    // });

}

const limparTarefas = () => {
    while (linha.firstChild) {
        linha.removeChild(linha.lastChild);
        telasLimpadas++
    }
    
}

function pushBanco()  {
    bancoTrabalho.push ({'tarefa': '', 'descricao': '', 'status': ''});
        atualizarTela()
        console.log(bancoTrabalho)
} 

const atualizarItem = (indice, elementoPai) => {
    bancoTrabalho[indice].status = bancoTrabalho[indice].status === '' ? 'checked' : ''; //Verificação do status
    if (bancoTrabalho[indice].status ==='checked'){
        elementoPai.classList.remove("card_ad");
        elementoPai.classList.add("card_ad__feito");
    } else {
        elementoPai.classList.remove("card_ad__feito");
        elementoPai.classList.add("card_ad");
    } 
}

//_____________________________________CLIQUES___________________________________
const tarefaClicada = (evento) => {
    const elemento = evento.target;
    const elementoPai = (elemento.parentElement.parentElement)
    if (elemento.type === 'button') {
        const indice = elemento.dataset.indice;
        removerItem(indice)
        // console.log(indice) 
    } else if (elemento.type === 'checkbox') {
        const indice = elemento.dataset.indice;
        atualizarItem (indice, elementoPai);      
    }
    const tarefaId = evento.target.dataset.tarefa;
    console.log(tarefaId)
    if (tarefaId > bancoTrabalho.length) {

    }
}

const removerItem = (indice) => {
    bancoTrabalho.splice(indice, 1);
    atualizarTela(); 

}

//____________________________CRIAR TAREFA_____________________
const criarTarefa = (tarefa, descricao, status, indice) => {
    let numMeta = indice + 1;
    const cardNovo = document.createElement(`form`); // Cria um novo elemento <>
    let data = `${indice}`
    cardNovo.setAttribute('data-tarefa', data)

    if (descricao === undefined) {
        descricao = ''
    }
    if (status ==='checked'){
        cardNovo.classList.add(`card_ad__feito`)
    } else {
        cardNovo.classList.add(`card_ad`); // Define o atributo de identificação HTML
    }

    id++
    if (bancoTrabalho.length <= 100) {
        if (tarefa =='[object PointerEvent]') {
            tarefa=''
        }
        
        cardNovo.innerHTML = `
                    <input id='card_ad__titulo${id}' class='card_ad__titulo' type='text' 
                    placeholder='Meta ${numMeta}' value='${tarefa}'>

                    <label for='meta'>O que você vai fazer?</label>

                    <textarea class='card_ad__inputs' id='meta' type='text' 
                    rows='4' cols='10' placeholder='Irei...' data-descricao=''
                    value=''
                    >${descricao}</textarea>

                    <label for='tempo'>Qual o prazo?</label>

                    <div class="botoes">
                        <input type="checkbox" ${status}='' data-indice=${indice}>
                        <input class="btDelet" type="button" value="X" data-indice=${indice}>
                    </div>
        `
        linha.appendChild(cardNovo);
        inputsTarefas = document.querySelectorAll('.card_ad__titulo');
        inputsDescricao = document.querySelectorAll('.card_ad__inputs');
        numMeta++
        // textoTarefas();
        // textoDescrição();
    }
    // console.log(inputs)
}

atualizarTela();
atualizarTela();
atualizarTela();
atualizarTela();

//Por no banco
const porTarefasNoBanco = (tarefaTexto, index) => {
    const task = bancoTrabalho.push ({'tarefa': tarefaTexto});
    console.log(bancoTrabalho)
    console.log(task)
}

const porDescricacaoNoBanco = (descricaoDada, index) => {
    const task = bancoTrabalho.push ({'descricao': descricaoDada});

    console.log(bancoTrabalho)
    console.log(task)
}

adTrab.addEventListener('click', pushBanco)
linha.addEventListener('click', tarefaClicada)

// Trabalhar com o banco de dados e evoluir a identificação

// //Cliques
// function textoTarefas () {
//     inputsTarefas.forEach((item, index) => {
//         item.addEventListener('click', (inputTask, index) => { //Chamando uma faunção anômima, por padrão já passa dos eventos
//             const tarefaDada = inputTask.target.value
//             console.log(tarefaDada) 
//             porTarefasNoBanco(tarefaDada, index) //Quando é input, value. Texto,textContent 
//         })
//     })

// }

// function textoDescrição () {
//     inputsDescricao.forEach((item, index) => {
//         item.addEventListener('click', (inputTask, index) => { //Chamando uma faunção anômima, por padrão já passa dos eventos
//             const descricaoDada = inputTask.target.textContent
//             console.log(descricaoDada)
//             porDescricacaoNoBanco(descricaoDada, index) //Quando é input, value. Texto,textContent  
// })
// })

// }






// const varredura = () => {
//     let idTask;
//     trabalhos = document.querySelectorAll('.card_ad__titulo')
//     for (let contador = 0; contador < trabalhos.length; contador++) {
//         idTask = `#card_ad__titulo${metasFeitas}`; //template string 
//         console.log(idTask)
//         metasFeitas--
//     }
    
//     inputTarefa = document.querySelectorAll('.card_ad__titulo')
// }
// varredura() // ???

// console.log(trabalhos)

//Olhar o código do vídeo do Código fonte de novo https://youtu.be/NfHVPEzo5Ik
// Erro em inserir item