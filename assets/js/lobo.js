import Animal from "./animales.js";

class Lobo extends Animal {
  constructor(nombre, edad, img, comentario, sonido) {
    super(nombre, edad, img, comentario, sonido);
  }

  aullar() {
    return this.sonido;
  }
}

export default Lobo;
