const container = document.querySelector('.container');
const textoAcertos = document.createElement('h2');
textoAcertos.textContent = 'Acertos: 0';
document.body.appendChild(textoAcertos);
let indexDaPerguntaAtual = 0;

const pergunta1 = {
  a: '5',
  b: '69',
  c: '420',
  d: '2',
  titulo: 'Quanto é 1 + 1',
  correta: '2',
}

const pergunta2 = {
  a: '5',
  b: '69',
  c: '3',
  d: '420',
  titulo: 'Quanto é 1 + 2',
  correta: '3',
}

const pergunta3 = {
  a: 'Dia de aventura',
  b: 'Dia de Projeto',
  c: 'Dia da pascoa',
  d: 'Blackfriday',
  titulo: 'Que dia é hoje?',
  correta: 'Dia de Projeto',
}


const perguntas = [
  pergunta1, pergunta2, pergunta3
];

function criaOpcao(texto) {
  const opcao = document.createElement('p');
  opcao.textContent = texto;
  return opcao;
}

function blocoDePergunta(pergunta) {
  const titulo = document.createElement('h3');
  titulo.textContent = pergunta.titulo;
  container.appendChild(titulo);
  container.appendChild(criaOpcao(pergunta.a));
  container.appendChild(criaOpcao(pergunta.b));
  container.appendChild(criaOpcao(pergunta.c));
  container.appendChild(criaOpcao(pergunta.d));
}
// feito antes do objeto

blocoDePergunta(perguntas[indexDaPerguntaAtual]);

let acertos = 0;
function capturaClick(event) {

  console.log('opcao correta', perguntas[indexDaPerguntaAtual].correta)
  const textoDoElementoClicado = event.target.textContent;
  if (textoDoElementoClicado === perguntas[indexDaPerguntaAtual].correta) { // caso esteja correto
    console.log('Acertou mezeraaaviii');  
    acertos += 1;
    //textoAcertos.textContent = 'Acertos: ' + acertos;
    textoAcertos.textContent = `Acertos: ${acertos} questão: ${indexDaPerguntaAtual}`;
  }

  if(indexDaPerguntaAtual > perguntas.length - 2) {
    indexDaPerguntaAtual = 0;
  } else {
    indexDaPerguntaAtual += 1;
  }

  container.innerHTML = '';
  blocoDePergunta(perguntas[indexDaPerguntaAtual]);
}

container.addEventListener('click', capturaClick);
