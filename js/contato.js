`use strict`
/* Selecionar os Elementos que serão manipulados*/
const formulario = document.querySelector("form")
const campoCep = formulario.querySelector("#cep")
const campoEndereco = formulario.querySelector("#endereco")
const campoBairro = formulario.querySelector("#bairro")
const campoCidade = formulario.querySelector("#cidade")
const campoEstado = formulario.querySelector("#estado")
const botaoBuscar = formulario.querySelector("#buscar")
const mensagemStatus = formulario.querySelector("#status")

/*detectando quando o botão de buscar CEP é adicionado */
botaoBuscar.addEventListener("click", function (event) {
    /* Anular o comportamento padrão de redirecionamento/recarregamento da pagína.sempre acontece ao trabalhar
    com <a> e <form>.*/
    event.preventDefault();
    if (campoCep.value.length !== 8) {
        mensagemStatus.textContent = "Digite um CEP válido";
        mensagemStatus.style.color = "red";

        console.log("Não tem 8!")
        return;
    }
    let cepInformado = campoCep.value;
    /*AJAX - Asyncronous Javascript And XML
    (Javascript assícrono e XML)
    Técnica de comunição (transmissão, recebimento) de dados
    que permite o processamento em conjuto com APIs
    (ou Web Services)*/

    //Etapa 1: prepara a URL da API com o CEP informado
    //Etapa 2: acessar a API (Com a URL) e guardar o retorno dela
    // Etapa 3: extrair os dados da resposta da API em formato JSON
    //Etapa 4: lidar com os dados (em caso de erro e de sucesso)
});