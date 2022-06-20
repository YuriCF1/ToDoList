const botao = document.getElementById('botao');
const contagem = document.getElementById('contagem');

//______________________________Soluação encontrada_________________________________

function comeca() {

    botao.addEventListener('click', function (e) {
    e.preventDefault(); //Já que é um forms com type submit, aqui evita o recarregamento da página
    //Id para o innerHTML
    // const diaMostrado = document.getElementById('f_dias');
    // const horaMostrado = document.getElementById('f_horas');
    // const minutoMostrado = document.getElementById('f_minutos');
    // const segundoMostrado = document.getElementById('f_segundos');

    const diaMostrado = document.getElementsByClassName('f_dias')[0];
    const horaMostrado = document.getElementsByClassName('f_horas')[0];
    const minutoMostrado = document.getElementsByClassName('f_minutos')[0];
    const segundoMostrado = document.getElementsByClassName('f_segundos')[0];

    // const diaDado = document.getElementsByClassName('r-data'); //Input dado
    const diaDado = document.getElementById('r-data-'); //Input dado

    const diaAgora = new Date(); //Data do click
    const dataRecebida = new Date(diaDado.value);

    
    //Separando as grandezas do input
    const minGet= new Date(dataRecebida.getUTCMinutes());
    const segGet= new Date(dataRecebida.getUTCSeconds());
    
    //Separando as grandezas do momento do click
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
    
    regressiva()
    
    // Loop regressivo
    
    let contagem;

    function regressivaInicio() {
        contagem = setInterval(regressiva, 1000); // ////////////////////////////////////////
        
    }
    
    regressivaInicio();
        
        //Condicoes regressivo
        function regressiva() {
            console.clear()
            let pluralD = ' dia'
            let pluralH = ' hora'
            let pluralM = ' minuto'
            let pluralS = ' segundo'

            let zeroD;
            let zeroH;
            let zeroM;
            let zeroS;

            if (faltDiaM <0 ) {
                faltDiaM = 0
        
            }

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

                if (faltDiaM > 1 ) {
                    pluralD = ' dias'
                    
                }
                if (faltHoraM > 1) {
                    pluralH = ' horas'
                    
                }

                if (faltaMin > 1) {
                    pluralM = ' minutos'
                    
                }
                if (faltaSeg > 1) {
                    pluralS = ' segundos'
                    
                }

                if (faltDiaM >= 10) {
                zeroD = ''
                } else zeroD = '0'
                if (faltHoraM >= 10 ) {
                    zeroH = ''
                } else zeroH = '0'
                if (faltaMin >= 10) {
                    zeroM = ''
                } else zeroM = '0'
                if (faltaSeg >= 10) {
                    zeroS = ''
                } else zeroS = '0'
                    
                console.log('Days' + faltDiaM)
                console.log('Hours' + faltHoraM)
                console.log('Minutes' + faltaMin)
                console.log('Seconds' + faltaSeg)       
                     

                //Atribuição no HTML
                
                diaMostrado.innerHTML = zeroD + faltDiaM + pluralD;
                horaMostrado.innerHTML = zeroH + faltHoraM + pluralH;
                minutoMostrado.innerHTML = zeroM + faltaMin + pluralM;
                segundoMostrado.innerHTML = zeroS + faltaSeg + pluralS;
                
            }
             
}, true)

}



//________________________________________________________Terminto da solução____________________________________________________
    
    