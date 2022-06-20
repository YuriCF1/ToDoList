//Gets
const adTrab = document.getElementById("maisTrabalho");
const linha = document.querySelector(".card_linhas");
const telaInicio = document.querySelector(".cards_centro__tela");

// var tarefasCriadas;
var datasCriadas;
let botoesCriados;

let id = 0;

//__________________IDEIAS____________________
//Quantas tarefas voce quer focar?
//Exemplos de tarefas inspiracionais

const getBanco = () => JSON.parse(localStorage.getItem("toDoList")) ?? []; // ?? = Se não existir
const setBanco = (bancoTrabalho) =>
  localStorage.setItem("toDoList", JSON.stringify(bancoTrabalho)); //

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
    alert("Foca nas 5");
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
  setBanco(bancoTrabalho);
};

//Remoção de item
const removerItem = (indice) => {
  const bancoTrabalho = getBanco();
  bancoTrabalho.splice(indice, 1);
  setBanco(bancoTrabalho);
  atualizarTela();
  if (bancoTrabalho.length <= 0) {
    telaInicio.style.display = "block";
  }
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

  let min = new Date().toISOString().slice(0, 16); //Determinando data mínima, como data atual
  // const bancoTrabalho = getBanco();
  cardNovo.innerHTML = `
                    <input id='card_ad__titulo${id}' class='card_ad__titulo' type='text' 
                    placeholder='Meta ${numMeta}' value='${tarefa}' data-task=${indice}>

                    <label for='meta${indice}'>O que você vai fazer?</label>
                    <textarea class='card_ad__inputs' id='meta${indice}' type='text' 
                    rows='4' cols='10' placeholder='Irei...' data-descricao=${indice}
                    value=''>${descricao}</textarea>

                    
                    <div class="botoes">
                    <label for='tempo'>Tarefa feita?</label>
                        <input type="checkbox" id='tempo' ${status}='' data-indice=${indice}>
                        <input class="btDelet" type="button" value="X" data-indice=${indice}>
                    </div>

                    <div class="contador">
                      <label for="tempo" class="contador_titulo">Escolha</label>

                      <input class='card_ad__tempo' type='datetime-local' min=${min} name='' id='r-data-' data-dates=${indice}>

                      <input class="botao" type="submit" value="Calcular!" id="botao" name="botao" data-botoes=${indice}>
                    </div>

                    <div class="resultado">
                      <time class="f_dias_${indice}"></time>
                      <time class="f_horas_${indice}"></time>
                      <time class="f_minutos_${indice}"></time>
                      <time class="f_segundos_${indice}"></time>
                    </div>
        `;
  linha.appendChild(cardNovo);

  numMeta++;

  // tarefasCriadas = document.querySelectorAll("[data-tarefa]");

  datasCriadas = document.querySelectorAll("[data-dates]");
  botoesCriados = document.querySelectorAll("[data-botoes]");
  telaInicio.style.display = "none";
};

//Clicando nos botões de tarefas
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

//Clicando no texto
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
  // console.log(elemento);
  //Testar o label da descricação
};

//Upando o banco tarefa
function updateBankT(index, textT) {
  const bancoTrabalho = getBanco();
  bancoTrabalho[index].tarefa = textT;
  console.log(bancoTrabalho);
  setBanco(bancoTrabalho);
}

//Upando o banco descrição
function updateBankD(index, textD) {
  const bancoTrabalho = getBanco();
  bancoTrabalho[index].descricao = textD;
  console.log(bancoTrabalho);
  setBanco(bancoTrabalho);
}

//Chamando funções de eventos
adTrab.addEventListener("click", pushBanco);

linha.addEventListener("click", clickOnButtons);
linha.addEventListener("mousedown", clickOnTexts);
linha.addEventListener("keydown", function (evento) {
  const code = evento.key;
  if (code === "Tab") {
    clickOnTexts(evento);
  }
});

document.addEventListener("keydown", function (evento) {
  const code = evento.key;
  if (code === "Enter") {
    clickOnTexts(evento);
    atualizarTela();
  }
});

atualizarTela();
atualizarTela();
//Olhar o código do vídeo do Código fonte de novo https://youtu.be/NfHVPEzo5Ik
// Erro em inserir item

//_____________________________________________________________________________________CONTAGEM REGRESSIVA
//_____________________________________________________________________________________CONTAGEM REGRESSIVA
//_____________________________________________________________________________________CONTAGEM REGRESSIVA
//_____________________________________________________________________________________CONTAGEM REGRESSIVA
//_____________________________________________________________________________________CONTAGEM REGRESSIVA

linha.addEventListener("click", (evento) => {
  const elemento = evento.target;
  const indice = elemento.dataset.botoes;
  if (elemento.type === "submit") {
    const dataDoCard = datasCriadas[indice].value;
    evento.preventDefault();
    console.log(dataDoCard);

    const elementoPai = elemento.parentElement.parentElement;
    pegaData(dataDoCard, indice, elementoPai);
  }
});

// //______________________________Soluação encontrada_________________________________

function pegaData(dataDoCard, indice, elementoPai) {
  console.log(indice)

  const diaMostrado = elementoPai.getElementsByClassName(`f_dias_${indice}`);
  const horaMostrado = elementoPai.getElementsByClassName(`f_horas_${indice}`);
  const minutoMostrado = elementoPai.getElementsByClassName(`f_minutos_${indice}`);
  const segundoMostrado = elementoPai.getElementsByClassName(`f_segundos_${indice}`);

  

  // const diaDado = document.getElementsByClassName('r-data'); //Input dado
  const diaDado = document.getElementById("r-data-"); //Input dado

  const diaAgora = new Date(); //Data do click
  // const dataRecebida = new Date(diaDado.value);
  const dataRecebida = new Date(dataDoCard);

  //Separando as grandezas do input
  const minGet = new Date(dataRecebida.getUTCMinutes());
  const segGet = new Date(dataRecebida.getUTCSeconds());

  //Separando as grandezas do momento do click
  const minCliK = new Date(diaAgora.getUTCMinutes());
  const segCliK = new Date(diaAgora.getUTCSeconds());

  // Transformando grandezas em unidades de milisegundo
  const segundoG = 1000;
  const minuteG = segundoG * 60;
  const hourG = minuteG * 60;
  const dayG = hourG * 24;
  const yearG = dayG * 365;

  //Diferença da data de agora e data atual
  let faltaTotal = dataRecebida - diaAgora;

  let faltDiaM = Math.floor(faltaTotal / dayG);
  let faltHoraM = Math.floor(faltaTotal / hourG) - 24 * faltDiaM;

  let faltaMin = minGet - minCliK - 1;
  let faltaSeg = 60 - (segGet - segCliK) * -1;

  if (faltaMin < 0) {
    faltaMin += 60;
  }

  regressiva();

  // Loop regressivo

  let contagem;

  function regressivaInicio() {
    contagem = setInterval(regressiva, 1000); // ////////////////////////////////////////
  }

  regressivaInicio();

  //Condicoes regressivo
  function regressiva() {
    console.clear();
    let pluralD = " dia";
    let pluralH = " hora";
    let pluralM = " minuto";
    let pluralS = " segundo";

    let zeroD;
    let zeroH;
    let zeroM;
    let zeroS;

    if (faltDiaM < 0) {
      faltDiaM = 0;
    }

    if (faltaSeg > 0) {
      faltaSeg -= 1;
    } else if (faltaSeg == 0 && faltaMin > 0 && faltaMin <= 59) {
      faltaMin -= 1;
      faltaSeg = 59;
    } else if (faltaSeg == 0 && faltaMin == 0 && faltHoraM > 0) {
      faltHoraM -= 1;
      faltaMin = 59;
      faltaSeg = 59;
    } else if (
      faltaSeg == 0 &&
      faltaMin == 0 &&
      faltHoraM == 0 &&
      faltDiaM > 0
    ) {
      faltDiaM -= 1;
      faltHoraM = 23;
      faltaMin = 59;
      faltaSeg = 59;
    } else if (
      faltaSeg == 0 &&
      faltaMin == 0 &&
      faltHoraM == 0 &&
      faltDiaM == 0
    ) {
      alert("Acabou!");
      clearInterval(contagem);
    }

    if (faltDiaM > 1) {
      pluralD = " dias";
    }
    if (faltHoraM > 1) {
      pluralH = " horas";
    }

    if (faltaMin > 1) {
      pluralM = " minutos";
    }

    if (faltaSeg > 1) {
      pluralS = " segundos";
    }

    if (faltDiaM >= 10) {
      zeroD = "";
    } else zeroD = "0";
    if (faltHoraM >= 10) {
      zeroH = "";
    } else zeroH = "0";
    if (faltaMin >= 10) {
      zeroM = "";
    } else zeroM = "0";
    if (faltaSeg >= 10) {
      zeroS = "";
    } else zeroS = "0";

    console.log("Days" + faltDiaM);
    console.log("Hours" + faltHoraM);
    console.log("Minutes" + faltaMin);
    console.log("Seconds" + faltaSeg);

    console.log(diaMostrado)


    //Atribuição no HTML

    diaMostrado.innerHTML = zeroD + faltDiaM + pluralD;
    horaMostrado.innerHTML = zeroH + faltHoraM + pluralH;
    minutoMostrado.innerHTML = zeroM + faltaMin + pluralM;
    segundoMostrado.innerHTML = zeroS + faltaSeg + pluralS;
  }
}

//________________________________________________________Terminto da solução____________________________________________________
