let precoGeral;
limpar()

function adicionar(){
let produto = document.getElementById('produto').value;
let nomeProduto = produto.split('-')[0];
let precoProduto = produto.split('R$')[1];
let qtd = document.getElementById('quantidade').value
let valorSomado = qtd*precoProduto;
let listaProdutos = document.getElementById('lista-produtos')


if(qtd <= 0){
    alert ('Insira uma quantidade válida')
    return;
} 

listaProdutos.innerHTML = listaProdutos.innerHTML + `<section class="carrinho__produtos__produto">
<span class="texto-azul">${qtd}x</span> ${nomeProduto} <span class="texto-azul">R${valorSomado}</span>
</section>`

precoGeral = precoGeral + valorSomado;
let valorTotal = document.getElementById('valor-total');
valorTotal.textContent = (`R$ ${precoGeral}`);
document.getElementById('quantidade').value = 0;
}

function limpar(){
 precoGeral = 0;
 document.getElementById('lista-produtos').innerHTML = '';
 document.getElementById('valor-total').textContent = 0;
}