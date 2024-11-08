/*
ATIVIDADE 1

// Valores e estilo do botao de Id botao-um
let botaoUm = document.getElementById('botao-um');

botaoUm.style.backgroundColor = 'grey';

// Valores e estilo do qudrado de Id quadrado-um
let quadradoUm = document.getElementById('quadrado-um');

quadradoUm.style.width = '200px';
quadradoUm.style.height = '200px';

// addEventListener para quando clicar trocar de cor
botaoUm.addEventListener('click', function() {
    // Cor para o quadrado e para o botao
    quadradoUm.style.backgroundColor = 'green';

    botaoUm.style.backgroundColor = 'green';
    
    // Atribuicao de segunda cor para o segundo clique
    botaoUm.addEventListener('click', function() {
        quadradoUm.style.backgroundColor = 'blue';

        botaoUm.style.backgroundColor = 'blue';
    });
});

//

// Valores e estilo do botao de Id botao-dois
let botaoDois = document.getElementById('botao-dois');

botaoDois.style.backgroundColor = 'grey';

// Valores e estilo do qudrado de Id quadrado-dois
let quadradoDois = document.getElementById('quadrado-dois');

quadradoDois.style.width = '200px';
quadradoDois.style.height = '200px';

// addEventListener para quando clicar trocar de cor
botaoDois.addEventListener('click', function() {
    quadradoDois.style.backgroundColor = 'green';

    botaoDois.style.backgroundColor = 'green';
    
    // Atribuicao de segunda cor para o segundo clique
    botaoDois.addEventListener('click', function() {
        quadradoDois.style.backgroundColor = 'blue';

        botaoDois.style.backgroundColor = 'blue';
    });
});

//

// Valores e estilo do botao de Id botao-tres
let botaoTres = document.getElementById('botao-tres');

botaoTres.style.backgroundColor = 'grey';

// Valores e estilo do qudrado de Id quadrado-tres
let quadradoTres = document.getElementById('quadrado-tres');

quadradoTres.style.width = '200px';
quadradoTres.style.height = '200px';

// addEventListener para quando clicar trocar de cor
botaoTres.addEventListener('click', function() {
    quadradoTres.style.backgroundColor = 'green';

    botaoTres.style.backgroundColor = 'green';

    // Atribuicao de segunda cor para o segundo clique
    botaoTres.addEventListener('click', function() {
        quadradoTres.style.backgroundColor = 'blue';

        botaoTres.style.backgroundColor = 'blue';
    });
});
// sei que com classes seria melhor mas não consegui :)
*/
/*
//ATIVIDADE 2
// O botao
let contador = document.getElementById('contador');
let texto = document.getElementById('texto');

// Variavel para contar os cliques
let cliques = 0;

// Quando o contador for clicado os cliques aumentam e sao impressos
contador.addEventListener('click', function () {
    cliques++;
    
    texto.innerText = Cliques: ${cliques};
});
*/
/*
// ATIVIDADE 3

// variaveis (frase/ocultar/mostrar)
let frase = document.getElementById('frase');

let mostrar = document.getElementById('mostrar');

let ocultar = document.getElementById('ocultar');

// para mostrar o texto
mostrar.addEventListener('click', function () {
    if (mostrar) {
        frase.innerText = 'Frase aqui';
    }
});

// para ocultar o texto
ocultar.addEventListener('click', function () {
    if (ocultar) {
        frase.innerText = ' ';
    }
});
*/
/*
// ATIVIDADE 4

// Variaveis
let frase = document.getElementById('frase');

let botao = document.getElementById('botao');

// Quando o botao for clicado aparecerá um prompt para que uma nova frase seja informada e então substitu-a a frase padrao
botao.addEventListener('click', function () {
    let novaFrase = prompt('Digite uma nova frase:');
    frase.innerText = novaFrase;
});
*/
/*
// ATIVIDADE 5
document.addEventListener("keydown", function(event) {
    const mensagem = document.getElementById("mensagem");
    mensagem.innerText = Tecla pressionada: ${event.key};
    console.log(Tecla pressionada: ${event.key});
});
*/
/*
// ATIVIDADE 6
// variáveis
let botao = document.getElementById('botao');
let bob = document.getElementById('bob');
let patrick = document.getElementById('patrick');
let gary = document.getElementById('gary');

let candidato01 = document.getElementById('candidato01');
let candidato02 = document.getElementById('candidato02');
let candidato03 = document.getElementById('candidato03');
let candidato04 = document.getElementById('candidato04');

let contador01 = 0;
let contador02 = 0;
let contador03 = 0;
let contador04 = 0;

// imagem não pode ser vista
bob.style.display = 'none';
patrick.style.display = 'none';
gary.style.display = 'none';

// função para a eleição, quando clicar em votar terá mais coisas
botao.addEventListener('click', function() {
    bob.style.display = 'none';
    patrick.style.display = 'none';
    gary.style.display = 'none';
    // pergunta em quem quer votar
    let voto = prompt('Voto:\n|| 1 - Bob Esponja\n|| 2 - Patrick Estrela\n|| 3 - Gary, o Caramujo');
    // se o voto for 1 pergunta se pode confirmar
    if (voto === '1') {
        let confirmar = prompt('Você tem certeza?').toUpperCase();
        // se o usuário aceitar a confirmação então mostra para quem foi o voto e aparece a foto do candidato
        if (confirmar == 'S') {
            alert('Voto: Bob Esponja');
            bob.style.display = 'block';

            contador01 +=1;
            candidato01.innerText = `Bob Esponja: ${contador01}`;
        } else if (confirmar == 'N') { // se o usuário desejar não confirmar então aparece uma mensagem
            alert('Voto não confirmado.')
        } else { // se a resposta for diferente de 'N' ou 'S' então aparece uma mensagem de erro
            alert('Algo deu errado. Por favor tente novamente.')
        } // o mesmo acontece no resto dos "if else"
    } else if (voto === '2') {
        let confirmar = prompt('Confirmar voto?').toUpperCase();
        
        if (confirmar == 'S') {
            alert('Voto: Patrick Estrela');
            patrick.style.display = 'block';

            contador02 +=1;
            candidato02.innerText = `Patrick Estrela: ${contador02}`;
        } else if (confirmar == 'N') {
            alert('Voto não confirmado.')
        } else {
            alert('Algo deu errado. Por favor tente novamente.')
        }
    } else if (voto === '3') {
        let confirmar = prompt('Confirmar voto?').toUpperCase();

        if (confirmar == 'S') {
            alert('Voto: Gary, o Caramujo');
            gary.style.display = 'block';

            contador03 +=1;
            candidato03.innerText = `Gary, o Caramujo: ${contador03}`;
        } else if (confirmar == 'N') {
            alert('Voto não confirmado.')
        } else {
            alert('Algo deu errado. Por favor tente novamente.')
        }
    } else {
        alert('Voto nulo.')
        contador04 +=1;
        candidato04.innerText = `Nulos: ${contador04}`;
    }
});
*/
/**/
// DESAFIO

document.getElementById("botao").addEventListener("click", function() {
  const item = prompt("Digite o item que deseja adicionar:");
  if (item) {
      const itemLista = document.createElement("li");
      itemLista.innerHTML = item;
      document.getElementById("listaItem").appendChild(itemLista); // appendChild: um elemento é add e então esse método atribui um vlor à ele, no caso o que está nos parenteses (itemLista)
      // o "itemLista" recebe um valor que substitui o "item" e então é impresso na tela
  }
});