/* const series = [
  {
    nome: 'Game of Thrones',
    src: 'img/capas_filmes/poster1.jpg'
  },
  {
    nome: 'Westworld',
    src: 'img/capas_filmes/poster2.jpg'
  },
  {
    nome: 'The Boys',
    src: 'img/capas_filmes/poster3.jpg'
  },
  {
    nome: 'Breaking Bad',
    src: 'img/capas_filmes/poster4.jpg'
  },
  {
    nome: 'American Horror Story',
    src: 'img/capas_filmes/poster5.jpg'
  },
  {
    nome: 'Mare of Easttown',
    src: 'img/capas_filmes/poster6.jpg'
  },
  {
    nome: 'Gossip Girl',
    src: 'img/capas_filmes/poster7.jpg'
  },
  {
    nome: 'Loki',
    src: 'img/capas_filmes/poster8.jpg'
  },
  {
    nome: 'The Walking Dead',
    src: 'img/capas_filmes/poster9.jpg'
  },
  {
    nome: 'How I Met Your Mother',
    src: 'img/capas_filmes/poster10.jpg'
  },
];

const geraFilmes = () => {
  const divPai = document.querySelector('.carousel-series');
  const divSeries = document.createElement('div');
  divSeries.classList = 'owl-carousel owl-theme';
  series.forEach(element => {
    const newSerie = document.createElement('div');
    newSerie.className = 'item';
    const newImg = document.createElement('img')
    newImg.className = 'box-content';
    newImg.src = element.src;
    newImg.alt = element.nome;
    newSerie.appendChild(newImg);
    divSeries.appendChild(newSerie);
  })
  divPai.appendChild(divSeries);
}
geraFilmes(); */