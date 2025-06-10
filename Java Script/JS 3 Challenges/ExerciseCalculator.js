function calcularMedia(nota1, nota2, nota3, nota4) {
     return (nota1 + nota2 + nota3 + nota4) / 4;
}

function verificarAprovacao(){
    if (media >= 5) {
        return "Aprovado";
    } else {
        return "Reprovado";
    }
}

let media = calcularMedia(7, 6, 3, 5);
let situacao = verificarAprovacao(media);

console.log("Média:", media);
console.log("Situação:", situacao);