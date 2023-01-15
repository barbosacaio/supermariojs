// Seleciona a imagem do Mario
const mario = document.querySelector('.mario');
// Seleciona a imagem do cano
const cano = document.querySelector('.cano');
// Seleciona a imagem das nuvens
const nuvens = document.querySelector('.nuvens');

// Função para realizar o pulo
const pulo = () => {
    // Adiciona a classe 'pulo'
    mario.classList.add('pulo');
    // Espera 500ms
    setTimeout(() => {
        // Remove a classe 'pulo'
        mario.classList.remove('pulo');
    }, 500);
}

const loop = setInterval(() => {
    // Verifica a distância do cano com a parte esquerda da tela
    const canoPosicao = cano.offsetLeft;
    // Verifica a distância do Mario para o chão para ver se ele pulou
    const marioPosicao = +window.getComputedStyle(mario).bottom.replace('px', '');
    // Verifica a posição das nuvens
    const nuvensPosicao = +window.getComputedStyle(nuvens).right.replace('px', '');

    // Verifica se a posição do cano é suficiente para o jogador perder o jogo se não pular
    if(canoPosicao <= 120 && canoPosicao > 0 && marioPosicao < 80){
        // Desativa a animação
        cano.style.animation = 'none';
        mario.style.animation = 'none';
        nuvens.style.animation = 'none';

        console.log(nuvensPosicao);

        // Faz os objetos pararem onde eles estavam quando o jogador perdeu
        cano.style.left = `${canoPosicao}px`;
        mario.style.bottom = `${marioPosicao}px`;
        nuvens.style.right = `${nuvensPosicao}px`;

        // Troca o 'src' da imagem do Mario para a imagem de Game Over
        mario.src = 'imagens/game-over.png';
        mario.style.width = '75px';
        mario.style.marginLeft = '50px';

        // Evita que o Interval 'loop' fique rodando depois de perder
        clearInterval(loop);
    }
}, 10);

// Pula quando o usuário aperta alguma tecla
document.addEventListener('keydown', pulo);