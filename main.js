var numeroSecreto = parseInt(Math.random() * 1001) + 1;
var quantidadeChutes = 1;

while(chute != numeroSecreto) {
        var chute = prompt("Digite um número entre 1 e 1000");
        if(chute == numeroSecreto) {
                alert("Are you psychic? Acertou!!!")
        } else if (chute > numeroSecreto) {
                alert("Got ya! Não é esse número, ele é menor que o seu chute (" + chute + ") Tentativa " + quantidadeChutes + "/10")
        } else if (chute < numeroSecreto) {
                alert("Got ya! Não é esse número, ele é maior que o seu chute (" + chute + ") Tentativa " + quantidadeChutes + "/10")
        }

        quantidadeChutes = quantidadeChutes + 1 
}

if (quantidadeChutes == 10 ) {
        alert("Suas tentativas se esgotaram! O número secreto era " + numeroSecreto)
}