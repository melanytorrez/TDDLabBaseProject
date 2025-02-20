import fizzbuzz from"./fizzbuzz.js"

describe("fizzbuzz", () =>{
    it("deberia generar 1 ya que el numero no sigue una regla",()=>{
      expect(fizzbuzz(1)).toEqual('1');
    });
    it("deberia generar el mismo numero si no sigue una regla",()=>{
        expect(fizzbuzz(2)).toEqual('2');
      });

    it("deberia generar Fizz si el numero es divisible por 3",()=>{
        expect(fizzbuzz(3)).toEqual('Fizz');
      });

      it("deberia generar Buzz si el numero es divisible por 5",()=>{
        expect(fizzbuzz(5)).toEqual('Buzz');
      });
/*
      it("deberia generar FizzBuzz si el numero es divisible por 3 y 5",()=>{
        expect(fizzbuzz(15)).toEqual('FizzBuzz');
      });
      */
  });

