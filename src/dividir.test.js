import dividir from"./divisor.js"

describe("dividir", () =>{
    it("deberia dividir dos numeros",()=>{
      expect(dividir(50,10)).toEqual(5);
    });

  });