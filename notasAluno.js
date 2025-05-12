function resultadoMedia (nota1, nota2, nota3) {
    const media = (nota1 + nota2 + nota3) / 3
  if (media >=7 && media <=10 ){ 
        return `Aprovado`
    } else if (media >=5 && media <7) {
        return `Recuperacao`
    }else if (media <5) {
        return `Reprovado`
    }
}


console.log(resultadoMedia(5,7,9))