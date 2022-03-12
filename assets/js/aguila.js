import Animal from "./animales.js";

class Aguila extends Animal{
    constructor(nombre, edad, img, comentario, sonido) {
        super(nombre, edad, img, comentario, sonido);
      }


// imagenClaseaguila(){
//     return this.img
// }

chillido(){

    return this.sonido;
}
}

export  default Aguila