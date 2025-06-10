let titulo = document.querySelector('h1');
titulo.innerHTML = 'Hora do Desafio';

function mostrarConsole() {
    console.log('O botão foi clicado!');
}

function mostrarAlerta() {
    console.log('Eu amo JS');
}

function mostrarPrompt() {
  const cidade = prompt('Digite o nome de uma cidade do Brasil:');
  alert(`Estive em ${cidade} e lembrei de você`);
}

function somarNumeros() {
  const numero1 = parseInt(prompt('Digite o primeiro número:'));
  const numero2 = parseInt(prompt('Digite o segundo número:'));
  const soma = numero1 + numero2;
  alert(`O resultado da soma é: ${soma}`);
}