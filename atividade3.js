// Atividade 3 - Semana 3
// Crie uma função que recebe 2 parâmetros e retorna o resultado da divisão entre eles. Além disso, se o resto dessa divisão for zero deverá imprimir no console o valor e dizer que ele é par.

function division (number1, number2){
     if(number1 % number2 === 0){
        let result = number1 / number2
        console.log(`O resultado da divisão é ${result.toFixed(2)} e o resto é 0.`)
        console.log("Logo, a divisão é par!")
    }else{
        let result = number1 / number2
        console.log(`O resultado é ${result.toFixed(2)}`)
        console.log("Logo, a divisão não é par!")
    }
}
division(2,2)
