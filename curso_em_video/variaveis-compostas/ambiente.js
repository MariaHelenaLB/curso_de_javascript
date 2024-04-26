// <!-- https://github.com/gustavoguanabara/javascript -->

let num = [2, 4, 8, 6] //variáveis compostas

num.sort()

num.push(10)

console.log(`Nosso vetor é o ${num}`) 

console.log(num)

console.log(`O vetor tem ${num.length} posições`)

console.log(`O primeiro valor do vetor é ${num[0]}`) //a contagem sempre irá começar no 0.

let pos = num.indexOf(8) //nos mostra aonde se encotra o valor, e se não achar a resposta é -1

if (pos == -1) {
    console.log('O valor não foi encontrado!')
} else {
    console.log(`O valor 8 está na posição ${pos}`)
}

/*
EXEMPLOS:
    num[3] = 6 -> quando colo o num e entre colchetes coloco o número 3, estou pedindo para colocar o valor 6 na posição 3, se a posição 3 não existir o JS percebe isso e cria para você.

    num.push(7) -> se quiser esclarecer que você qer que coloque na última posião, sem querer saber qual é a posição, utiliza o seguinte comando: num.push(7) (é um método interno que vai acrescenta valores a um array).

    num.length -> um atribuito usado para saber o comprimento de um array.

    num.sort() -> ele pega todos os valores que estão no vetor e coloca eles em ordem crescente.
*/
