//O principal objetivo deste desafio é fortalecer suas habilidades em lógica de programação. Aqui você deverá desenvolver a lógica para resolver o problema.
let listaAmigos = [];
let nome;

function adicionarAmigo() {
    nome = document.querySelector('input').value;
    if (nome == '') {
        alertInserirNome();
    } else {
        adicionarNomeAmigo();
        
    }  
}

function adicionarNomeAmigo() {
    listaAmigos.push(nome);
    console.log(listaAmigos);
    limparCampo();
    return listaAmigos;
}

function mostrarLista() {
    
}

function limparCampo() {
    nome = document.querySelector('input');
    nome.value = '';
}

function alertInserirNome () {
    inserirNome = alert('Por favor, insira um nome.');
    return inserirNome;
}
