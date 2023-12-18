const botoes = Array.from(document.querySelectorAll("section"));
const perguntas = Array.from(document.querySelectorAll(".pergunta"));
const respostas = Array.from(document.querySelectorAll(".resposta"));
const imagens = Array.from(document.querySelectorAll(".icones"));

//  Ocultar 
botoes.forEach((botao, indice) => {
    botao.addEventListener("click", () => {
        // Icones
        imagens.forEach(icones =>{
            icones.src = "./assets/images/icon-plus.svg"
        });
        let imagem = imagens[indice];
        imagem.src = "./assets/images/icon-minus.svg";
    });
});

function mostrar(IdResposta){
    const mostrando = document.getElementById(IdResposta);
        respostas.forEach(resp =>{
            resp.classList.add("off")
        });
        mostrando.classList.remove("off");
};