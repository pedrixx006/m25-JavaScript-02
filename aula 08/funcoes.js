/**
 * criação de uso de funções
 */
//definindo função para usar

function fatorial(numero){
    let ret = 1;
    //aqui abaixo será um laço decrescente 5 * 4 * 3 * 2 
    for (let i=numero;i>1;i--){
ret*=i; //isso é o mesmo que ret = ret * i
    }
return ret; //retomando valor
}
//usando função
console.log("o fatorial de 5 é " + fatorial(5));