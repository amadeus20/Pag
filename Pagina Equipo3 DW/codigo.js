

const btnPelicula1 = document.getElementById('btn-pelicula1');
const btnPelicula2 = document.getElementById('btn-pelicula2');
const imgPelicula1 = document.getElementById('img-pelicula1');
const imgPelicula2 = document.getElementById('img-pelicula2');

const imagenesAleatoriasPelicula1 = [
  'https://i.pinimg.com/236x/9b/e3/ae/9be3aec043d2446ce811ae7a151d4f1e.jpg',
  'https://i.pinimg.com/236x/2a/e0/17/2ae017b335e842da456b85652bddbbd6.jpg'
];

const imagenesAleatoriasPelicula2 = [
'https://i.pinimg.com/236x/9b/e3/ae/9be3aec043d2446ce811ae7a151d4f1e.jpg',
  'https://i.pinimg.com/236x/2a/e0/17/2ae017b335e842da456b85652bddbbd6.jpg'
];

btnPelicula1.addEventListener('click', () => {
  const peliculaSeleccionada = 'Película 1';
  console.log(`Has elegido la película ${peliculaSeleccionada}`);
  const imagenAleatoria = imagenesAleatoriasPelicula1[Math.floor(Math.random() * imagenesAleatoriasPelicula1.length)];
  imgPelicula1.src = imagenAleatoria;
});

btnPelicula2.addEventListener('click', () => {
  const peliculaSeleccionada = 'Película 2';
  console.log(`Has elegido la película ${peliculaSeleccionada}`);
  const imagenAleatoria = imagenesAleatoriasPelicula2[Math.floor(Math.random() * imagenesAleatoriasPelicula2.length)];
  imgPelicula2.src = imagenAleatoria;
});
