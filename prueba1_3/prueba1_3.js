let i;
let imagenes = [];
let tiempoAnterior = 0;
let intervalo = 1000; // 2 segundos en milisegundos
let indiceImagen = 0;
let margen = 50; // Margen de 50 píxeles

function preload() {
  // Cargar imágenes antes de que comience setup
  for (let n = 1; n <= 9; n++) {
    let img = loadImage('assets/imagen' + n +'.png'); // Asegúrate de que las imágenes estén en la carpeta `assets`
    imagenes.push(img);
  }
}

function setup() {
  createCanvas(1000, 1000); // Cambiar el tamaño del lienzo
  i = new Manchas(); // Usa la clase correctamente con mayúsculas
}

function draw() {
  background(20); // Fondo blanco

  let tiempoActual = millis();
  if (tiempoActual - tiempoAnterior >= intervalo) {
    tiempoAnterior = tiempoActual;

    // Agregar la siguiente imagen
    if (indiceImagen < imagenes.length) {
      i.agregarImagen(imagenes[indiceImagen]);
      indiceImagen++;
    } else {
      indiceImagen = 0; // Reiniciar el índice para que el ciclo se repita
    }
  }

  // Dibuja las imágenes en pantalla
  for (let n = 0; n < i.mostrar.length; n++) {
    image(i.mostrar[n].img, i.mostrar[n].x, i.mostrar[n].y, i.mostrar[n].img.width, i.mostrar[n].img.height);
  }
}
