import Animal from "./animales.js";

class Leon extends Animal {
  constructor(nombre, edad, img, comentario, sonido) {
    super(nombre, edad, img, comentario, sonido);
  }
}

export default Leon;
