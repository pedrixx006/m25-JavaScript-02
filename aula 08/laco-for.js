/**
 * uso do laço for
 */
// 1a parte => inicialização de variáveis
// 2a parte => condição de permanência
// 3a parte => atribuição / encremento do valor
for (let i=0;i<10;i++){
    console.log("valor de i=" + i);
}
//nesse caso abaixo, da erro na inexistencia na variavel i
//porque pertence apenas ao bloco do for a variavel i
//por conta do let i dentro do for
console.log("fim do for" + i);