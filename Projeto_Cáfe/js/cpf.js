 function calculaDV(num) {
            let resto = 0, soma = 0;
            for (let i = 2; i < 11; i++) {
                soma += (num % 10) * i;
                num = parseInt(num / 10);
            }
            resto = soma % 11;
            return (resto > 1) ? (11 - resto) : 0;
        }

        function validaCPF(cpf) {
            cpf = cpf.replace(/\D/g, ''); 

            if (cpf.length !== 11) {
                return 'CPF deve conter 11 dígitos.';
            }

            if (!/^\d{11}$/.test(cpf)) {
                return 'CPF deve conter apenas números.';
            }

            if (/^(\d)\1*$/.test(cpf)) {
                return 'CPF inválido. Todos os dígitos são iguais.';
            }

            let identificacao = parseInt(cpf.substring(0, 9));
            let primeiroDigito = calculaDV(identificacao);
            let segundoDigito = calculaDV(identificacao * 10 + primeiroDigito);

            if (primeiroDigito !== parseInt(cpf[9]) || segundoDigito !== parseInt(cpf[10])) {
                return 'Dígitos de verificação incorretos.';
            }

            return ''; 
        }

        function verificarCPF() {
            const cpfInput = document.getElementById('cpf');
            const errorMsg = document.getElementById('error-msg');
            const cpfInvalidCharError = document.getElementById('cpfInvalidCharError');
            const cpf = cpfInput.value;

            const cpfCleaned = cpf.replace(/\D/g, '');

            // Verifica se há caracteres não numéricos
            if (/[^0-9]/.test(cpf)) {
                cpfInvalidCharError.textContent = 'CPF só pode ter dígitos, caractere inválido!';
                cpfInvalidCharError.style.display = 'inline';
                errorMsg.textContent = '';
                cpfInput.classList.add('error');
                return;
            } else {
                cpfInvalidCharError.style.display = 'none';
            }


            const validationMessage = validaCPF(cpfCleaned);

            if (validationMessage === '') {
                errorMsg.textContent = '';
                cpfInput.classList.remove('error');
            } else {
                errorMsg.textContent = validationMessage;
                cpfInput.classList.add('error');
            }
        }