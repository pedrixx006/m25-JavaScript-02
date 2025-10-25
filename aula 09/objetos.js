/**
 * nesse codigo iremos ver objetos em js (JSON)
 */
//JSON -> JAVAscript objetos notation
const meuobjeto = {
    "nome": "pedro",
    "endereco": "rua das ruas",
"numero": 15,
"ehfumante": "false",
"ola": ()=> {
    console.log("ola mundo");
},
"telefones": {
    "residencial": "14 1010101010",
    "comercial": "11 292929299"
}
}
meuobjeto.ola()
console.log (meuobjeto)
//transformando o objeto JSOn em texto
console.log(JSON.stringify(meuobjeto))
//transformando um texto em JSON
const txtobjeto = '{"codigo:1234,"preco":15.32'+
',"descricao":"teste"}';
//o comando de baixo transforme o texto para JSON
const obj = JSON.parse(txtobjeto);
console.log(obj);