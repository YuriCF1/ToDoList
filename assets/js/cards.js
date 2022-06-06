// //Gets
// const adTrab = document.getElementById('maisTrabalho')
// const linha = document.querySelector('.card_linhas')
// const inicio = document.getElementById('cards_centro');

// let cont = 1;
// let metas = 0;
// //Chamadas

// adTrab.addEventListener("click", function (e) {
//     inicio.style.display = 'none';
//     const cardNovo = document.createElement("form"); // Cria um novo elemento <>
//     cardNovo.className = "card_ad"; // Define o atributo de identificação HTML

//     if (metas < 5) {
//         metas++
//         cardNovo.innerHTML = `\
//                     <input id='card_ad__titulo' class='card_ad__titulo' type='text' placeholder='Meta'>\
//                     <label>${cont}</label>
//                     <label for='meta'>O que você vai fazer?</label>\
//                     <textarea class='card_ad__inputs' id='meta' type='text' rows='4' cols='10'\
//                         placeholder='Irei...'></textarea>\
//                     <label for='tempo'>Qual o prazo?</label>\
//                         <input class='card_ad__tempo' type='datetime-local' name='' id='r-data-${cont}'>\
//                         <input class='botao' type='submit' value='Começar!' id='botao' name='botao'>\
//                     <div><time class='f_dias'></time>\
//                         <time class='f_horas'></time>\
//                         <time class='f_minutos'></time>\
//                         <time class='f_segundos'></time>\
//                     </div>\
//                     `
//     linha.appendChild(cardNovo);

//     cont++;

//     } else {
//         alert('Foque nas 5')

//     }

// })


//Gets
const adTrab = document.getElementById('maisTrabalho')
const linha = document.querySelector('.card_linhas')
const inicio = document.getElementById('cards_centro');


let id = 0;

let metasFeitas = 0;
let atualizadas = 0;

let trabalhos;

let telasLimpadas = 0;

//Chamadas

// let banco = [
//     {'task':'Estudar JS', 'status': ''},
//     {'task':'Netflix', 'status': 'checked'},
//     {'task':'Teste', 'status': ''}

// ];

// const inserirItem = (evento) => { //O addEventListener manda para o callback'inserirItem' o evento que aconteceu
//     const tecla = evento.key;
//    // const texto = evento.target.value;
//     if (tecla === 'Enter') {
//         const banco = getBanco();
//         banco.push ({'task': evento.target.value, 'status': ''})
//        //Pode ser também: banco.push ({'task': evento.target.value, 'status': ''}) //O valor do alvo do evento, no caso, o texto
//        setBanco(banco)
//        atualizarTela();
//         evento.target.value = ''; //Limpar a tarefa
//     }
//     // console.log(tecla)
// }

// const criarTarefa = (tarefa, status, indice) => { // Status='' Se alguém não passa informação nenhuma, é pq tá vazio
//     const area = document.createElement('label');
//     area.classList.add('todo__item');
//     area.innerHTML = `
//         <input type="checkbox" ${status}='' data-indice=${indice}>
//         <div>${tarefa}</div>
//         <input type="button" value="X" data-indice=${indice}>
//     ` 
//     document.getElementById('todoList').appendChild(area);
// }

const bancoTrabalho = [
    { 'tarefa': 'Andar', 'descricao': 'Calçada', 'status': '' },
    { 'tarefa': 'Nadar', 'descricao': 'Piscina', 'status': '' },
    { 'tarefa': 'Nadar', 'descricao': 'Piscina', 'status': '' },


]

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

//_____________________________________CLIQUES___________________________________
const tarefaClicada = (evento) => {
    const elemento = evento.target;
    const elementoPai = (elemento.parentElement.parentElement)
    console.log(elemento)
    console.log(elemento.parentElement.parentElement)
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

//____________________________CRIAR TAREFA_____________________
const criarTarefa = (tarefa, descricao, status, indice) => {
    var numMeta = bancoTrabalho.length;
    // console.log('numero de metas: ' + numMeta)
    //inicio.style.display = 'none';
    const cardNovo = document.createElement('form'); // Cria um novo elemento <>
    cardNovo.classList.add('card_ad'); // Define o atributo de identificação HTML
    id++

    if (bancoTrabalho.length <= 4) {
        if (tarefa =='[object PointerEvent]') {
            tarefa=''
        }
        cardNovo.innerHTML = `
                    <input id='card_ad__titulo${id}' class='card_ad__titulo' type='text' 
                    placeholder='Meta ${numMeta}' data-tarefa='' value='${tarefa}'>

                    <label for='meta'>O que você vai fazer?</label>

                    <textarea class='card_ad__inputs' id='meta' type='text' 
                    rows='4' cols='10' placeholder='Irei...' data-descricao=''
                    value=''
                    >${descricao}</textarea>

                    <label for='tempo'>Qual o prazo?</label>

                    <div class="botoes">
                        <input type="checkbox" value="Feito" ${status}='' data-indice=${indice}>
                        <input class="btDelet" type="button" value="X" data-indice=${indice}>
                    </div>
        `
        linha.appendChild(cardNovo);
        // console.log(indice)
        numMeta++;
        metasFeitas++;

    }
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
}
varredura()

// console.log(trabalhos)

adTrab.addEventListener('click', criarTarefa)
linha.addEventListener('click', tarefaClicada)

//Olhar o código do vídeo do Código fonte de novo https://youtu.be/NfHVPEzo5Ik