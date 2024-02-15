//  Variavel indicando o Elemento HTML
const detailsElements = document.querySelectorAll('details');

//  Adicionar uma função para cada Elemento
detailsElements.forEach(details => {
    // Função para reconhecer qual Elementos esta aberto
    details.addEventListener('toggle', () => {
        //  Se aberto, separar elementos diferente do que foi recentemente aberto
        if (details.open) {
        detailsElements.forEach(otherDetails => {
            //  Para todos Elementos diferentes do aberto, fechar.
            if (otherDetails !== details) {
            otherDetails.open = false;
            }
        });
        }
    });
});