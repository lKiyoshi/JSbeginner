let n1 = 10
let n2 = "2"

console.log(n1 * n2, typeof n1, typeof n2); // conversão implicita, isso se torna um problema quando usamos o '+', o código pode entender concatenação

// parseFloat, parseInt, Number() 'Para conversão de strings para númetos'
let n3 = '10'
n3 = parseInt(n3)
let n4 = '10.090909'
n4 = parseFloat(n4)
let n5 = '10a'
n5 = Number(n5);

// conversao de numero para string

let n6 = 10
n6 = n6 + "";
//n6 = n6.toString();
console.log(n6, typeof n6);

// decismais = 0 - 9
//hecadecimais = 0 - f