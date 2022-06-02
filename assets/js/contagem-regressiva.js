const botao = document.getElementById('botao');
const contagem = document.getElementById('contagem');

// //______________________________Soluação encontrada_________________________________

function comeca() {

    botao.addEventListener('click', function (e) {
    e.preventDefault(); //Já que é um forms com type submit, aqui evita o recarregamento da página
    //Id para o innerHTML
    // const diaMostrado = document.getElementById('f_dias');
    // const horaMostrado = document.getElementById('f_horas');
    // const minutoMostrado = document.getElementById('f_minutos');
    // const segundoMostrado = document.getElementById('f_segundos');

    const diaMostrado = document.getElementById('f_dias');
    const horaMostrado = document.getElementById('f_horas');
    const minutoMostrado = document.getElementById('f_minutos');
    const segundoMostrado = document.getElementById('f_segundos');

    // const diaDado = document.getElementsByClassName('r-data'); //Input dado
    const diaDado = document.getElementById('r-data'); //Input dado

    const diaAgora = new Date(); //Data do click
    const dataRecebida = new Date(diaDado.value);

    
    //Separando as grandezas do input
        // const diaGet= new Date(dataRecebida.getUTCDate());
        // const horaGet = new Date(dataRecebida.getUTCHours());
    const minGet= new Date(dataRecebida.getUTCMinutes());
    const segGet= new Date(dataRecebida.getUTCSeconds());
    
    //Separando as grandezas do momento do click
        // const diaClik = new Date(diaAgora.getUTCDate());
        // const horaCliK = new Date(diaAgora.getUTCHours());
    const minCliK= new Date(diaAgora.getUTCMinutes());
    const segCliK= new Date(diaAgora.getUTCSeconds());
    
    // Transformando grandezas em unidades de milisegundo
    const segundoG = 1000
    const minuteG = segundoG * 60;
    const hourG = minuteG * 60;
    const dayG = hourG * 24;
    const yearG = dayG * 365;

    //Diferença da data de agora e data atual
    let faltaTotal = dataRecebida - diaAgora;

    let faltDiaM = Math.floor( faltaTotal / dayG);
    let faltHoraM = Math.floor( faltaTotal / hourG) - (24 * faltDiaM);

    let faltaMin = (minGet - minCliK) - 1;
    let faltaSeg = 60 - ((segGet - segCliK) * -1);

    if (faltaMin < 0 ) {
        faltaMin  += 60;

    }

    if (faltDiaM <0 ) {
        faltDiaM = 0

    }

    diaMostrado.innerHTML = faltDiaM;
    horaMostrado.innerHTML = faltHoraM;
    minutoMostrado.innerHTML = faltaMin;
    segundoMostrado.innerHTML = faltaSeg;

    


    // let minDif = faltDiaM * 24 * 60 * 60 * 1000;
    // let faltMinM = Math.floor(faltaTotal / minuteG);

    console.log(faltDiaM + ' Dias')
    console.log(faltHoraM + ' Horas')
    console.log(faltaMin + ' Minutos')
    console.log(faltaSeg + ' Segundos')

    //Secao teste
    // let faltaDia = 0;
    // let faltaHora = 0;
    // let faltaMin = 0;
    // let faltaSeg = 2;
    
    // Loop regressivo
    
    let contagem;

    regressivaInicio();

        function regressivaInicio() {
               contagem = setInterval(regressiva, 1000);
               
            }
        
        //Condicoes regressivo
        function regressiva() {
                
            if (faltaSeg > 0) {
                faltaSeg -= 1;
                
                } else if (faltaSeg == 0 && faltaMin > 0 && faltaMin <= 59) {
                    faltaMin -= 1;
                    faltaSeg = 59;

                } else if (faltaSeg == 0 && faltaMin == 0 && faltHoraM >0) {
                    faltHoraM -= 1;
                    faltaMin = 59;
                    faltaSeg = 59;
                
                
                } else if (faltaSeg == 0 && faltaMin == 0 && faltHoraM == 0 && faltDiaM >0) {
                    faltDiaM -= 1;
                    faltHoraM = 23;
                    faltaMin = 59;
                    faltaSeg = 59;
                    
                } else if (faltaSeg == 0 && faltaMin == 0 && faltHoraM == 0 && faltDiaM == 0) {
                    alert('Acabou!')
                    clearInterval(contagem);
            
                } 
                //Atribuição no HTML
                diaMostrado.innerHTML = faltDiaM;
                horaMostrado.innerHTML = faltHoraM;
                minutoMostrado.innerHTML = faltaMin;
                segundoMostrado.innerHTML = faltaSeg;

                console.log(faltDiaM)
                console.log(faltHoraM)
                console.log(faltaMin)
                console.log(faltaSeg)
                    
            }
            
            
}, true)

}


//________________________________________________________Terminto da solução____________________________________________________
    
        
        
        


//___________________________________________________CASOS DE ESTUDO ESTUDOS FUTUROS______________________________________________
// function mostraDia() {
    //     let hora = data.getHours();
    
    //     if (hora < 10) {
        //         hora = "0" + hora;
        //      }
        
    //      let tempoAtual = hora;
         
    //      diaMostrado.innerHTML = faltaDia;;
         
    //     }
        
    //     function mostraMinuto() {
    //     let data = new Date()
    //     let min = data.getMinutes();
        
    //     if (min < 10) {
    //         min = "0" + min;
    //     }
        
    //     let tempoAtual = min;
        
    //     document.getElementById("min").innerHTML= tempoAtual;
        
    // }
    // function mostraSegundo() {
    //     let data = new Date();
    //     let seg = data.getSeconds();
        
    //     if (seg < 10) {
    //         seg = "0" + seg;
    //     }
    
    //     let tempoAtual = seg
    
    //     document.getElementById("seg").innerHTML= tempoAtual;
    
    // }
    
    // //_____________________________DIA______________________________
    // function mostraData() {
    //     let dataAtual = data.getDate(); //getDay = Dia da semana
    
    //     if (dataAtual < 10) {
    //         dataAtual = "0" + dataAtual;
    //     }
       
    //     let dataMostrada = dataAtual;
    
    //    document.getElementById("dia").innerHTML= dataMostrada;
    
    // }
    
    // function mostraMes() {
    //     let mesAtual = data.getMonth() + 1; //Os meses começam com 0 em janeiro
    
    //     if (mesAtual < 10) {
    //         mesAtual = "0" + mesAtual;
    //     }
       
    //     let mesMostrado = mesAtual;
    
    //    document.getElementById("mes").innerHTML= mesMostrado;
    
    // }
    
    // function mostraAno() {
    //     let anoAtual = data.getUTCFullYear();
    
    //     if (anoAtual < 10) {
    //         anoAtual = "0" + anoAtual;
    //     }
       
    //     let anoMostrado = anoAtual;
    
    //    document.getElementById("ano").innerHTML= anoMostrado;
    
    // }
    
    
    
    
    // function mostraTempo() {
    //     setInterval(mostraHora, 1000);
    //     setInterval(mostraMinuto, 1000);
    //     setInterval(mostraSegundo, 1000);
    
    //     setInterval(mostraData, 1000);
    //     setInterval(mostraMes, 1000);
    //     setInterval(mostraAno, 1000);
        
    
    // }










// const faltaDia = document.getElementById('faltaDia');
// const faltaHora = document.getElementById('faltaHora');



// botao.addEventListener('click', function (e) {
//     const diaDado = document.getElementById('r-data').value;
//     const horaDada = document.getElementById('r-hora').value;

//     function faltaDiaC() {
//         let dataAtual = new Date().value; //getDay = Dia da semana

//         let dataMostrada =  diaDado - dataAtual;
//         faltaDia.innerHTML= dataMostrada;

//     } 

//   //faltaDia.innerHTML = 

//     console.log(diaDado)
//     console.log(horaDada)

//     function mostraTempo() {
//         setInterval(faltaDiaC, 1000);

//     }

//     mostraTempo();

// })



//___________________________Metodo de estudo________________________________________
// botao.addEventListener('click', function (e) {
//     const diaDado = document.getElementById('r-data').value;
//     const horaDada = document.getElementById('r-hora').getHours;

//     function startTimer(duration, display) {
//         var timer = duration, minutes, seconds;
//         setInterval(function () {
//             minutes = parseInt(timer / 60, 10);
//             seconds = parseInt(timer % 60, 10);
//             minutes = minutes < 10 ? "0" + minutes : minutes;
//             seconds = seconds < 10 ? "0" + seconds : seconds;
//             display.textContent = minutes + ":" + seconds;

//             if (--timer < 0) {
//                 timer = duration;
//             }
//             console.log(horaDada)

//         }, 1000);
//     }


//     var duration = horaDada * 3600000; // Converter para segundos
//     display = document.querySelector('#faltaDia'); // selecionando o timer
//     startTimer(duration, display); // iniciando o timer




// })


// //aqui vai sempre ser a hora atual
// var dataAtual = new Date();
// //como exemplo vou definir a data de fim com base na data atual
// var dataFinal = new Date();
// dataFinal.setDate(dataFinal.getDate() + 5);




// ___________________________________________ Metodo por Getime_________________________________
    // const minuteG = 1000 * 60;
    // const hourG = minuteG * 60;
    // const dayG = hourG * 24;
    // const yearG = dayG * 365;
    
    
    // const diaTempo = diaAgora.getTime();


    // const novoDiaGets = new Date(dataRecebida.getUTCFullYear(), dataRecebida.getUTCMonth(),
    //     dataRecebida.getUTCDate(), dataRecebida.getUTCHours() -3, dataRecebida.getUTCMinutes(), dataRecebida.getUTCSeconds())

    // const dataClic = new Date(diaAgora.getUTCFullYear(), diaAgora.getUTCMonth(),
    // diaAgora.getUTCDate(), diaAgora.getUTCHours() -3, diaAgora.getUTCMinutes(), diaAgora.getUTCSeconds())

    // const resultado = novoDiaGets - dataClic;

    // const resulDia = resultado / dayG;
    // const resulHora = (resultado / hourG) - (Math.floor(resulDia) * 24) ;
    // const resulMin = (resultado / minuteG);
    

    
    // const resulDiaM = Math.floor(resultado / dayG);
    // const resulHoraM = Math.floor((resultado / hourG) - (Math.floor(resulDia) * 24)) ;
    // const resulMinM = Math.floor((resultado / hourG) - (Math.floor(resulDia) * 1440)) ;

//________________________________________________________________________________________________

    //const horaRecebida = dataRecebida.getHours();
    //const minutoRecebida = dataRecebida.getMinutes();
    
    // const dataCorrigida = new Date(dataRecebida.getUTCFullYear(), dataRecebida.getUTCMonth(),dataRecebida.getUTCDate());


    // toTimeString                                       ////////////////
    // reservar cada elemento em uma variável e subtrair. ///////////////


    // const dataTempo = dataRecebida.getTime();
    // const horaTempo = horaRecebida.getTime();
    
    // let diferenca = dataTempo - diaTempo;
    // let diferencaHora = horaTempo - diaTempo;

    // let diasF = (diferenca / (dayG));
    // let horasF = (diferenca) - (diferenca / hourG);
    // let minutosF = (horasF / (minuteG));

    // let diasFm = Math.floor(diasF);
    // let horasFm =  Math.floor(horasF);
    // let minutosm = Math.floor(minutosF);
    // let horasF = Math.round(diferenca / (hourG));


    

    // console.log(dataRecebida)
    // console.log(horaRecebida)
    // console.log(diaAgora)
    // console.log(diasF)
    // console.log(horasF)
    // console.log(minutosF)
    
    // console.log(novoDiaString)

    // console.log(novoDiaGets)
    // console.log(dataClic)
    // console.log(resultado)

    // console.log(resulDia)
    // console.log(resulHora)
    // console.log(resulMin)

    
    // const diaDado = document.getElementById('r-data').value;


    // let substituir = diaDado - diapraValer;
    // console.log(diapraValer)

    // let d = new Date(diaDado);
    // let diaPego = d.getDate() + 1;


    // const horaDada = document.getElementById('r-hora').getHours;



    // //aqui vai sempre ser a hora atual
    // var dataAtual = new Date();

    // //como exemplo vou definir a data de fim com base na data atual
    // var dataFinal = new Date();
    // dataFinal.setDate(Math.abs(diaPego));

    // console.log(diaDado)

    // //aqui é a diferenca entre as datas, basicamente é com isso que voce calcula o tempo restante
    // var dateDiff;
    // var dias, horas, minutos, segundos;
    // var $dia = $('#f_dias');
    // var $hora = $('#f_horas');
    // var $minuto = $('#f_minutos');
    // var $segundo = $('#f_segundos');
    // var $debug = $('#debug');
    // var timer;



    // function update() {
    //     dateDiff = dataFinal - dataAtual;
    //     dateDiff = dateDiff / 1000;

    //     segundos = Math.floor((dateDiff % 60));

    //     dateDiff = dateDiff / 60;
    //     minutos = Math.floor((dateDiff % 60));

    //     dateDiff = dateDiff / 60;
    //     horas = Math.floor((dateDiff % 24));

    //     dias = Math.floor(dateDiff / 24);

    //     $dia.text(dias);
    //     $hora.text(horas);
    //     $minuto.text(minutos);
    //     $segundo.text(segundos);

    //     dataAtual.setSeconds(dataAtual.getSeconds() + 1);
    // }

    // update();
    // timer = setInterval(update, 1000);
