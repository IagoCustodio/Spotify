let musicas = [
    {titulo:'Justin Bieber', artista:'Justin Bieber', src:'musica/musica1.mp3',img:'imagens/img1.jpg'},
    {titulo:'Imagine Dragons', artista:'Imagine Dragons', src:'musica/musica2.mp3',img:'imagens/img2.jpg'},
    {titulo:'Marshmello Anne-Marie', artista:'Marshmello  Anne-Marie', src:'musica/musica4.mp3',img:'imagens/img5.jpg'},
    {titulo:'The Weeknd', artista:'The Weeknd', src:'musica/musica3.mp3', img:'imagens/img6.jpg'},
    {titulo:'Harley Bird - Home', artista:'Jordan Schor', src:'musica/music-1.mp3',img:'imagens/music1.jpg'},
    {titulo:'Lost Sky - Vision NCS', artista:'NCS Release', src:'musica/music-6.mp3',img:'imagens/music5.jpg'},
    {titulo:'Beauz & Jvna - Crazy', artista:'Beauz & Jvna', src:'musica/music-3.mp3',img:'imagens/music2.jpg'},
    {titulo:'Hardwind - Want Me', artista:'Mike Archangelo', src:'musica/music-4.mp3',img:'imagens/music3.jpg'},
    {titulo:'Jim - Sun Goes Down', artista:'Jim Yosef x Roy', src:'musica/music-5.mp3',img:'imagens/music4.jpg'},
    {titulo:'Ikson Anywhere – Ikson', artista:'Audio Library', src:'musica/music-2.mp3',img:'imagens/music6.jpg'}
    
];

let musica = document.querySelector('audio');
let indexMusica = 0;
let imagem = document.querySelector('.img');
let nomeMusica = document.querySelector('h5');


renderizarMusica(indexMusica);

// let duracaoMusica = document.querySelector('.fim');

// Eventos


document.querySelector('.play').addEventListener('click',tocarMusica);

document.querySelector('.pause').addEventListener('click',pausarMusica);

document.querySelector('.botao_play').addEventListener('click',tocarMusica);

document.querySelector('.botao_pause').addEventListener('click',pausarMusica);

document.querySelector('.seta_anterior').addEventListener('click', () => {
    indexMusica--;
    renderizarMusica(indexMusica);
});

document.querySelector('.seta_proxima').addEventListener('click', () => {
    indexMusica++;
    renderizarMusica(indexMusica);
});

musica.addEventListener('timeupdate', atualizarBarra);


// Funções

function renderizarMusica(index){
    musica.setAttribute('src',musicas[index].src);
    musica.addEventListener('loadeddata', () => {
        nomeMusica.textContent = musicas[index].titulo;
        imagem.src = musicas[index].img;
    });
}

function tocarMusica(){
    musica.play();
    document.querySelector('.pause').style.display = 'block';
    document.querySelector('.play').style.display = 'none';
}

function pausarMusica(){
    musica.pause();
    document.querySelector('.pause').style.display = 'none';
    document.querySelector('.play').style.display = 'block';
}



function tocarMusica(){
    musica.play();
    document.querySelector('.botao_pause').style.display = 'block';
    document.querySelector('.botao_play').style.display = 'none';
}

function pausarMusica(){
    musica.pause();
    document.querySelector('.botao_pause').style.display = 'none';
    document.querySelector('.botao_play').style.display = 'block';
}

function atualizarBarra(){
    let barra = document.querySelector('progress');
    barra.style.width = Math.floor((musica.currentTime / musica.duration) * 100) + '%';
    let tempoDecorrido = document.querySelector('.inicio');
    tempoDecorrido.textContent = segundosParaMinutos(Math.floor(musica.currentTime));
}

function segundosParaMinutos(segundos){
    let campoMinutos = Math.floor(segundos / 60);
    let campoSegundos = segundos % 60;
    if (campoSegundos < 10){
        campoSegundos = '0' + campoSegundos;
    }

    return campoMinutos+':'+campoSegundos;
}





