const palavras = [
  "macaco", "elefante", "baleia", "cachorro", "abelha", "vaca", "hipopótamo", "jaguatirica"
];

const spSituacao = document.getElementById("spSituacao");
const viewPalavraSorteada = document.getElementById("viewPalavraSorteada");
const spPlacar = document.getElementById("spPlacar");
const viewPalavraSorteadaEmbaralhada = document.getElementById("viewPalavraSorteadaEmbaralhada");
const spQuantTentativas = document.getElementById("spQuantTentativas");
const ipPalavraResposta = document.getElementById("ipPalavraResposta");
const btnVerificarPalavra = document.getElementById("btnVerificarPalavra");
let sortearPalavra;
let palavraSorteada;
let arraySortearPalavras;
let palavraEmbaralhada;


//CONTADOR TENTATIVAS.
var contadorTentativas = 3;


//CONTADOR VITÓRIAS.
var contadorVitorias = 0;

//SORTEANDO A PALAVRA. 
//Código refatorado com 6 sentenças
function sorteandoPalavra() {
   sortearPalavra = Math.floor(Math.random() * palavras.length);
   palavraSorteada = palavras[sortearPalavra];

  spSituacao.innerHTML = "";
console.log(palavraSorteada);
embaralhandoPalavra();
resetandoGame();
}

//Código refatorado com 6 sentenças
function resetandoGame() {
  spSituacao.innerHTML = "";

  contadorTentativas = 3;
  spQuantTentativas.innerHTML = `Chances restantes: 3 `

  btnVerificarPalavra.disabled = false;
  ipPalavraResposta.disabled = false;
  ipPalavraResposta.value = "";
}

//EMBARALHANDO PALAVRA.
//Código refatorado com 6 sentenças
function embaralhandoPalavra() {
  

  arraySortearPalavras = palavraSorteada.split("")
  palavraEmbaralhada = arraySortearPalavras.sort().join("");
  viewPalavraSorteadaEmbaralhada.innerHTML = `<p> A palavra embaralhada sorteada é: 
  ${palavraEmbaralhada} </p>`;
  viewPalavraSorteada.innerHTML = "";
}

//VERIFICANDO RESULTADO.
//Código refatorado com 6 sentenças
btnVerificarPalavra.addEventListener("click", verificandoResposta);

function pontuacaoMelhorada(){
  contadorVitorias += contadorTentativas;
}

//Código refatorado com 6 sentenças
function respostaCerta(){
  viewPalavraSorteada.innerHTML = `<p> A palavra sorteada é: ${palavraSorteada} </p>`;
  spSituacao.innerHTML = "<p> Você acertou! </p>";
  btnVerificarPalavra.setAttribute("disabled", "true");
  ipPalavraResposta.setAttribute("disabled", "true");
  viewPalavraSorteadaEmbaralhada.innerHTML = "";
  pontuacaoMelhorada();
}

//Código refatorado com 6 sentenças
function travandoDerrota(){
  contadorTentativas--
  spQuantTentativas.innerHTML = `Chances restantes: ${contadorTentativas} `
  if (contadorTentativas == 0) {
    btnVerificarPalavra.setAttribute("disabled", "true");
    ipPalavraResposta.setAttribute("disabled", "true");
  }
}



//Código refatorado com 6 sentenças
function verificandoResposta() {
  if (ipPalavraResposta.value == palavraSorteada) {
    respostaCerta();
    spPlacar.innerHTML = `<p> A sua pontuação é: ${contadorVitorias} </p>`;
  } else {
    spSituacao.innerHTML = "<p> Você errou! </p>";
    travandoDerrota();
  }

  
}









