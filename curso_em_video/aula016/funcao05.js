// <!-- https://github.com/gustavoguanabara/javascript -->
/*
5! = 5 x 4 x 3 x 2 x 1
5! = 5 x 4!

O fatorial de um número pode ser calculado baseado num fatorial de outro, por exemplo:
n! = n x (n - 1)!
A não ser que seja um fator um, pois o fatorial de 1 é 1.
*/


//recursividade
function fatorial(n) {
    if (n == 1) {
        return 1
    } else {
        return n * fatorial(n-1)
    }
}
console.log(fatorial(5))