/**
 * exemplo de uso do swidtch no js
 */
console.log ("menu de opções");
console.log ("1 - cadastro");
console.log ("2 - consulta");
console.log ("3 - alteração");
console.log ("4 - exclusão");
let op = 6;
if (op = 1){
    console.log("escolheu cadastro");
} else if ( op == 2){
    console.log("escolheu consulta");
} else if ( op == 3){
    console.log("escolheu alteração");
} else if ( op == 4){
    console.log("escolheu exclusão");
} else {
    console.log ("escolheu uma opção invalida");
}
//usando o switch para a mesma situação
switch(op){
case 1: console.log("escolheu cadastro"); //break;
case 2: console.log("escolheu consulta"); //break;
case 3: console.log("escolheu alteração"); //break;
case 4: console.log("escolheu exclusão"); //break;
default: console.log("escolheu uma opção inválida");
}