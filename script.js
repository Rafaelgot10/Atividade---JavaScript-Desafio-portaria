let nome = prompt("Insira seu nome");
let idade = parseInt(prompt("Insira sua idade"));
let estaAcompanhado = prompt("Você está acompanhado ? ('s' ou 'n') ");

if (idade < 18 && estaAcompanhado === "n") {
  alert(`Entrada não está permitida para ${nome} : Menor de idade`);
} else if (idade < 18 && estaAcompanhado === "s") {
  alert(`Entrada permitida para ${nome} : Conceder desconto`);
} else if (idade >= 18 && estaAcompanhado === "n") {
  alert(`Entrada permitida para ${nome} : Valor integral`);
} else {
  alert("Informações invalidas");
}
