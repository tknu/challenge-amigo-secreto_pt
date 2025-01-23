//O principal objetivo deste desafio é fortalecer suas habilidades em lógica de programação. Aqui você deverá desenvolver a lógica para resolver o problema.

// Array para armazenar os nomes dos amigos que participarão do sorteio.
let listaAmigos = [];

// Variável para armazenar o nome do amigo secreto sorteado.
let amigoSecreto ='';

/**
 * Função para adicionar um amigo à lista.
 * Obtém o nome do input, verifica se está vazio,
 * e chama a função para adicionar o nome na lista.
 */
function adicionarAmigo() {
    // Obtém o valor do campo de input.
    let nome = document.querySelector('input').value;
    // Verifica se o nome está vazio.
    if (nome === '') {
        // Exibe um alerta para inserir um nome.
        alertInserirNome();
    } else {
        // Adiciona o nome à lista de amigos.
        adicionarNomeAmigo(nome); 
    }  
}

/**
 * Função para adicionar o nome do amigo na lista e atualizar a exibição.
 * @param {string} nome - O nome do amigo a ser adicionado.
 */
function adicionarNomeAmigo(nome) {
    // Adiciona o nome à lista de amigos.
    listaAmigos.push(nome);
    // Limpa o campo de input.
    limparCampo();
    // Exibe a lista de amigos na página.
    mostrarLista();
  }

// Adiciona um listener de evento para capturar a tecla "Enter" no campo de input.
document.querySelector('input').addEventListener('keypress', function(event) {
    // Verifica se a tecla pressionada é "Enter".
    if (event.key === 'Enter') {
        // Chama a função para adicionar um amigo.
        adicionarAmigo(); 
    }
});

/**
 * Função para sortear um amigo secreto da lista.
 * Verifica se há pelo menos dois amigos na lista antes de sortear.
 * @returns {string} O nome do amigo secreto sorteado.
 */
function sortearAmigo() {
    // Verifica se há pelo menos dois amigos na lista.
    if(listaAmigos.length < 2){
        // Exibe um alerta para inserir pelo menos dois amigos.
        alert("Insira pelo menos 2 amigos para realizar o sorteio!");
        return;
    }
    // Gera um índice aleatório para escolher um amigo da lista.
    let indiceAmigoSecreto = Math.floor(Math.random() * listaAmigos.length);
    // Seleciona o amigo secreto com base no índice aleatório.
    amigoSecreto = listaAmigos[indiceAmigoSecreto];
    // Exibe o resultado do sorteio na página.
    document.getElementById('resultado').innerHTML = `Seu amigo secreto é a(o) ${amigoSecreto}!`;
    // Retorna o nome do amigo secreto sorteado.
    return amigoSecreto;
}

/**
 * Função para exibir a lista de amigos na página.
 * Cria elementos <li> para cada amigo e adiciona na lista.
 */
function mostrarLista() {
    // Inicializa uma string vazia para montar o HTML da lista.
    let listaHtml = '';
    // Loop para criar um elemento <li> para cada amigo na lista.
    for (let i = 0; i < listaAmigos.length; i++) {
        listaHtml += `<li>${listaAmigos[i]}</li>`;
    }
    // Insere o HTML da lista na página.
    document.getElementById('listaAmigos').innerHTML = listaHtml;
   
}

/**
 * Função para limpar o campo de input.
 */
function limparCampo() {
    // Obtém o elemento de input.
    nome = document.querySelector('input');
    // Limpa o valor do campo de input.
    nome.value = '';
}

/**
 * Função para exibir um alerta pedindo para inserir um nome.
 */
function alertInserirNome () {
    // Exibe um alerta pedindo para inserir um nome.
    inserirNome = alert('Por favor, insira um nome.');
    // Retorna o valor do alert.
    return inserirNome;
}
