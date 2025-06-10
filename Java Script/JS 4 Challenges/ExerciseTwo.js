function calcularFatorial(numero) {
  if (numero < 0) return "Fatorial não definido para números negativos.";
  let fatorial = 1;
  for (let i = 2; i <= numero; i++) {
    fatorial *= i;
  }
  return fatorial;
}