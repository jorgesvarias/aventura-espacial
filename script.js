document.addEventListener("DOMContentLoaded", () => {
    const botoes = document.querySelectorAll(".btn-proximo");
    const passos = document.querySelectorAll(".passo");
    
    // Função para esconder todos os passos
    const esconderPassos = () => {
        passos.forEach(passo => {
            passo.classList.remove("ativo");
        });
    };

    // Função para mostrar o próximo passo
    const mostrarPasso = (passoId) => {
        esconderPassos();
        document.getElementById(`passo-${passoId}`).classList.add("ativo");
    };

    // Adiciona eventos de clique aos botões
    botoes.forEach(botao => {
        botao.addEventListener("click", () => {
            const proximoPasso = botao.getAttribute("data-proximo");
            mostrarPasso(proximoPasso);
        });
    });

    // Inicia com o primeiro passo
    mostrarPasso(0);
});
