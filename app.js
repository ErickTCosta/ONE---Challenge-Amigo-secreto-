//O principal objetivo deste desafio é fortalecer suas habilidades em lógica de programação. Aqui você deverá desenvolver a lógica para resolver o problema.
let lista_amigos = [];

function adicionarAmigo() {
  const nome_amigo = document.getElementById("amigo").value.trim();
  if (nome_amigo === "") {
    exibirErro("Digite um nome válido");
    return;
  }
  if (verificarAmigo(nome_amigo)) {
    exibirErro("Amigo já adicionado");
    return;
  }
  lista_amigos.push(nome_amigo);
  exibirListaAmigos();
  limparInput();
}

// não permitir adicionar o mesmo amigo
function verificarAmigo(nome) {
  return lista_amigos.includes(nome);
}

function limparInput() {
  document.getElementById("amigo").value = "";
}

function exibirErro(mensagem) {
  const erroElement = document.getElementById("erro");
  erroElement.innerHTML = mensagem;
  setTimeout(() => {
    document.getElementById("erro").innerHTML = "";
  }, 3000);
}

function exibirResultado(mensagem) {
  document.getElementById("resultado").innerHTML = mensagem;
}

function sortearAmigo() {
  if (lista_amigos.length === 0) {
    document.getElementById("resultado").innerHTML =
      "Adicione um amigo antes de sortear";
    return;
  }
  const amigoSorteado =
    lista_amigos[Math.floor(Math.random() * lista_amigos.length)];
  exibirResultado(`O amigo sorteador é: ${amigoSorteado}`);
}

//exibir a lista de amigos
function exibirListaAmigos() {
  const listaElement = document.getElementById("listaAmigos");
  listaElement.innerHTML = "";

  lista_amigos.forEach((amigo) => {
    const li = document.createElement("li");
    li.textContent = amigo;
    listaElement.appendChild(li);
  });
  console.log(lista_amigos);
}
