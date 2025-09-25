const conselhos =[
    "Vai la fera",
    "O primeiro passo é o mais importante",
    "Aprenda algo novo",
    "Persista no seu sonhos",
    "Seja sempre melhor que ontem"

];
const conselhoTexto = document.getElementById('conselhoTexto');
const novoConselhoBtn = document.getElementById('novoConselhoBtn');
function gerarConselho(){
    const indice = Math.floor(Math.random()*(conselhos.lenght +1));
    conselhoTexto.textContent = conselhos[indice];
}
novoConselhoBtn.addEventListener('click',gerarConselho);