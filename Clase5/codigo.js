let sumar=(num1,num2)=>num1+num2;
let multiplicar=(num1,num2)=>num1*num2;
let restar=(num1,num2)=>num1-num2;
let dividir=(num1,num2)=>num1/num2;


let calculadora = (num1,num2,operacion)=>operacion(num1,num2);

/*CALLBACK */
console.log(calculadora(10,10,sumar));
console.log(calculadora(10,10,multiplicar));
console.log(calculadora(10,10,restar));
console.log(calculadora(10,10,dividir));

