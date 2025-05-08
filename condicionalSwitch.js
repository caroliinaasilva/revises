function feriado (mes) {
switch (mes) {
    case 'fevereiro':
    return'e carnaval'
    case 'junho':
    return'sao joao'
    case 'dezembro':
       return 'e natal'
        default:
           return'nao e festa'
}}

console.log(feriado('fevereiro'))