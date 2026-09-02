let tamanhoFonte = 16;

let contrasteAtivo = false;


// Aumentar fonte

function aumentarFonte(){

    tamanhoFonte += 2;

    document.body.style.fontSize = tamanhoFonte + "px";

}



// Diminuir fonte

function diminuirFonte(){

    if(tamanhoFonte > 12){

        tamanhoFonte -= 2;

        document.body.style.fontSize = tamanhoFonte + "px";

    }

}



// CONTRASTE FUNCIONANDO

function ativarContraste(){

    contrasteAtivo = !contrasteAtivo;


    let corpo = document.body;
    let textos = document.querySelectorAll("p, h1, h2, h3");
    let caixas = document.querySelectorAll(".conteudo, .card");
    let botoes = document.querySelectorAll("button");


    if(contrasteAtivo){


        corpo.style.backgroundColor = "black";
        corpo.style.color = "white";


        textos.forEach(function(texto){

            texto.style.color = "yellow";

        });


        caixas.forEach(function(caixa){

            caixa.style.backgroundColor = "#111";
            caixa.style.color = "white";

        });


        botoes.forEach(function(botao){

            botao.style.backgroundColor = "yellow";
            botao.style.color = "black";

        });


    }else{


        corpo.style.backgroundColor = "#f1f6ff";
        corpo.style.color = "#222";


        textos.forEach(function(texto){

            texto.style.color = "";

        });


        caixas.forEach(function(caixa){

            caixa.style.backgroundColor = "";
            caixa.style.color = "";

        });


        botoes.forEach(function(botao){

            botao.style.backgroundColor = "";
            botao.style.color = "";

        });


    }

}



// Leitura em voz alta

function lerTexto(){

    let texto = document.getElementById("texto").innerText;


    let voz = new SpeechSynthesisUtterance(texto);


    voz.lang = "pt-BR";


    window.speechSynthesis.speak(voz);

}
