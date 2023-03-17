//criar um array com número ramdomicos não podendo se repetir

function generateRamdomInteger(max){
    return parseInt(Math.random() * max)
}

let arr = []
while(arr.length <= 20){
    let ramdomnumber = generateRamdomInteger(30)

    if(arr.indexOf(ramdomnumber) < 0){
        arr.push(ramdomnumber)
    } else {
        console.log(ramdomnumber, " Já existe no arr")
    }
}
console.log(arr)