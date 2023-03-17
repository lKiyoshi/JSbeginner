// +, -, *, /, %, **

// OPERADORES ARITMÉTICOS
let n1 = 10
let n2 = 5
console.log(n1 + n2);
console.log(n1 - n2);
console.log(n1 * n2);
console.log(n1 / n2);
console.log(n1 % n2);


// OPERADOR DE ATRIBUIÇÃO

let n3 = 20
// n3 = n3 + 15
n3 += 15;
console.log(n3);

// INCREMENTO E DECREMENTO

let i = 0
// i = i + 1
//i += 1
i++;
//i--;
console.log(i);

// OPERADORES DE COMPARAÇÃO
/*
    igualdade de valor ==
    igualdade de valor e tipo ===
    < menor que
    > maior que
    <= menor ou igual que
    >= maior ou igual que
    != valores diferentes
    !== valores e tipos diferentes
*/

let n7 = "10";
console.log(n2 < 10);

// OPERADORES LÓGICOS

// AND (&&), OR(||), NOT(!)

let idade = 16;
let paisPresentes = false;
let comprouBilhete = false;
const podeViajar = idade >= 18 || paisPresentes && comprouBilhete;
console.log(`Pode viajar: ${podeViajar}`);