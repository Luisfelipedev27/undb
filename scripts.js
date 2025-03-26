const form = document.getElementById('formCadastro');
const tabela = document.getElementById('tabela').getElementsByTagName('tbody')[0];

let contador = tabela.rows.length + 1;

form.addEventListener('submit', function (event) {
  event.preventDefault();

  const nome = document.getElementById('nome').value;
  const preco = document.getElementById('preco').value;

  const novaLinha = tabela.insertRow();

  const celulaIndice = novaLinha.insertCell(0);
  const celulaNome = novaLinha.insertCell(1);
  const celulaPreco = novaLinha.insertCell(2);
  const celulaAcoes = novaLinha.insertCell(3);

  celulaIndice.textContent = contador++;
  celulaNome.textContent = nome;
  celulaPreco.textContent = `R$ ${parseFloat(preco).toFixed(2)}`;
  celulaAcoes.innerHTML = `<button class="btn btn-danger btn-sm remover">Remover</button>`;

  form.reset();
  $('#modalCadastro').modal('hide');
});

tabela.addEventListener('click', function (event) {
  if (event.target.classList.contains('remover')) {
    const linha = event.target.closest('tr');
    linha.remove();
    atualizarIndices();
  }
});

function atualizarIndices() {
  const linhas = tabela.rows;
  for (let i = 0; i < linhas.length; i++) {
    linhas[i].cells[0].textContent = i + 1;
  }
  contador = linhas.length + 1;
}
