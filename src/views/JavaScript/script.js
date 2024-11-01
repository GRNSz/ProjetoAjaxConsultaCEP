document.getElementById('buscarCep').addEventListener('click', function() {
    const cep = document.getElementById('cep').value;

    fetch(`ConsultaCEP.php?cep=${cep}`)
    .then(response => response.json())
    .then(data => {
        if(data.error) {
            document.getElementById('resultado').innerText = data.error;
        } else {
            document.getElementById('resultado').innerText = `
                CEP: ${data.cep}
                Logradouro: ${data.logradouro}
                Bairro: ${data.bairro}
                Cidade: ${data.localidade}
                Estado: ${data.uf}
            `;
        }
    })
    .catch(error => {
        console.log('Erro: ', error);
        document.getElementById('resultado').innerText = 'Erro ao consultar o CEP';
    });
});