import sumar from "./sumador";
import multiplicar from "./multiplicador";
import dividir from "./divisor";

const firstSumar = document.querySelector("#primer-numero-Suma");
const secondSumar = document.querySelector("#segundo-numero-Suma");
const firstMultiplicar = document.querySelector("#primer-numero-Multiplica");
const secondMultiplicar = document.querySelector("#segundo-numero-Multiplica");
const firstDividir = document.querySelector("#primer-numero-Divide");
const secondDividir = document.querySelector("#segundo-numero-Divide");
const Sumarform = document.querySelector("#sumar-form");
const Multiplicarform = document.querySelector("#multiplicar-form");
const Dividirform = document.querySelector("#dividir-form");
const resultadodiv = document.querySelector("#resultado-div");
const resultado2div =document.querySelector("#resultado2-div");
const resultado3div =document.querySelector("#resultado3-div");

Sumarform.addEventListener("submit", (event) => {
  event.preventDefault();

  const firstNumberSuma = Number.parseInt(firstSumar.value);
  const secondNumberSuma = Number.parseInt(secondSumar.value);

  resultadodiv.innerHTML = "<p>" + sumar(firstNumberSuma, secondNumberSuma) + "</p>"

});

Multiplicarform.addEventListener("submit", (event) => {
  event.preventDefault();

  const firstNumberMultiplica = Number.parseInt(firstMultiplicar.value);
  const secondNumberMultiplica = Number.parseInt(secondMultiplicar.value);

  resultado2div.innerHTML = "<p>" + multiplicar(firstNumberMultiplica, secondNumberMultiplica) + "</p>"

});

Dividirform.addEventListener("submit", (event) => {
  event.preventDefault();

  const firstNumberDivide = Number.parseInt(firstDividir.value);
  const secondNumberDivide = Number.parseInt(secondDividir.value);

  resultado3div.innerHTML = "<p>" + dividir(firstNumberDivide, secondNumberDivide) + "</p>"

});


