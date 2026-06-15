// Array (lista) contendo várias dicas de jogo
const dicas = [
    "Caia sempre perto de áreas com muito loot, mas olhe ao redor para evitar cair com muitos inimigos!",
    "Use fones de ouvido. O som do jogo é crucial para ouvir de onde vêm os passos dos adversários.",
    "Não tenha pressa para atirar. Controle o recuo da arma para garantir aquele famoso capa (headshot).",
    "A Parede de Gelo é sua melhor amiga. Tenha reflexos rápidos para usá-la como proteção em áreas abertas.",
    "Jogue com sua equipe (Squad) e mantenha a comunicação ativada no microfone.",
    "Preste muita atenção no mapa e no tempo da Zona Segura (Gás) para não ser pego desprevenido."
];

// Pega os elementos do HTML pelo ID
const btnDica = document.getElementById('btnDica');
const mostrarDica = document.getElementById('mostrarDica');

// Adiciona um evento de clique ao botão
btnDica.addEventListener('click', () => {
    // Sorteia um número aleatório baseado na quantidade de dicas da lista
    const indiceAleatorio = Math.floor(Math.random() * dicas.length);
    
    // Mostra a dica sorteada no parágrafo
    mostrarDica.textContent = `💡 Dica: ${dicas[indiceAleatorio]}`;
});
