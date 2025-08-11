const fases = [
  [ // Fase 1
    {
      bandeira: "IMG/brasil.png",
      pais: "Brasil",
      opcoes: ["Brasil", "Argentina", "Portugal"],
      curiosidade: "O país que é representado por essa bandeira é o maior da América do Sul."
    },
    {
      bandeira: "IMG/estados_unidos.png",
      pais: "Estados Unidos",
      opcoes: ["Irã", "Estados Unidos", "Líbia"],
      curiosidade: "O país que é representado por essa bandeira é a maior potência mundial da atualidade."
    },
    {
      bandeira: "IMG/reino_unido.png",
      pais: "Reino Unido",
      opcoes: ["Reino Unido", "Inglaterra", "Países Baixos"],
      curiosidade: "O país que é representado por essa bandeira está localizado em uma ilha da europa."
    },
    {
      bandeira: "IMG/russia.png",
      pais: "Rússia",
      opcoes: ["Sérvia", "Ucrânia", "Rússia"],
      curiosidade: "O país que é representado por essa bandeira é o maior em território do mundo."
    },
    {
      bandeira: "IMG/india.png",
      pais: "Índia",
      opcoes: ["Sri-Lanka", "Índia", "Laos"],
      curiosidade: "O país que é representado por essa bandeira possuí a maior população do mundo."
    },
    {
      bandeira: "IMG/espanha.png",
      pais: "Espanha",
      opcoes: ["Espanha", "Alemanha", "Portugal"],
      curiosidade: "O país que é representado por essa bandeira colonizou a maior parte da américa latina."
    },
    {
      bandeira: "IMG/uruguai.png",
      pais: "Uruguai",
      opcoes: ["Paraguai", "Colômbia", "Uruguai"],
      curiosidade: "O país que é representado por essa bandeira já foi parte do território brasileiro ."
    },
    {
      bandeira: "IMG/canada.jpg",
      pais: "Canadá",
      opcoes: ["Peru", "Canadá", "Áustria"],
      curiosidade: "O país que é representado por essa bandeira tem nome de origem indígena."
    },
    {
      bandeira: "IMG/franca.png",
      pais: "França",
      opcoes: ["Hungria", "Itália", "França"],
      curiosidade: "O país que é representado por essa bandeira é o destino turístico mais visitado do mundo."
    },
    {
      bandeira: "IMG/china.png",
      pais: "China",
      opcoes: ["China", "Vietnã", "Taiwan"],
      curiosidade: "O país que é representado por essa bandeira contém mais de 56 grupos étnicos em seu território."
    },
    {
      bandeira: "IMG/japao.png",
      pais: "Japão",
      opcoes: ["Indonésia", "Coreia do Sul", "Japão"],
      curiosidade: "O país que é representado por essa bandeira também é conhecido como 'Terra do Sol Nascente."
    },
    {
      bandeira: "IMG/portugal.png",
      pais: "Portugal",
      opcoes: ["Portugal", "Espanha", "Andorra"],
      curiosidade: "O país que é representado por essa bandeira é localizado na Península Ibérica."
    },
    {
      bandeira: "IMG/argentina.png",
      pais: "Argentina",
      opcoes: ["Venezuela", "Argentina", "Chile"],
      curiosidade: "O país que é representado por essa bandeira contém o ponto mais baixo e o mais alto da América do Sul."
    },
    {
      bandeira: "IMG/mexico.png",
      pais: "México",
      opcoes: ["Itália", "México", "Bulgária"],
      curiosidade: "O país que é representado por essa bandeira possui 68 línguas nativas reconhecidas."
    },
    {
      bandeira: "IMG/alemanha.PNG",
      pais: "Alemanha",
      opcoes: ["Alemanha", "Bélgica", "Áustria"],
      curiosidade: "O país que é representado por essa bandeira é o lar de mais de 20.000 castelos."
    },
    {
      bandeira: "IMG/italia.png",
      pais: "Itália",
      opcoes: ["Dinamarca", "Itália", "Finlândia"],
      curiosidade: "O país que é representado por essa bandeira tem dois outros países dentro de seu território."
    },
  ],
  [ // Fase 2
    {
      bandeira: "IMG/egito.png",
      pais: "Egito",
      opcoes: ["Arábia Saudita", "Argélia", "Egito"],
      curiosidade: "O país que é representado por essa bandeira criou o calendário de 365 dias."
    },
    {
      bandeira: "IMG/lituania.png",
      pais: "Lituânia",
      opcoes: ["Lituânia", "Estônia", "Letônia"],
      curiosidade: "O país que é representado por essa bandeira foi o primeiro país a se tornar independente da União Soviética."
    },
    {
      bandeira: "IMG/islandia.png",
      pais: "Islândia",
      opcoes: ["Noruega", "Islândia", "Suécia"],
      curiosidade: "O país que é representado por essa bandeira também é conhecido como 'Terra do Fogo e do Gelo'."
    },
    {
      bandeira: "IMG/africa_do_sul.png",
      pais: "África do Sul",
      opcoes: ["Namíbia", "Angola", "África do Sul"],
      curiosidade: "O país que é representado por essa bandeira possui 11 línguas oficiais."
    },
    {
      bandeira: "IMG/jamaica.jpg",
      pais: "Jamaica",
      opcoes: ["Jamaica", "República Dominicana", "Camarões"],
      curiosidade: "O país que é representado por essa bandeira foi o primeiro país caribenho a se tornar independente da Grã-Bretanha."
    },
    {
      bandeira: "IMG/tailandia.png",
      pais: "Tailândia",
      opcoes: ["Tailândia", "Myanmar", "Malásia"],
      curiosidade: "O país que é representado por essa bandeira raramente usa sal para temperar seus pratos."
    },
    {
      bandeira: "IMG/peru.jpeg",
      pais: "Peru",
      opcoes: ["Suriname", "Peru", "Equador"],
      curiosidade: "No país que é representado por essa bandeira existem mais de 3000 tipos de batatas."
    },
    {
      bandeira: "IMG/belgica.png",
      pais: "Bélgica",
      opcoes: ["Alemanha", "Bélgica", "República Czequia"],
      curiosidade: "O país que é representado por essa bandeira é o país de origem de 'Os Smurfs'."
    },
    {
      bandeira: "IMG/irlanda.png",
      pais: "Irlanda",
      opcoes: ["Irlanda", "Mônaco", "Escócia"],
      curiosidade: "No país que é representado por essa bandeira não existem cobras."
    },
    {
      bandeira: "IMG/bosnia_e_herzegovina.png",
      pais: "Bósnia e Herzegovina",
      opcoes: ["Eslovaquia", "Croácia", "Bósnia e Herzegovina"],
      curiosidade: "O país que é representado por essa bandeira é o local do assassinato de Francisco Ferdinando."
    },
    {
      bandeira: "IMG/haiti.jpg",
      pais: "Haiti",
      opcoes: ["El Salvador", "Panamá", "Haiti"],
      curiosidade: "O país que é representado por essa bandeira é o primeiro país negro livre do mundo."
    },
    {
      bandeira: "IMG/suica.png",
      pais: "Suíça",
      opcoes: ["Suíça", "Suécia", "Montenegro"],
      curiosidade: "O país que é representado por essa bandeira tem mais de 7.000 lagos em seu território."
    },
    {
      bandeira: "IMG/uganda.png",
      pais: "Uganda",
      opcoes: ["Quênia", "Uganda", "Zâmbia"],
      curiosidade: "O país que é representado por essa bandeira possui mais de 50 grupos indígenas, cada um com idioma e cultura próprios."
    },
    {
      bandeira: "IMG/bulgaria.png",
      pais: "Bulgária",
      opcoes: ["Bulgária", "Hungria", "Chipre"],
      curiosidade: "O país que é representado por essa bandeira é considerado o berço do alfabeto cirílico."
    },
    {
      bandeira: "IMG/barbados.png",
      pais: "Barbádos",
      opcoes: ["Trindade e Tobago", "Granada", "Barbádos"],
      curiosidade: "O país que é representado por essa bandeira abriga diversas espécies de tartarugas marinhas e macacos-verdes."
    },
    {
      bandeira: "IMG/finlandia.png",
      pais: "Finlândia",
      opcoes: ["Dinamarca", "Inglaterra", "Finlândia"],
      curiosidade: "O país que é representado por essa bandeira é considerado o país mais feliz do mundo."
    },
  ],
  [ // Fase 3
    {
      bandeira: "IMG/kosovo.png",
      pais: "Kosovo",
      opcoes: ["San Marino", "Moldávia", "Kosovo"],
      curiosidade: "O nome do país que é representado por essa bandeira significa 'campo de merlos'."
    },
    {
      bandeira: "IMG/burkina_faso.png",
      pais: "Burkina Faso",
      opcoes: ["Serra Leoa", "Burkina Faso", "Senegal"],
      curiosidade: "O país que é representado por essa bandeira foi renomeado por Thomas Sankara em 1984."
    },
    {
      bandeira: "IMG/camboja.png",
      pais: "Camboja",
      opcoes: ["Camboja", "Laos", "Birmânia"],
      curiosidade: "O país que é representado por essa bandeira contém o maior monumento religioso do mundo."
    },
    {
      bandeira: "IMG/nauru.png",
      pais: "Nauru",
      opcoes: ["Fiji", "Ilhas Salomão", "Nauru"],
      curiosidade: "O país que é representado por essa bandeira é a menor ilha-estado do mundo."
    },
    {
      bandeira: "IMG/comores.png",
      pais: "Comores",
      opcoes: ["Cabo Verde", "Zimbábue", "Comores"],
      curiosidade: "O país que é representado por essa bandeira é reconhecido como 'a ilha dos perfumes'."
    },
    {
      bandeira: "IMG/mali.png",
      pais: "Mali",
      opcoes: ["Mongólia", "Mali", "Tunísia"],
      curiosidade: "O país que é representado por essa bandeira foi o berço de um dos maiores impérios da humanidade."
    },
    {
      bandeira: "IMG/seychelles.png",
      pais: "Seychelles",
      opcoes: ["República Centro-Africana", "Seychelles", "Madagascar"],
      curiosidade: "O país que é representado por essa bandeira possui a maior semente do mundo."
    },
    {
      bandeira: "IMG/malta.jpg",
      pais: "Malta",
      opcoes: ["Malta", "Vaticano", "Bahrein"],
      curiosidade: "O país que é representado por essa bandeira é o menor país da União Européia."
    },
    {
      bandeira: "IMG/dominica.png",
      pais: "Dominica",
      opcoes: ["Santa Lúcia", "República Dominicana", "Dominica"],
      curiosidade: "O país que é representado por essa bandeira possui o segundo maior lago fervente do mundo."
    },
    {
      bandeira: "IMG/togo.png",
      pais: "Togo",
      opcoes: ["Gana", "Togo", "Guiné-Bissau"],
      curiosidade: "O país que é representado por essa bandeira tem rica herança cultural e religiosa."
    },
    {
      bandeira: "IMG/maldivas.PNG",
      pais: "Ilhas Maldivas",
      opcoes: ["Uzbequistão", "Ilhas Maldivas", "Paquistão"],
      curiosidade: "O país que é representado por essa bandeira é o menor país em área e população da Ásia."
    },
    {
      bandeira: "IMG/sao_cristovao_e_neves.png",
      pais: "São Cristóvão e Neves",
      opcoes: ["São Tomé e Príncipe", "Nigeria", "São Cristóvão e Neves"],
      curiosidade: "Ambas ilhas do território do país que é representado por essa bandeira tem origem vulcânica."
    },
    {
      bandeira: "IMG/malawi.png",
      pais: "Malawi",
      opcoes: ["Malawi", "Mauritânia", "Libéria"],
      curiosidade: "O país que é representado por essa bandeira não tem saída para o mar."
    },
    {
      bandeira: "IMG/papua_nova_guine.png",
      pais: "Papua Nova Guiné",
      opcoes: ["Samoa", "Papua Nova Guiné", "Micronésia"],
      curiosidade: "O país que é representado por essa bandeira tem mais de 850 idiomas falados em seu território."
    },
    {
      bandeira: "IMG/guatemala.png",
      pais: "Guatemala",
      opcoes: ["Antígua e Barbuda", "Nicaragua", "Guatemala"],
      curiosidade: "O país que é representado por essa bandeira é considerado o berço da civilização Maia."
    },
    {
      bandeira: "IMG/tanzania.png",
      pais: "Tanzânia",
      opcoes: ["Timor-Leste", "Benim", "Tanzânia"],
      curiosidade: "O país que é representado por essa bandeira é considerado o berço da humanidade."
    },
  ]
];

let faseAtual = 0;
let bandeiraAtual = 0;
let vidas = 4;
let acertos = 0;
let totalPerguntas = 0;
let opcaoSelecionada = null;

const faseInfo = document.getElementById("fase-info");
const bandeiraInfo = document.getElementById("bandeira-info");
const vidasInfo = document.getElementById("vidas-info");
const bandeiraImg = document.getElementById("bandeira-img");
const curiosidadeTexto = document.getElementById("curiosidade");
const opcoesContainer = document.getElementById("opcoes");
const verificarBtn = document.getElementById("verificar");

function carregarPergunta() {
    const pergunta = fases[faseAtual][bandeiraAtual];
    faseInfo.textContent = `Fase ${faseAtual + 1}`;
    bandeiraInfo.textContent = `${bandeiraAtual + 1}/16`;
    vidasInfo.textContent = vidas;
    bandeiraImg.src = pergunta.bandeira;
    curiosidadeTexto.textContent = pergunta.curiosidade;
    opcoesContainer.innerHTML = "";
    pergunta.opcoes.forEach(opcao => {
        const btn = document.createElement("button");
        btn.textContent = opcao;
        btn.type = "button";
        btn.onclick = () => {
            opcaoSelecionada = opcao;
            document.querySelectorAll("#opcoes button").forEach(b => b.classList.remove("selecionado"));
            btn.classList.add("selecionado");
        };
        opcoesContainer.appendChild(btn);
    });
}
function verificarResposta() {
    if (!opcaoSelecionada) return;

    totalPerguntas++;
    const respostaCorreta = fases[faseAtual][bandeiraAtual].pais;
    if (opcaoSelecionada === respostaCorreta) {
        acertos++;
    } else {
        vidas--;
        if (vidas <= 0) {
            sessionStorage.setItem("acertos", acertos);
            sessionStorage.setItem("total", totalPerguntas);
            window.location.href = "derrota.html";
            return;
        }
    }

    bandeiraAtual++;
    if (bandeiraAtual >= fases[faseAtual].length) {
        vidas += 4;
        faseAtual++;
        bandeiraAtual = 0;
        if (faseAtual >= fases.length) {
            sessionStorage.setItem("acertos", acertos);
            sessionStorage.setItem("total", totalPerguntas);
            window.location.href = "vitoria.html";
            return;
        }
    }
    opcaoSelecionada = null;
    carregarPergunta();
}
verificarBtn.addEventListener("click", verificarResposta);
carregarPergunta();