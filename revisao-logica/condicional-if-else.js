let comprouBilhete = true;
let idade = 27;
if (!comprouBilhete === true)
{
    console.log("Comprou o bilhete!");
} else
{
    if (idade >= 18)
    {
        console.log('É maior de idade, pode viajar');
    } else
    {
        console.log('É menor de idade, não pode viajar');
    }
}


//

let n1 = 6;
let n2 = 0;
let media = (n1 + n2) / 2;
console.log(`media: ${media}`);

if (n1 === 0 || n2 === 0)
{
    console.log(`Reprovado`);
} else if(media < 7)
{
    console.log("Reprovado, mas, há como recuperar");
} else 
{
    console.log("Aprovado");
}

//

// let msgMaiorIdade = "";
// if (idade >= 18)
// {
//     msgMaiorIdade = 'É maior de idade';
// } else 
// {
//     msgMaiorIdade = 'É menor de 18 anos';
// }

let msgMaiorIdade = (idade >= 18) ? "É maior de idade" : "É menor de idade";
console.log(msgMaiorIdade);