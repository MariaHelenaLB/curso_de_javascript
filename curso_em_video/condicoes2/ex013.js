// <!-- https://github.com/gustavoguanabara/javascript -->
var agora = new Date()
var diaSem = agora.getDay()

/*
    no JS os dias da semana funciona da seguinte maneira:
    0 = domingo;
    1 = segunda;
    2 = terça;
    3 = quarta;
    4 = quinta;
    5 = sexta;
    6 = sábado
*/

//console.log(diaSem) -> só utiliza se quiser que mostre o número também

switch (diaSem) {
    case 0:
        console.log('Domingo')
        break

    case 1:
        console.log('Segunda')
        break

    case 2:
        console.log('Terça')
        break

    case 3:
        console.log('Quarta')
        break

    case 4:
        console.log('Quinta')
        break

    case 5:
        console.log('Sexta')
        break

    case 6:
        console.log('Sábado')
        break

    default:
        console.log('[ERRO] Dia inválido!')
        break
}