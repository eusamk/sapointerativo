window.onload = function() {
    document.getElementById('popup').style.display = 'block';
}

function setSapoName() {
    var sapoName = document.getElementById('sapoNameInput').value;
    document.getElementById('sapoName').innerText = sapoName;
    document.getElementById('popup').style.display = 'none';
}

document.addEventListener('DOMContentLoaded', function() {
    const frogImage = document.querySelector('.frog-image');
    const jumpButton = document.querySelector('.jump-button');
    const eatButton = document.querySelector('.eat-button');
    let animationInProgress = false; // Variável para rastrear se uma animação está em andamento

    function startJumpAnimation() {
        if (!animationInProgress) {
            animationInProgress = true;
            frogImage.src = 'sapopulando.png'; // Altera a imagem para o sapo pulando
            frogImage.classList.add('jump-animation');
            setTimeout(function() {
                frogImage.src = 'sapocaiu.png'; // Altera a imagem para o sapo caindo
                setTimeout(function() {
                    frogImage.src = 'sapoparado.png'; // Altera a imagem para o sapo parado
                    frogImage.classList.remove('jump-animation');
                    animationInProgress = false; // Marca a animação como concluída
                }, 400); // Tempo para mostrar a imagem "sapocaiu.png"
            }, 600); // Tempo de duração da animação de pulo
        }
    }

    jumpButton.addEventListener('click', startJumpAnimation);

    eatButton.addEventListener('click', function() {
        if (!animationInProgress) {
            animationInProgress = true;
            for (let i = 0; i < 3; i++) {
                setTimeout(function() {
                    frogImage.src = 'sapocomendo1.png';
                    setTimeout(function() {
                        frogImage.src = 'sapocomendo2.png';
                        setTimeout(function() {
                            frogImage.src = 'sapoparado.png'; // Retorna para a imagem "sapoparado.png"
                            animationInProgress = false; // Marca a animação como concluída
                        }, 200); // Tempo de exibição da imagem "sapocomendo2.png"
                    }, 300); // Tempo de exibição da imagem "sapocomendo1.png"
                }, i * 800); // Intervalo de 2 segundos entre cada ciclo de comer
            }
        }
    });
});
