document.addEventListener("DOMContentLoaded", function () {
    const botao = document.getElementById("botaoDica");
    const mensagem = document.getElementById("mensagem");

    botao.addEventListener("click", function () {
        const dicas = [
            "Plante árvores nativas na sua comunidade.",
            "Evite o desperdício de água durante a irrigação.",
            "Utilize adubos orgânicos sempre que possível.",
            "Recicle os resíduos produzidos na fazenda.",
            "Preserve as nascentes e matas ao redor das plantações."
        ];

        const dicaAleatoria = dicas[Math.floor(Math.random() * dicas.length)];
        mensagem.textContent = dicaAleatoria;
    });
});
