function pesquisacep(valor) {
    // Remove tudo o que não é número
    var cep = valor.replace(/\D/g, '');

    // Verifica se o campo CEP possui valor informado
    if (cep != "") {
        // Expressão regular para validar o CEP
        var validacep = /^[0-9]{8}$/;

        // Valida o formato do CEP
        if(validacep.test(cep)) {
            // Preenche os campos com "..." enquanto consulta o webservice
            document.getElementById('rua').value = "...";
            document.getElementById('bairro').value = "...";
            document.getElementById('cidade').value = "...";
            document.getElementById('uf').value = "...";
            document.getElementById('ibge').value = "...";

            // Cria um objeto XMLHttpRequest
            var xhr = new XMLHttpRequest();
            xhr.open("GET", `ConsultaCEP.php?cep=${cep}`, true);
            xhr.onreadystatechange = function () {
                if (xhr.readyState == 4 && xhr.status == 200) {
                    var data = JSON.parse(xhr.responseText);
                    meu_callback(data);
                }
            };
            xhr.send();
        } else {
            // CEP é inválido
            alert("Formato de CEP inválido.");
            limpaFormulario();
        }
    } else {
        // CEP sem valor, limpa formulário
        limpaFormulario();
    }
}