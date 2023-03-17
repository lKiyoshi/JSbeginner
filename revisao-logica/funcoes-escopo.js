let n = "global";

function mostraN ()
{
    let n1 = "ne local";
    

    if (true)
    {
        let n1 = "dentro de if com let";
    }
    console.log("valor de n: " + n1);
}
mostraN();

console.log("valor de n no escopo global: " + n);