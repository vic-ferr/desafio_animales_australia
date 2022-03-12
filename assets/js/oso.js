import Animal from "./animales.js";

class Oso extends Animal{
    constructor(nombre, edad, img, comentario, sonido) {
        super(nombre, edad, img, comentario, sonido);
      }

    //   imagenClaseoso(){
    //     return this.img
    // }
    
ruar(){

    return this.sonido;
}
}
//console.log(Oso.nombre)

export default Oso