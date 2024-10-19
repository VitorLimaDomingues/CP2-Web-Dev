// Adicionando um alert de bem vindo. 
// alert('Bem vindo ao site Bike na trilha')

// Trocar cor de fundo do site
function trocar(cor){
    document.body.style.background = cor;
}

// Formulário para cadastro do usuário

// Chamando o elemento do formulário pelo seu ID
let form = document.getElementById('form');

// Adiciona um evento 'submit' ao formulário que será acionado quando o usuário tentar enviar o formulário
form.addEventListener('submit', function(e){
    e.preventDefault(); // Impede o envio padrão do formulário para evitar um recarregamento da página

    // Extrai os valores dos campos de entrada 'nome', 'email' e 'telefone' usando um array e o método map
    let [nome, email, telefone] = ['nome', 'email', 'telefone'].map(name =>
        form.querySelector(`[name=${name}]`).value // Seleciona o campo pelo nome e obtém seu valor
    );
    
    // Atualiza o conteúdo HTML dos elementos com os IDs '1', '2' e '3' com os valores extraídos
    document.getElementById('1').innerHTML = nome; // Exibe o nome no elemento com ID '1'
    document.getElementById('2').innerHTML = telefone; // Exibe o telefone no elemento com ID '2'
    document.getElementById('3').innerHTML = email; // Exibe o email no elemento com ID '3'
});



// Estrutura para adicionar '()' e '-' automanticamente enquanto o usuário digita seu número
// Nota: O hífen só irá funcionar "bonito" com números de alguns estados (por causa do formato de 9 dígitos).

let telefoneInput = document.getElementById('telefone'); // Chamando o elemento de entrada do telefone pelo seu ID

    telefoneInput.addEventListener('input', function() { // Adicionando um evento que será acionado sempre que o usuário digitar no campo
    let value = this.value.replace(/\D/g, ''); // Removendo os caracteres não numéricos.

    // Formatação em tempo real
    if (value.length > 9) { // Se o comprimento do valor for maior que 9 (número inválido, mas pode ser necessário para alguns formatos)
        value = `(${value.substring(0, 2)}) ${value.substring(2, 7)}-${value.substring(7, 11)}`; // Formata o número no padrão (XX) XXXXX-XXXX
    } else if (value.length > 7) { // Se o comprimento do valor for maior que 7 (número de celular de SP)
        value = `(${value.substring(0, 2)}) ${value.substring(2, 7)}-${value.substring(7)}`; // Formata o número no padrão (XX) XXXXX-XXXX
    } else if (value.length > 2) { // Se o comprimento do valor for maior que 2
        value = `(${value.substring(0, 2)}) ${value.substring(2)}`; // Formata o número no padrão (XX) XXXXXX
    } else if (value.length > 0) { // Se o comprimento do valor for maior que 0
        value = `(${value}`; // Adiciona o parêntese de abertura para o DDD
    }

    this.value = value; // Atualiza o valor do campo de entrada com a formatação aplicada
});

// Adicionando um evento para formatar o telefone ao perder o foco
telefoneInput.addEventListener('blur', function() { // Quando o campo perde o foco
    let value = this.value.replace(/\D/g, ''); // Removendo os caracteres não numéricos.

    // Formatando o telefone
    if (value.length >= 10) { // Se o comprimento do valor for 10 ou mais (considerando o DDD)
        this.value = `(${value.substring(0, 2)}) ${value.substring(2, 7)}-${value.substring(7, 11)}`; // Formato: (XX) XXXXX-XXXX
    } else if (value.length > 7) { // Se o comprimento do valor for maior que 7 (número de celular de SP)
        this.value = `(${value.substring(0, 2)}) ${value.substring(2, 7)}-${value.substring(7)}`; // Formato: (XX) XXXXX-XXXX
    } else if (value.length > 2) { // Se o comprimento do valor for maior que 2
        this.value = `(${value.substring(0, 2)}) ${value.substring(2)}`; // Formato: (XX) XXXXXX
    } else if (value.length > 0) { // Se o comprimento do valor for maior que 0
        this.value = `(${value}`; // Adiciona o parêntese de abertura para o DDD
    } else {
        this.value = value; // Se não houver valor, mantém o campo limpo
    }
});
