// strings, number (int, float), boolean
// undefined, null, symbol

let minha_var = "minha string"
// let 1var não pode, let var1 pode, caracteres especiais não podem
let minha_var2 = 'minha string'
console.log(minha_var2);
var minhavar3 = `minha template literal`;
console.log(minhavar3);

let idade = 40;
let msg = "eu possuo 40 anos";
// exemplo de concatenação let msg = "eu possuo" + idade + "anos";
// let msg = 'eu possuo ${idade} anos';
console.log(msg);


console.log("Hello " + "world");

//typeof serve pra identificar o tipo de uma variavel
console.log(typeof msg, typeof idade, typeof minha_var)

//numbers//

const n1 = 10
const n2 = 1.1
console.log(`o tipo de n1 é ${typeof n1} e seu valor é ${n1}`);
console.log(`o tipo de n1 é ${typeof n2} e seu valor é ${n2}`);

//boolean//

const isValid = true; // ou false
console.log(`isValid: ${isValid}`);

// undefined //

let varTeste
console.log(varTeste); // valor
console.log(typeof varTeste); // tipo
varTeste = 10;
console.log(typeof varTeste, Varteste);

// null //
let varTeste2 = null;
console.log(typeof varTeste2); // erro object

