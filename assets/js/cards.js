//Gets


const adTrab = document.getElementById('maisTrabalho')
const linha = document.querySelector('.card_linhas')

let id = 0;

let metasFeitas = 0;
let atualizadas = 0;

let trabalhos;

let telasLimpadas = 0;

var inputTarefa;

// const setBanco = () => JSON.stringify(localStorage.getItem('toDoList')) ?? []; // ?? = Se não existir
const getBanco = () => JSON.parse(localStorage.getItem('toDoList')) ?? []; // ?? = Se não existir


const bancoTrabalho = getBanco();

const atualizarTela = () => {
    limparTarefas();
    bancoTrabalho.forEach((item, indice) => criarTarefa(item.tarefa, item.descricao,item.status, indice));
    atualizadas++
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
    } else if (elemento.type === 'checkbox') {
        const indice = elemento.dataset.indice;
        atualizarItem (indice, elementoPai);      
    }
}

const removerItem = (indice) => {
    bancoTrabalho.splice(indice,1);
    atualizarTela(); 

}

const inserirItem = (indice) => {
        inputTarefa = document.querySelectorAll('.card_ad__titulo')
        inputTarefa.forEach((elemento) => {
            elemento.addEventListener('click', (elemento) =>{
                const task = elemento.target.value
                bancoTrabalho.push ({'tarefa': task});
                console.log(elemento.target)
                console.log(bancoTrabalho)
                console.log(task)
            }) 
        })
    }
    
//____________________________CRIAR TAREFA_____________________
const criarTarefa = (tarefa, descricao, status, indice) => {
    var numMeta = bancoTrabalho.length;
    // if (indice === undefined) {
    //     indice = bancoTrabalho.length + 1;

    // }
    const cardNovo = document.createElement('form'); // Cria um novo elemento <>
    if (status ==='checked'){
        cardNovo.classList.add('card_ad__feito')
    } else {
        cardNovo.classList.add('card_ad'); // Define o atributo de identificação HTML
    }
    id++
    if (bancoTrabalho.length <= 4) {
        if (tarefa =='[object PointerEvent]') {
            tarefa=''
        }
        
        cardNovo.innerHTML = `
                    <input id='card_ad__titulo${id}' class='card_ad__titulo' type='text' 
                    placeholder='Meta ${numMeta}' data-tarefa=${indice} value='${tarefa}'>

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
        numMeta++;
        metasFeitas++;
    }
    inserirItem(indice);
}

atualizarTela();
atualizarTela();
atualizarTela();
atualizarTela();




const varredura = () => {
    let idTask;
    trabalhos = document.querySelectorAll('.card_ad__titulo')
    for (let contador = 0; contador < trabalhos.length; contador++) {
        idTask = `#card_ad__titulo${metasFeitas}`; //template string 
        console.log(idTask)
        metasFeitas--
    }
    
    inputTarefa = document.querySelectorAll('.card_ad__titulo')
}
varredura() // ???

// console.log(trabalhos)
console.log(inputTarefa)
adTrab.addEventListener('click', criarTarefa)
linha.addEventListener('click', tarefaClicada)
//Olhar o código do vídeo do Código fonte de novo https://youtu.be/NfHVPEzo5Ik
// Erro em inserir item