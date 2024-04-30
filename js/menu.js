`use strict`;
console.log("menu")

/*Selecionando o elemento de acionará a lista de links do menu*/
const botaoMenu = document.querySelector("nav h2 a");

/* Selecionando a lista de links/menu*/
const listaDeLinks = document.querySelector(".links-menu");

/* Monitorando o evento de click/toque no botaoMenu*/

botaoMenu.addEventListener("click",function(event){
    /* Prevenir / anular o evento padrão do link
    de redirecionamento/recarregamento da pagína*/
    event.preventDefault();
    console.log("Belezaaaaaaaaaaa!");
    listaDeLinks.classList.toggle("aberto");
    if(listaDeLinks.classList.contains("aberto")){
        botaoMenu.innerHTML = "Fechar &times;";

    }else{
        botaoMenu.innerHTML = "Menu &equiv;";
    }
});
