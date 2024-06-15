class Manchas {
  constructor() {
    this.mostrar = [];
    this.contadores = {
      rojo: 0,
      azul: 0,
      amarillo: 0,
      negro: 0,
      verde: 0
    };
  }

  agregarImagen(buffer, color) {
    // Posición aleatoria dentro del lienzo con un margen
    let x = random(margen, width - margen - buffer.width);
    let y = random(margen, height - margen - buffer.height);

    this.mostrar.push({ img: buffer, x: x, y: y, color: color }); // Agregar imagen con su posición al arreglo
    if (this.mostrar.filter(img => img.color === color).length > numImagenesPorColor) {
      this.mostrar = this.mostrar.filter(img => img.color !== color || this.mostrar.indexOf(img) > 0); // Eliminar la más antigua de ese color
    }
  }
}

function cambiarColor(img, colorBase) {
  let buffer = createGraphics(img.width, img.height);
  buffer.image(img, 0, 0);
  buffer.loadPixels();

  for (let i = 0; i < buffer.pixels.length; i += 4) {
    let r = red(colorBase);
    let g = green(colorBase);
    let b = blue(colorBase);
    buffer.pixels[i] = r;
    buffer.pixels[i + 1] = g;
    buffer.pixels[i + 2] = b;
  }

  buffer.updatePixels();
  return buffer;
}
