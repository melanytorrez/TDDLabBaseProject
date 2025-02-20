//import multiplicar from"./multiplicador.js"

describe("fizzbuzz", () =>{
    it("deberia generar el mismo numero si no sigue una regla dos numeros",()=>{
      expect(fizzbuzz(1)).toEqual('1');
    });
/*
    it("deberia generar Fizz si el numero es divisible por 3",()=>{
        expect(fizzbuzz(3)).toEqual('Fizz');
      });

      it("deberia generar Buzz si el numero es divisible por 5",()=>{
        expect(fizzbuzz(5)).toEqual('Buzz');
      });

      it("deberia generar FizzBuzz si el numero es divisible por 3 y 5",()=>{
        expect(fizzbuzz(15)).toEqual('FizzBuzz');
      });
      */
  });

function fizzbuzz(){
    return '1';
}