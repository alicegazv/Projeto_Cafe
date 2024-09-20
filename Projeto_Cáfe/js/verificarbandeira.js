function identificarBandeira() {
    const numero = document.getElementById('numero').value;
    const visa = /^4/;
    const master = /^5[1-5]/;
    const amex = /^3[47]/;

    // Desmarcar todas as bandeiras
    document.getElementById('visa').checked = false;
    document.getElementById('master').checked = false;
    document.getElementById('amex').checked = false;

    // Verifica e marca a bandeira correta
    if (visa.test(numero)) {
        document.getElementById('visa').checked = true;
    } else if (master.test(numero)) {
        document.getElementById('master').checked = true;
    } else if (amex.test(numero)) {
        document.getElementById('amex').checked = true;
    }
}

function validarNumero() {
    const numero = document.getElementById('numero').value.replace(/\D/g, ''); 
    const cardErrorMsg = document.getElementById('card-error-msg');

    const visa = /^4\d{14}$/; 
    const master = /^5[1-5]\d{15}$/; 
    const amex = /^3[47]\d{13}$/; 


    const mensagemQuantidade = 'Quantidade de números do cartão inválida.';
    const mensagemInvalido = 'Número de cartão inválido.';

 
    cardErrorMsg.textContent = '';
    document.getElementById('numero').style.border = '';

    if (numero.length > 0) {
        if (visa.test(numero) || master.test(numero) || amex.test(numero)) {

            if (
                (numero.length === 15 && (visa.test(numero) || amex.test(numero))) ||
                (numero.length === 16 && master.test(numero))
            ) {
                cardErrorMsg.textContent = ''; 
                document.getElementById('numero').style.border = '';
            } else {

                cardErrorMsg.textContent = mensagemQuantidade;
                document.getElementById('numero').style.border = '2px solid red'; 
            }
        } else {
  
            cardErrorMsg.textContent = mensagemInvalido;
            document.getElementById('numero').style.border = '2px solid red'; 
        }
    } else {

        cardErrorMsg.textContent = '';
        document.getElementById('numero').style.border = '';
    }
}


document.getElementById('numero').addEventListener('keyup', function() {
    identificarBandeira();
    validarNumero();
});


