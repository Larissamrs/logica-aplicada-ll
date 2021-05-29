// Atividade 4 - Semana 3
// Utilize a estrutura de repetição for para imprimir no console conforme instruções abaixo: 
// a) números de 1 a 100  

for (let i = 1; i <= 100; i++){
    console.log(i) 
}


// b) quando chegar no número 50 interrompa a instrução e pare o loop 

for(n = 1; n <= 100; n++){
    if(n === 51){
        break;
    }
    console.log(n)
}

// c) quando chegar no número 50 pule a instrução 

for(num = 1; num <= 100; num++){
    if(num === 50){
        continue;
    }
    console.log(num)
}
