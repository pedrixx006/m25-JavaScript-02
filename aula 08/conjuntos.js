/**
 * aqui iremos ver como trabalhar com conjuntos em JS
 */
/* não podemos usar dessa forma abaixo
let nome = "andre"
let nome = "andriel"
...
let nome1  = "zaqueu"
*/
//abaixo estou definindo um vetor com 4 nomes
// poiscoes 0
let nomes = ["andre","amarildo","joaquim","zaqueu"];
console.log(nomes[2]);
//listando os nomes usando laço for (1a  opção)
//vetor.lenght devolve o tamanho do vetor
for (let i=0;i<nomes.length;i++){
    console.log(nomes[i])
}
console.log("fim do for (1a opção)");
console.log("=+".repeat(20))
//listando os nomes usando o laço for (2a opção)
for (const it of nomes){
    console.log(it);
}
console.log("fim do for (2a opção)")
console.log("=+".repeat(20))
//usando o while para listar os nomes
let i=0;
while(i<nomes.lenght){
    console.log(nomes[i++]);
}
console.log("fim do while")