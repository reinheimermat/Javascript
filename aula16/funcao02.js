function soma(n1, n2) {
    return n1 + n2
}
console.log(soma(2, 5))

//Exemplo caso a soma seja um num e n variavel

//Caso o num1 ou o num2 n passem, ele retorna 0
function soma2(num1=0, num2=0) { //<-- Parametros pre definidos
    return num1 + num2
}
console.log(soma2(7))//<-- Núm q n é variavel