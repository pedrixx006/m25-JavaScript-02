/**
 * manipulando objetos do html com JS
 */
const incluir = ()=>{
    //criando um elemento li para ser colocado no documento
    const li = document.createElement("li");
//const txtcmb = documento.getElementById("idtexto");
const txtcmb = document.querySelector("#idtexto");
//colocando o conteudo do texto no li
li.textContent = txtcmb.value;
//colocando o li no ul
//posso usar o getelementbyid ou o queryselection
const ul = document.getElementById("idlista")
ul.appendChild(li);
}
const remover = ()=> {
const lis = document.querySelectorAll("#idlista li");
const textcmp = document.querySelector("#idtexto");
const ul = document.querySelector("#idlista");
//percorrendo os lis
lis.forEach(it=>{
    if (it.textContent ==  textcmp.value){
        ul.removeChild(it); //remove o li do ul
    }
}
)
}
//adicionando um evento de click no botão de incluir
const btnadicionar = document.querySelector("#idadicionar");
const btnremover = document.querySelector("#idremover");
//colocando evento no btnadicionar
btnadicionar.addEventListener('click',incluir);
btnremover.addEventListener('click',remover);