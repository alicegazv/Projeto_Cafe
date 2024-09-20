function abrirModal(nomeMaquina, quantidade, imagem, produtos) {

    document.getElementById('modal-title').textContent = nomeMaquina;
    document.getElementById('modal-quantidade').textContent = `Caixa  ${quantidade} capsulas`;
    document.getElementById('modal-imagem').src = imagem;

    const listaProdutos = document.getElementById('modal-produtos');
    listaProdutos.innerHTML = ''; 
    produtos.forEach(produto => {
        const li = document.createElement('li');
        li.textContent = `${produto.nome}: ${produto.preco}`;
        listaProdutos.appendChild(li);
    });

    // Mostrando a modal
    const modal = document.getElementById('sacheModal');
    modal.style.display = "block";
}

// Fechando a modal
const modal = document.getElementById('sacheModal');
const span = document.getElementsByClassName('close')[0];

span.onclick = function() {
    modal.style.display = "none";
}

window.onclick = function(event) {
    if (event.target == modal) {
        modal.style.display = "none";
    }
}


document.getElementById('nespresso-livanto').addEventListener('click', function() {
    abrirModal('Nespresso Livanto', 10, 'img/NespressoLivanto.png', [
        { nome: 'Expresso', preco: 'R$19,90' },
        { nome: 'Descafeinado', preco: 'R$11,00' }
    ]);
});

document.getElementById('nespresso-ristretto').addEventListener('click', function() {
    abrirModal('Nespresso Ristretto', 8, 'img/NespressoRistretto.png', [
        { nome: 'Expresso', preco: 'R$15,00' },
        { nome: 'Descafeinado', preco: 'R$17,00' }
    ]);
});

document.getElementById('nespresso-vanilio').addEventListener('click', function() {
    abrirModal('Nespresso Vanilio', 12, 'img/NespressoVanilio.png', [
        { nome: 'Expresso', preco: 'R$13,00' },
        { nome: 'Descafeinado', preco: 'R$19,00' }
    ]);
});

document.getElementById('senseo-classico').addEventListener('click', function() {
    abrirModal('Senseo Classico', 7, 'img/Senseo_Classico.jpg', [
        { nome: 'Expresso', preco: 'R$8,00' },
        { nome: 'Descafeinado', preco: 'R$10,00' }
    ]);
});

document.getElementById('senseo-intenso').addEventListener('click', function() {
    abrirModal('Senseo Intenso', 6, 'img/SenseoIntenso.jpg', [
        { nome: 'Expresso', preco: 'R$12,00' },
        { nome: 'Descafeinado', preco: 'R$6,50' }
    ]);
});