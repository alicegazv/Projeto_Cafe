function mostrarDetalhes(elemento, imagem, preco) {

    const card = elemento.parentElement;
    
    const detalhesDiv = card.querySelector('.mais-detalhes');
    
    detalhesDiv.innerHTML = `
        <img src="${imagem}" alt="Foto do produto" style="max-width: 100%; height: auto; margin-top: 10px;">
        <p><b>${preco}</b></p>
    `;
}
