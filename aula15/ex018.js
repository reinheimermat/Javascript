// Array é uma variavel com varios elementos
//Exemplo Array
let num = [5, 8, 2, 9, 3]

console.log(`O vetor tem ${num.length} posições`) //<-- Mostra a quantidade de posições
console.log(`O primeiro valor do vetor é ${num[0]}`)//<-- Mostra o primeiro valor

//exemplo meu com for
for (let c = num[0]; c <= num[1]; c++){
    console.log(`${c}`)
}

//Printar todo o array com for
for (let pos = 0; pos < num.length; pos++){ //<--- .length é para ele for até o final do array
    console.log(num[pos])
}

//Maneira de printar todo o array de uma forma mais moderna e simplificada
//Para(for) cada posição[pos] do vetor(array) "num", ele vai printar(console.log) algo(num[pos])
for (let pos in num) {
    console.log(num[pos])
}


//exemplo meu com if
if (num[0] >= num[1]) {
    console.log(`O número ${num[0]} é maior que o número ${1}`)
} else  {
    console.log(`O número ${num[1]} é maior que o número ${0}`)
}

//exemplo meu com operador ternario
num[3] >= num[4]?console.log(`O ${3} é maior`):console.log(`O ${3} é maior`)

//Buscar valor no vetor(array)
//OBS: Se ele não encontrar o valor, retorna -1
num.indexOf(9) //<-- ele vai pesquisar o valor dentro do vetor(OBS: O valor, não o ID!!!)

//Exemplo:
let pos = num.indexOf(8)
console.log(`O valor 8 está na posição ${pos}`)

//Exemplo 02:
let n = [5, 4, 3, 2, 1,]
n.push()
n.sort() // <-- Coloca em ordem crescente o vetor
let x = n.indexOf(5)
console.log(`O valor 5 está na posição ${pos}`)