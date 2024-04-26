let valores = [4, 2, 6, 8]

valores.sort()

console.log(valores)

//formas mais simples
for (let pos=0; pos < valores.length; pos++ ) {
    console.log(`A posição ${pos} tem o valor ${valores[pos]}`);
    
}

for ( let pos in valores ) {
    console.log(`A posição ${pos} tem o valor ${valores[pos]}`)
}

/*
Forma mais complicada de se fazer:

console.log(valores[0])
console.log(valores[1])
console.log(valores[2])
console.log(valores[3])
*/

