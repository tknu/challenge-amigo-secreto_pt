//O principal objetivo deste desafio é fortalecer suas habilidades em lógica de programação. Aqui você deverá desenvolver a lógica para resolver o problema.
let listaAmigos = [];
let nome;
let amigoSecreto ='';

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
    mostrarLista();
    return listaAmigos;
}

document.querySelector('input').addEventListener('keypress', function(event) {
    if (event.key === 'Enter') {
        adicionarAmigo(); 
    }
});

function sortearAmigo() {
    let indiceAmigoSecreto = parseInt(Math.random() * listaAmigos.length)
    amigoSecreto = listaAmigos[indiceAmigoSecreto];
    return console.log(amigoSecreto);
}

function mostrarLista() {
    /*
    document.getElementById('listaAmigos').innerHTML = 
    listaAmigos.map(item=>`<li>${item}</li>`).join('');
    */
   let listaHtml = '';
   for (let i = 0; i < listaAmigos.length; i++) {
        listaHtml += `<li>${listaAmigos[i]}</li>`;
   }
   document.getElementById('listaAmigos').innerHTML = listaHtml;
   
}

function limparCampo() {
    nome = document.querySelector('input');
    nome.value = '';
}

function alertInserirNome () {
    inserirNome = alert('Por favor, insira um nome.');
    return inserirNome;
}
