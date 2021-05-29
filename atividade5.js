// Atividade 5 - Semana 3
// Calculadora com as 4 operações matemáticas básicas

// a) Deverá ser possível escolher uma operação aritmétrica em forma de string: 'soma', 'multiplicacao', 'divisao' e 'subtracao'
// b) Deverá ser possível passar 2 números para a operação escolhida
// c) Deverá retornar o resultado e imprimir no console

function calculator(number1, number2){
    let operation = 'multiplicacao'
    switch(operation) {
        case 'soma':
            return number1 + number2
            break;
        case 'subtracao':
            return number1 - number2
            break;
        case 'multiplicacao':
            return number1 * number2
            break;
        default:
            console.log('Informe uma operação válida!')
    }
}
console.log(`O valor da multiplicação é ${calculator(10,100)}!`)