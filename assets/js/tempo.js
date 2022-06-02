let data = new Date()

function mostraHora() {
    let hora = data.getHours();

    if (hora < 10) {
         hora = "0" + hora;
     }
    
     let tempoAtual = hora;

    document.getElementById("hora").innerHTML= tempoAtual;

}

function mostraMinuto() {
    let data = new Date()
    let min = data.getMinutes();

     if (min < 10) {
        min = "0" + min;
    }

    let tempoAtual = min;

    document.getElementById("min").innerHTML= tempoAtual;

}
function mostraSegundo() {
    let data = new Date();
    let seg = data.getSeconds();

    if (seg < 10) {
        seg = "0" + seg;
    }

    let tempoAtual = seg

    document.getElementById("seg").innerHTML= tempoAtual;

}

//_____________________________DIA______________________________
function mostraData() {
    let dataAtual = data.getDate(); //getDay = Dia da semana

    if (dataAtual < 10) {
        dataAtual = "0" + dataAtual;
    }
   
    let dataMostrada = dataAtual;

   document.getElementById("dia").innerHTML= dataMostrada;

}

function mostraMes() {
    let mesAtual = data.getMonth() + 1; //Os meses começam com 0 em janeiro

    if (mesAtual < 10) {
        mesAtual = "0" + mesAtual;
    }
   
    let mesMostrado = mesAtual;

   document.getElementById("mes").innerHTML= mesMostrado;

}

function mostraAno() {
    let anoAtual = data.getUTCFullYear();

    if (anoAtual < 10) {
        anoAtual = "0" + anoAtual;
    }
   
    let anoMostrado = anoAtual;

   document.getElementById("ano").innerHTML= anoMostrado;

}




function mostraTempo() {
    setInterval(mostraHora, 1000);
    setInterval(mostraMinuto, 1000);
    setInterval(mostraSegundo, 1000);

    setInterval(mostraData, 1000);
    setInterval(mostraMes, 1000);
    setInterval(mostraAno, 1000);
    

}