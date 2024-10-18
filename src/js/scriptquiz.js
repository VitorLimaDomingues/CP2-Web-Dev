// Adicionando alert para o quiz
alert('Vamos conhecer um pouco sobre bikes')

// Trocar cor de fundo do site
function trocar(cor){
    document.body.style.background = cor;
}

// Array de objetos contendo as perguntas e respostas corretas do quiz
const perguntas = [
    {
        // Primeira pergunta e resposta correta
        pergunta: "Qual o principal componente que conecta o pedal à roda traseira da bicicleta?\n a) Corrente \n b) Pneu \n c) Freio",
        resposta: "A"
    },
    {
        // Segunda pergunta e resposta correta
        pergunta: "O que você deve sempre verificar antes de sair para pedalar?\n a) Os freios \n b) O assento \n c) O quadro",
        resposta: "A"
    },
    {
        // Terceira pergunta e resposta correta
        pergunta: "Qual é o nome do mecanismo que permite trocar as marchas da bicicleta?\n a) Pedal \n b) Câmbio \n c) Guidão",
        resposta: "B"
    },
    {
        // Quarta pergunta e resposta correta
        pergunta: "Qual item de segurança é obrigatório para o ciclista?\n a) Câmera de ar \n b) Capacete \n c) Farol traseiro",
        resposta: "B"
    },
    {
        // Quinta pergunta e resposta correta
        pergunta: "O que o ciclista deve fazer ao avistar um semáforo vermelho?\n a) Acelerar \n b) Parar \n c) Sinalizar",
        resposta: "B"
    },
    {
        // Sexta pergunta e resposta correta
        pergunta: "Qual é o nome da estrutura metálica que sustenta os componentes da bicicleta?\n a) Pneu \n b) Quadro \n c) Pedal",
        resposta: "B"
    },
    {
        // Sétima pergunta e resposta correta
        pergunta: "Como você pode aumentar a vida útil dos pneus da bicicleta?\n a) Pedalando sempre rápido \n b) Verificando a pressão regularmente \n c) Usando marchas mais leves",
        resposta: "B"
    },
    {
        // Oitava pergunta e resposta correta
        pergunta: "Qual é a principal função das marchas em uma bicicleta?\n a) Aumentar a velocidade \n b) Ajustar a resistência ao pedalar \n c) Mudar a direção",
        resposta: "B"
    },
    {
        // Nona pergunta e resposta correta
        pergunta: "Como você deve sinalizar uma curva à direita enquanto está pedalando?\n a) Levantando a mão esquerda \n b) Levantando a mão direita \n c) Pisando no freio",
        resposta: "B"
    },
    {
        // Décima pergunta e resposta correta
        pergunta: "Qual é a melhor maneira de manter a corrente da bicicleta funcionando corretamente?\n a) Mantê-la lubrificada \n b) Acelerando ao máximo \n c) Usando marchas altas",
        resposta: "A"
    }
]

// Declarando a variável que conta o número de acertos
let acertos = 0;

// Loop que percorre todas as perguntas
for (let i = 0; i < perguntas.length; i++) {
    // Exibe a pergunta ao usuário e armazena a resposta dada
    const respostaUsuario = prompt(perguntas[i].pergunta)
    
    // Verifica se a resposta do usuário está correta
    if (respostaUsuario.toLowerCase() === perguntas[i].resposta.toLowerCase()) {
        // Contador de acertos
        acertos++;
    }
}

// Exibe o número total de acertos na página com o id "msg"
// Substitui o conteúdo HTML do id "msg" com o resultado do quiz
document.getElementById("msg").innerHTML = `Você acertou ${acertos} de ${perguntas.length} perguntas!`;