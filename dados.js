// Dados dinâmicos
const tecnicas = [
    "Respiração Profunda: Inspire lentamente e profundamente pelo nariz, segure por alguns segundos e solte o ar pela boca.",
    "Meditação Guiada: Concentre-se em sons, imagens ou palavras para acalmar sua mente.",
    "Alongamento Suave: Alongue os músculos suavemente para liberar a tensão acumulada.",
    "Progressão Muscular: Tensione e relaxe grupos musculares para aliviar o estresse.",
    "Visualização: Imagine um lugar calmo e sereno, como uma praia ou montanha, para se sentir mais tranquilo."
];

// Diário emocional
const diarioList = document.getElementById("diario-list");
const diarioInput = document.getElementById("diario-input");
const salvarDiarioBtn = document.getElementById("salvar-diario");

salvarDiarioBtn.addEventListener("click", () => {
    const entry = diarioInput.value.trim();
    if (entry) {
        const listItem = document.createElement("li");
        listItem.textContent = entry;
        diarioList.appendChild(listItem);
        diarioInput.value = ""; // Limpa o campo de entrada
    } else {
        alert("Por favor, escreva algo antes de salvar.");
    }
});

// Técnicas de Relaxamento
const tecnicasList = document.getElementById("tecnicas-list");
document.getElementById("tecnicas-btn").addEventListener("click", () => {
    tecnicasList.innerHTML = ""; // Limpa antes de adicionar novamente
    tecnicas.forEach((tecnica) => {
        const listItem = document.createElement("li");
        listItem.textContent = tecnica;
        tecnicasList.appendChild(listItem);
    });
});

// Validação do formulário de contato
const formContato = document.getElementById("contato-form");
formContato.addEventListener("submit", (event) => {
    event.preventDefault();

    const nome = document.getElementById("nome").value.trim();
    const email = document.getElementById("email").value.trim();
    const mensagem = document.getElementById("mensagem").value.trim();

    if (!nome || !email || !mensagem) {
        alert("Todos os campos são obrigatórios!");
    } else if (!validateEmail(email)) {
        alert("Por favor, insira um e-mail válido.");
    } else {
        alert("Sua mensagem foi enviada com sucesso!");
        formContato.reset(); // Limpa o formulário
    }
});

// Função de validação de e-mail
function validateEmail(email) {
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return regex.test(email);
}
