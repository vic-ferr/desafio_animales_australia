import Animal from "./animales.js";

class Oso extends Animal {
  constructor(nombre, edad, img, comentario, sonido) {
    super(nombre, edad, img, comentario, sonido);
  }

  ruar() {
    return this.sonido;
  }
}
//console.log(Oso.nombre)

export default Oso;
