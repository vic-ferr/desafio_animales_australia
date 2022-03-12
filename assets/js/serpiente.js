import Animal from "./animales.js";

class Serpiente extends Animal{
    constructor(nombre, edad, img, comentario, sonido) {
        super(nombre, edad, img, comentario, sonido);
      }
    //   imagenClaseserpiente(){
    //     return this.img
    // }

siseo(){

    return this.sonido;
}
}

export default Serpiente