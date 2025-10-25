/**
 * codigo que vai demonstrar o uso arrays em javascript
 */
//definindo um array
const vetor = [];
vetor.push("item 1");
vetor.push("item 2");
vetor.push("item 3");
console.log("vetor");
vetor.push(1234); //adiciona
console.log(vetor);
console.log(vetor.pop());//remove o ultimo elemento
console.log(vetor);
vetor.splice(1,1);//indica a quantidade, indice começa em 0
console.log(vetor);
//percorrendo o vetor com for (! opcao)
for(let i=0;i<vetor.length;i++){
    console.log(vetor[i])
}
console.log("listando o vetor com for 2 opcao")
//percorrendo o vetor com  o for (2 opcao)
for (let it of vetor){
    console.log(it)
}
console.log("listando vetor com for 3 opcao")
//percorrendo o vetor com foreach
vetor.forEach(it=>console.log(it))
