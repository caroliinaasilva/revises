function maiorMenorIgual (num1, num2) {
    if (num1 > num2){
        return `${num1} e maior que ${num2}`
} else if (num1 < num2) {
    return `${num1} e menor que ${num2}`
} else if (num1 == num2) {
    return `${num1} e ${num2} sao iguais`
}
}

console.log(maiorMenorIgual(101,100))