// let idade

// function comprovaMaiorIdade (idade) {
//     if (idade >=18 ) {
//         console.log('maior de idade')
//     }else {
//         console.log('menor de idade')
//     }
// }

// console.log(comprovaMaiorIdade(21))


// function resultadoBoletim (nota1, nota2, nota3, nota4) {
//     const media = (nota1 + nota2 +  nota3 + nota4)/4
// if (media >= 7 && media <=10) {
//     return 'aprovada'
// } else if (media >=4 && media <7){
//     return 'recuperacao'
// }else if (media<  4 && media >=0){
//     return 'reprovada'
// }
// }

// console.log(resultadoBoletim(6, 8.8, 8, 5))

function permiteTitulo(idade) {
    if (idade >=16 && idade<=18) {
        return `permitido, sua idade e ${idade}`
    } else if (idade >=18 && idade < 70) {
        return `obrigatorio, sua idade e ${idade}`
    } else {
        return `procure o TRE`
    }

}

console.log(permiteTitulo(7))