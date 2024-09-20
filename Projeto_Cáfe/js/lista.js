var total = 0;
            const selecionados = document.getElementById('selecionados');
            const valor = document.getElementById('valor');

            function atualizarLista() {
                const maquinas = document.getElementById('maquinas');
                const saches = document.getElementById('saches');


                const valorMaquina = parseFloat(maquinas.value) || 0;
                const valorSachê = parseFloat(saches.value) || 0;


                let texto = '';
                if (valorMaquina > 0) {
                    texto += `Máquina - R$${valorMaquina.toFixed(2)}\n`;
                    total += valorMaquina; 
                    maquinas.value = ''; 
                }
                if (valorSachê > 0) {
                    texto += `Sachê - R$${valorSachê.toFixed(2)}\n`;
                    total += valorSachê; 
                    saches.value = ''; 
                }


                selecionados.textContent += texto;
                valor.value = `R$${total.toFixed(2)}`;
            }