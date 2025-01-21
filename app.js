//O principal objetivo deste desafio é fortalecer suas habilidades em lógica de programação. Aqui você deverá desenvolver a lógica para resolver o problema.
let listaAmigos = [];

function adicionarAmigo() {
    let nome = document.querySelector('input').value;
    listaAmigos.push(nome);
    console.log(listaAmigos);
    limparCampo();
    return listaAmigos;
    
}

function limparCampo() {
    nome = document.querySelector('input');
    nome.value = '';
}
