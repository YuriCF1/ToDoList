//Gets
const adTrab = document.getElementById("maisTrabalho");
const linha = document.querySelector(".card_linhas");
let inputsTarefas;
let inputsDescricao;

var tarefasCriadas;

let id = 0;

let trabalhos;

let telasLimpadas = 0;

var inputTarefa;
//__________________IDEIAS____________________
//Quantas tarefas voce quer focar?

const getBanco = () => JSON.parse(localStorage.getItem("toDoList")) ?? []; // ?? = Se não existir
const setBanco = (bancoTrabalho) => localStorage.setItem("toDoList", JSON.stringify(bancoTrabalho)); //

// const bancoTrabalho = getBanco();

// let bancoTrabalho = [
//   { tarefa: "Andar", descricao: "Calçada", status: "" },
//   { tarefa: "Correr", descricao: "Rua", status: "checked" },
//   { tarefa: "Nadar", descricao: "Piscina", status: "" },
// ];

const atualizarTela = () => {
  limparTarefas();
  const bancoTrabalho = getBanco();
  bancoTrabalho.forEach((item, indice) =>
    criarTarefa(item.tarefa, item.descricao, item.status, indice)
  );
  //________________________ESTUDO________________________________
  //Uso do for each
  // numbers.forEach((number, index, array) => {
  //     console.log(array);
  // });
};

const limparTarefas = () => {
  while (linha.firstChild) {
    linha.removeChild(linha.lastChild);
    telasLimpadas++;
  }
};

function pushBanco() {
  const bancoTrabalho = getBanco();
  if (bancoTrabalho.length < 5) {
    const bancoTrabalho = getBanco();
    bancoTrabalho.push({ tarefa: "", descricao: "", status: "" });
    setBanco(bancoTrabalho);
    atualizarTela();
  } else {
    bancoTrabalho.pop();
    alert('Foca nas 5')
  }
  console.log(bancoTrabalho);
}
//_____________________________________VERIFICAR O STATUS___________________________________
const atualizarItem = (indice, elementoPai) => {
  const bancoTrabalho = getBanco();
  bancoTrabalho[indice].status =
    bancoTrabalho[indice].status === "" ? "checked" : ""; //Verificação do status
  if (bancoTrabalho[indice].status === "checked") {
    elementoPai.classList.remove("card_ad");
    elementoPai.classList.add("card_ad__feito");
  } else {
    elementoPai.classList.remove("card_ad__feito");
    elementoPai.classList.add("card_ad");
  }
  setBanco(bancoTrabalho)
};

//_____________________________________CLIQUES___________________________________

const removerItem = (indice) => {
  const bancoTrabalho = getBanco();
  bancoTrabalho.splice(indice, 1);
  setBanco(bancoTrabalho)
  atualizarTela();
};

//____________________________CRIAR TAREFA_____________________
const criarTarefa = (tarefa, descricao, status, indice) => {
  let numMeta = indice + 1;
  const cardNovo = document.createElement(`form`); // Cria um novo elemento <>
  let data = `${indice}`;
  cardNovo.setAttribute("data-tarefa", data);

  if (descricao === undefined) {
    descricao = "";
  }
  if (status === "checked") {
    cardNovo.classList.add(`card_ad__feito`);
  } else {
    cardNovo.classList.add(`card_ad`); // Define o atributo de identificação HTML
  }

  if (tarefa == "[object PointerEvent]") {
    tarefa = "";
  }
  
  id++;

  const bancoTrabalho = getBanco();

    cardNovo.innerHTML = `
                    <input id='card_ad__titulo${id}' class='card_ad__titulo' type='text' 
                    placeholder='Meta ${numMeta}' value='${tarefa}' data-task=${indice}>

                    <label for='meta${indice}'>O que você vai fazer?</label>
                    <textarea class='card_ad__inputs' id='meta${indice}' type='text' 
                    rows='4' cols='10' placeholder='Irei...' data-descricao=${indice}
                    value=''
                    >${descricao}</textarea>

                    <label for='tempo'>Qual o prazo?</label>

                    <div class="botoes">
                        <input type="checkbox" ${status}='' data-indice=${indice}>
                        <input class="btDelet" type="button" value="X" data-indice=${indice}>
                    </div>
        `;
    linha.appendChild(cardNovo);
    // inputsTarefas = document.querySelectorAll('.card_ad__titulo');
    // inputsDescricao = document.querySelectorAll('.card_ad__inputs');
    numMeta++;
    // textoTarefas();
    // textoDescrição();
  

  tarefasCriadas = document.querySelectorAll("[data-tarefa]");
  // console.log(inputs)
};

atualizarTela();
atualizarTela();
atualizarTela();
atualizarTela();

//Por no banco
// function refreshBank(index, textTask, textDescription) {
//   bancoTrabalho[index] = {
//     tarefa: textTask,
//     descricao: textDescription,
//     status: "",
//   };
//   console.log(bancoTrabalho[index].tarefa);
//   // console.log(bancoTrabalho[indice].descricao)
//   console.log(bancoTrabalho);
// }

const updatingCardlist = () => {
  tarefasCriadas.forEach((elemento) =>
    elemento.addEventListener("click", (event) => {
      const target = event.target;
      target.addEventListener("blur", () => {
        const index = elemento.dataset.tarefa;
        const textTask = elemento.querySelector("[data-task]").value;
        const textDescription =
          elemento.querySelector("[data-descricao]").value;
        console.log(index);
        console.log(textTask);
        console.log(textDescription);
        console.log(target);
        refreshBank(index, textTask, textDescription);
      });
    })
  );
};

const clickOnButtons = (evento) => {
  const elemento = evento.target;
  const elementoPai = elemento.parentElement.parentElement;
  if (elemento.type === "button") {
    const indice = elemento.dataset.indice;
    removerItem(indice);
  } else if (elemento.type === "checkbox") {
    const indice = elemento.dataset.indice;
    atualizarItem(indice, elementoPai);
  }
};

const clickOnTexts = (evento) => {
  const elemento = evento.target;
  if (elemento.dataset.task) {
    elemento.addEventListener("blur", () => {
      console.log(elemento);
      let textT = elemento.value;
      let index = elemento.dataset.task;
      console.log(textT);
      updateBankT(index, textT);
    });
  } else if (elemento.dataset.descricao) {
    elemento.addEventListener("blur", () => {
      console.log(elemento);
      let textD = elemento.value;
      let index = elemento.dataset.descricao;
      console.log(textD);
      updateBankD(index, textD);
    });
  }
  console.log(elemento);
  //Testar o label da descricação
};

function updateBankT(index, textT) {
  const bancoTrabalho = getBanco();
  bancoTrabalho[index].tarefa = textT;
  console.log(bancoTrabalho);
  setBanco(bancoTrabalho)
}
function updateBankD(index, textD) {
  const bancoTrabalho = getBanco();
  bancoTrabalho[index].descricao = textD;
  console.log(bancoTrabalho);
  setBanco(bancoTrabalho)
}

adTrab.addEventListener("click", pushBanco);

linha.addEventListener("click", clickOnButtons);
linha.addEventListener("mousedown", clickOnTexts);

linha.addEventListener("keydown", function (event) {
  const code = event.key;
  if (code === "Tab") {
    clickOnTexts(event);
  }
});

// const porTarefasNoBanco = (tarefaTexto, index) => {
//     const task = bancoTrabalho.push ({'tarefa': tarefaTexto});
//     console.log(bancoTrabalho)
//     console.log(task)
// }

// const porDescricacaoNoBanco = (descricaoDada, index) => {
//     const task = bancoTrabalho.push ({'descricao': descricaoDada});
//     console.log(bancoTrabalho)
//     console.log(task)
// }

//_____________________________________________________________________

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
