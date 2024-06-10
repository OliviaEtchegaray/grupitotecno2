class Manchas {
  constructor() {
    this.mostrar = [];
  }

  agregarImagen(img) {
    // Posición aleatoria dentro del lienzo con un margen
    let x = random(margen, width - margen - img.width);
    let y = random(margen, height - margen - img.height);

    this.mostrar.push({ img: img, x: x, y: y }); // Agregar imagen con su posición al arreglo
    if (this.mostrar.length > 9) {
      this.mostrar.shift(); // Eliminar la primera imagen si hay más de 9
    }
  }
}
