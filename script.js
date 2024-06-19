const caixaPrincipal = document.querySelector(".caixa-principal");
const caixaPerguntas = document.querySelector(".caixa-perguntas");
const caixaAlternativas = document.querySelector(".caixa-alternativas");
const caixaResultado = document.querySelector(".caixa-resultado");
const textoResultado = document.querySelector(".texto-resultado");

const perguntas = [
    {
        enunciado: "Melhor jogador",
        alternativas: [
            {
                texto: "Neymar JR",
                afirmacao: "AMASSA"
            },
            {
                texto: "Mbappe",
                afirmacao: "bom tbm."
            }
        ]
    },
    {
        enunciado: "Melhor jogador",
        alternativas: [
            {
                texto: "Gabigol",
                afirmacao: "BOMM"
            },
            {
                texto: "ViniJr",
                afirmacao: "AMASSA"
            }
        ]
    },
    {
        enunciado: "Que time carlos miguel joga?",
        alternativas: [
            {
                texto: "Corinthians",
                afirmacao: "nesse mesmo"
            },
            {
                texto: "Mengo",
                afirmacao: "erro"
            }
        ]
    },
    {
        enunciado: "Que time O Gabigol joga?",
        alternativas: [
            {
                texto: "Mengo"
                
            },
            {
                texto: "Palmeiras",
                afirmacao: "errado"
            }
        ]
    },
    {
        enunciado: "Vini Jr amassa?",
        alternativas: [
            {
                texto: "sim",
                afirmacao: "obv"
            },
            {
                texto: "não",
                afirmacao: "ta tonto."
            }
        ]
    },
];


let atual = 0;
let perguntaAtual;
let historiaFinal = "";

function mostraPergunta() {
    if (atual >= perguntas.length) {
        mostraResultado();
        return;
    }
    perguntaAtual = perguntas[atual];
    caixaPerguntas.textContent = perguntaAtual.enunciado;
    caixaAlternativas.textContent = "";
    mostraAlternativas();
}

function mostraAlternativas(){
    for(const alternativa of perguntaAtual.alternativas) {
        const botaoAlternativas = document.createElement("button");
        botaoAlternativas.textContent = alternativa.texto;
        botaoAlternativas.addEventListener("click", () => respostaSelecionada(alternativa));
        caixaAlternativas.appendChild(botaoAlternativas);
    }
}

function respostaSelecionada(opcaoSelecionada) {
    const afirmacoes = opcaoSelecionada.afirmacao;
    historiaFinal += afirmacoes + " ";
    atual++;
    mostraPergunta();
}

function mostraResultado() {
    caixaPerguntas.textContent = "Em 2049...";
    textoResultado.textContent = historiaFinal;
    caixaAlternativas.textContent = "";
}

mostraPergunta();