const legendaParag1 = document.getElementById('legenda1');
const legendaParag2 = document.getElementById('legenda2');
const botaoTrocarImagem = document.getElementById('trocarImagem');
const botaoVoltarImagem = document.getElementById('imagemAnterior');
const imagem = document.getElementById('imagem');

const conteudo1 = {
    id: 1,
    legenda: 'Praia bonita para sossegar !',
    src: "Images/imagem1.jpg",
};

const conteudo2 = {
    id: 2,
    legenda: 'Bela praia para passear e curtir umas férias !',
    src: "Images/imagem2.jpg",
};

imagem.setAttribute('src', conteudo1.src);
legendaParag1.innerHTML = `Imagem ${conteudo1.id} de 2`;
legendaParag2.innerHTML = conteudo1.legenda;

const proximaImagem = () => {
    // botaoVoltarImagem.setAttribute('disabled', false);
    document.getElementById('imagemAnterior').disabled = false;
    document.getElementById('trocarImagem').disabled = true;
    legendaParag1.innerHTML = `Imagem ${conteudo2.id} de 2`;
    legendaParag2.innerHTML = conteudo2.legenda;
    imagem.setAttribute('src', conteudo2.src);
};

botaoTrocarImagem.addEventListener('click', proximaImagem);

const imagemAnterior = () => {
    document.getElementById('imagemAnterior').disabled = true;
    document.getElementById('trocarImagem').disabled = false;
    legendaParag1.innerHTML = `Imagem ${conteudo1.id} de 2`;
    legendaParag2.innerHTML = conteudo1.legenda;
    imagem.setAttribute('src', conteudo1.src);
};

botaoVoltarImagem.addEventListener('click', imagemAnterior);