function dividirNumeros (num1, num2){
    const divisao = num1 / num2
    console.log (`a divisao entre ${num1} e ${num2}`)
    if (divisao % 2 == 0){
        return ` ${divisao} e par`;
    } else {
        return `${divisao} e impar` ;
    }
}

console.log(dividirNumeros(10, 2))

