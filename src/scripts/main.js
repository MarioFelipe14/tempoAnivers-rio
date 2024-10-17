

const dataDoEvento = new Date ("April 14, 2025 00:00:00")
const timeStampEvento = dataDoEvento.getTime();

const contaTempo = setInterval(function () {
    const agora = new Date ();
    const timeStempAtual = agora.getTime();

    const tempoAteEvento = timeStampEvento - timeStempAtual;

    const diaEmMs = 1000 * 60 * 60 * 24;
    const horasEmMs  = 1000 * 60 * 60 ;
    const minutosEmMs = 1000 * 60 ;

    const diasAteEvento = Math.floor(tempoAteEvento / diaEmMs);
    const horasAteEvento = Math.floor((tempoAteEvento % diaEmMs) / horasEmMs);
    const minutosAteEvento = Math.floor((tempoAteEvento % horasEmMs) / minutosEmMs);
    const segundosAteEvento = Math.floor((tempoAteEvento % minutosEmMs) / 1000);

    document.getElementById('contador').innerHTML = `${diasAteEvento}d ${horasAteEvento}h ${minutosAteEvento}m ${segundosAteEvento}s`;


    if(tempoAteEvento <0) {
        clearInterval(contaTempo);
        document.getElementById('contador').innerHTML =`O evento expirou`;
    }
}, 1000);