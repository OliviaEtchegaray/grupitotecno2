let imagenes = [];
let buffers = {
  rojo: [],
  azul: [],
  amarillo: [],
  negro: [],
  verde: []
}; // Para almacenar las imágenes procesadas por color
let tiempoAnterior = 0;
let intervalo = 1000; // 2 segundos en milisegundos
let margen = 50; // Margen de 50 píxeles
let numImagenesPorColor = 9; // Número de imágenes por color

function preload() {
  // Cargar imágenes antes de que comience setup
  for (let n = 1; n <= 9; n++) {
    let img = loadImage('assets/imagen' + n +'.png'); // Asegúrate de que las imágenes estén en la carpeta `assets`
    imagenes.push(img);
  }
}

function setup() {
  createCanvas(1000, 1000);

  // Crear buffers y hacer las imágenes de diferentes colores
  for (let n = 0; n < imagenes.length; n++) {
    let img = imagenes[n];
    buffers.rojo.push(cambiarColor(img, color(255, 0, 0)));
    buffers.azul.push(cambiarColor(img, color(0, 0, 139)));
    buffers.amarillo.push(cambiarColor(img, color(255, 255, 0)));
    buffers.negro.push(cambiarColor(img, color(0, 0, 0)));
    buffers.verde.push(cambiarColor(img, color(0, 128, 0)));
  }

  i = new Manchas();
}

function draw() {
  background(20); // Fondo blanco

  let tiempoActual = millis();
  if (tiempoActual - tiempoAnterior >= intervalo) {
    tiempoAnterior = tiempoActual;

    // Agregar una imagen de cada color
    for (let color in buffers) {
      let indiceImagen = i.contadores[color];
      if (indiceImagen < buffers[color].length) {
        i.agregarImagen(buffers[color][indiceImagen], color);
        i.contadores[color]++;
      }
      if (i.contadores[color] >= buffers[color].length) {
        i.contadores[color] = 0; // Reiniciar el índice para que el ciclo se repita
      }
    }
  }

  // Dibuja las imágenes en pantalla
  for (let n = 0; n < i.mostrar.length; n++) {
    image(i.mostrar[n].img, i.mostrar[n].x, i.mostrar[n].y, i.mostrar[n].img.width, i.mostrar[n].img.height);
  }
}
