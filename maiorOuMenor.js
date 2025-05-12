function maiorOuMenor(idade){
    const comprove = (2006 - idade)
    if (idade >= 18) {
        console.log(`${idade} Maior Idade`)
    } else {
        console.log(`${idade} Menor de idade`)

    }
}

console.log(maiorOuMenor(18))