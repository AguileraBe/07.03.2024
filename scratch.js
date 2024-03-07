const posicaoSuperiorInicial = 70,
    posicaoEsquerdaInicial = 70,
    posicaoSuperiorFinal = 500,
    posicaoEsquerdaFinal = 500,
    anguloInicial =0,
    anguloFinal =500,
    imgAvatar = document.getElementById('imgAvatar'),
    styleAvatar = window. getComputedStyle(imgAvatar);
    txtPixel = document.getElementById("txtPixel");

var posicaoSuperior = 70,
    posicaoEsquerda = 70,
    topAvatar,
    leftAvatar;
    anguloAvatar = 0;

imgAvatar.style.position = "absolute";
imgAvatar.style.top = posicaoSuperior + "px";
imgAvatar.style.left = posicaoEsquerda + "px";
imgAvatar.style.transform = "rotate(" +anguloAvatar + "deg)";

function getTopStyle(elementToGet) {
    let styleElement = window.getComputedStyle(elementToGet);
    return parseInt (styleElement.getPropertyValue('top'). replace("px",''));
}

function getLeftStyle(elementToGet) {
let styleElement = window.getComputedStyle(elementToGet);
return parseInt(styleElement.getPropertyValue('left').replace("px",''));
}

function moverParaEsquerda() {
    console.clear();
    console.log("Posição do avatar à esquerda antes: ", imgAvatar.style.left);
    leftAvatar = getLeftStyle(imgAvatar);
    if (leftAvatar > posicaoEsquerdaInicial) {
    posicaoEsquerda -= parseInt(txtPixel.value);
    if (posicaoEsquerda < posicaoEsquerdaInicial) {
    posicaoEsquerda = posicaoEsquerdaInicial;
    }
    imgAvatar.style.left = posicaoEsquerda + "px";
    } else {
    console.error("Ops! Chegou ao limite e não é possível mais mover para esquerda. Tente outro botão.");
    console.log("Posição do avatar à esquerda depois: ", imgAvatar.style.left);
    }
}
    
function moverParaDireita() {
    console.clear();
    console.log("Posição do avatar à direita antes: ", imgAvatar.style.left);
    leftAvatar = getLeftStyle(imgAvatar);
    if (leftAvatar < posicaoDireitaInicial) {
        posicaoDireita += parseInt(txtPixel.value);
        if (posicaoDireita > posicaoDireitaInicial) {
            posicaoDireita = posicaoDireitaInicial;
        }
        imgAvatar.style.left = posicaoDireita + "px";
    } else {
        console.error("Ops! Chegou ao limite e não é possível mais mover para direita. Tente outro botão.");
        console.log("Posição do avatar à direita depois: ", imgAvatar.style.left);
    }
}

function moverParaCima() {
    console.clear();
    console.log("Posição do avatar acima antes: ", imgAvatar.style.top);
    topAvatar = getTopStyle(imgAvatar);
    if (topAvatar > posicaoAcimaInicial) {
        posicaoAcima -= parseInt(txtPixel.value);
        if (posicaoAcima < posicaoAcimaInicial) {
            posicaoAcima = posicaoAcimaInicial;
        }
        imgAvatar.style.top = posicaoAcima + "px";
    } else {
        console.error("Ops! Chegou ao limite e não é possível mais mover para cima. Tente outro botão.");
        console.log("Posição do avatar acima depois: ", imgAvatar.style.top);
    }
}

function moverParaBaixo() {
    console.clear();
    console.log("Posição do avatar abaixo antes: ", imgAvatar.style.top);
    topAvatar = getTopStyle(imgAvatar);
    if (topAvatar < posicaoAbaixoInicial) {
        posicaoAbaixo += parseInt(txtPixel.value);
        if (posicaoAbaixo > posicaoAbaixoInicial) {
            posicaoAbaixo = posicaoAbaixoInicial;
        }
        imgAvatar.style.top = posicaoAbaixo + "px";
    } else {
        console.error("Ops! Chegou ao limite e não é possível mais mover para baixo. Tente outro botão.");
        console.log("Posição do avatar abaixo depois: ", imgAvatar.style.top);
    }
}

function girarHorario() {
    console.clear();
    console.log("Ângulo do avatar antes: ", anguloAvatar + "deg");
    if (anguloAvatar < anguloFinal) {
        anguloAvatar += parseInt(txtPixel.value);
        if (anguloAvatar > anguloFinal) {
            anguloAvatar = anguloFinal;
    }
    imgAvatar.style.transform = "rotate(" + anguloAvatar + "deg)";
    } else {
    console.error("Ops! Chegou ao limite e não é possível mais girar no sentido horário. Tente outro botão.");
    }
    console.log("Ângulo do avatar depois: ", anguloAvatar + "deg");
}
