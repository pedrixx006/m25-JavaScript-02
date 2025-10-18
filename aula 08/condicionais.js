/**
 * exemplos de uso de condicionais
 */
let idade = 18;
//usando if (se)
if (idade>=18){
console.log("voce pode dirigir");
} else if (idade >=16 ){
console.log ("voce esta quase no ponto para dirigir,"+
" aguente mais um pouco")
} else {
    console.log("voce não pode dirigir, voce é menor de idade!")
}
/**
 * operadores relacionais

 * > maior que => 10 > 5 => verdadeiro
 * < menor que => 5 < 2 => falso
 * == igual a = 10 == 10 => verdade
 * != diferente => 10 != 5 => verdade
 *>= maior ou igual a => 10 >= 11 => falso
 *<= menor ou igual a 10 <= 11 => verdade
 * 
 * exemplos com texto
 * 'Ana' > 'ana' => falso
 * 
 * operadores lógicos
 * && operador AND => idade >=18 && idade <= 60
 *            => verdadeiro para idades entre 18 e 60
 * || operador  OR  => idade < 18 || idade > 60
 *              => verdadeiro para idades menores de 18 ou idades maiores de 60
 * operador NOT  => !(idade >=18 && idade <= 60 )
 *  =>nesse caso seria equivalente a 
 * verdadeiro para idades menores de 18 ou idades maiores de 60
  */
