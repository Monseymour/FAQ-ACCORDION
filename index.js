const summaries = Array.from(document.querySelectorAll("summary"));
const detail = document.querySelectorAll("details");
const imagens = Array.from(document.querySelectorAll(".icones"));

//  Trocar Icones
summaries.forEach((summary, indice) => {
    summary.addEventListener("click", () => {
        imagens.forEach(icones =>{
            icones.src = "./assets/images/icon-plus.svg"
        });
        let imagem = imagens[indice];
        imagem.src = "./assets/images/icon-minus.svg";
    });
});
//  Ocultar Sumarios
detail.forEach(d, () => {
    d.addEventListener("click", () => { 
        d.addEventListener('toggle', () => {
            if (d.open) {
              detail.forEach(otherDetails => {
                if (otherDetails !== details) {
                  otherDetails.open = false;
                }}
            )}
        })
    })
});