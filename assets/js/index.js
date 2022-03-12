console.log("hola");

import Aguila from "./Aguila.js";
import Leon from "./Leon.js";
import Oso from "./Oso.js";
import Serpiente from "./Serpiente.js";
import Lobo from "./Lobo.js";
import Animal from "./animales.js";

const divAnimales = document.getElementById("Animales");
const selectAnimal = document.getElementById("animal");
const selectEdad = document.getElementById("edad");
const textarea = document.getElementById("comentario");
const divpreview = document.getElementById("preview");
const botonDeRegistrar = document.getElementById("btnRegistrar");
const audio = document.getElementById("player");
const modal = document.getElementById("exampleModal");

const divPrincipal = document.getElementById("tabla");

let animalitosAustralia = "";

const listaAnimales2022 = (async () => {
  try {
    const URL = "../animales.json";
    const request = await fetch(URL);
    const data = await request.json();
    animalitosAustralia = data.animales;
    return animalitosAustralia;
  } catch (error) {
    console.error(error);
  }
})();

botonDeRegistrar.addEventListener("click", () => {
  let nuevoArregloAnimal = "";

  const australia = animalitosAustralia.filter(
    (a) => a.name === selectAnimal.value
  )[0];

  if (australia.name === "Oso") {
    nuevoArregloAnimal = new Oso(
      australia.name,
      edad,
      australia.imagen,
      comentarios,
      australia.sonido
    );
  }
  if (australia.name === "Lobo") {
    nuevoArregloAnimal = new Lobo(
      australia.name,
      edad,
      australia.imagen,
      comentarios,
      australia.sonido
    );
  }
  if (australia.name === "Serpiente") {
    nuevoArregloAnimal = new Serpiente(
      australia.name,
      edad,
      australia.imagen,
      comentarios,
      australia.sonido
    );
  }
  if (australia.name === "Leon") {
    nuevoArregloAnimal = new Leon(
      australia.name,
      edad,
      australia.imagen,
      comentarios,
      australia.sonido
    );
  }
  if (australia.name === "Aguila") {
    nuevoArregloAnimal = new Aguila(
      australia.name,
      edad,
      australia.imagen,
      comentarios,
      australia.sonido
    );
  }
  visualAnimal(nuevoArregloAnimal);
  reset();
});

const visualAnimal = (a) => {
  divpreview.innerHTML = `
    
    
    
    <div
   class="text-center 
    d-block 
    justify-content-center  
    card col-6  mx-2"
    style="background-image:url(./assets/imgs/${a.img});
    background-size: cover;
    background-position:center;
    height:220px;
    width:300">
    </div>;

    `;

  divAnimales.innerHTML += `
    
    
    
    
    <div class="d-block p-1">
          <audio class="w-70" controls>
            <source src="./assets/sounds/${a.sonido}" type="audio/ogg" />
          </audio>
          <div class="justify-conten-center">
            <img width="280px" height="330px" src="assets/imgs/${a.img}" class="rounded" alt="animales">
          </div>
        </div>
    
          `;
};

//modal

const reset = () => {
  selectAnimal.value = "Seleccione un animal";
  selectEdad.value = "Seleccione un rango de años";

  divpreview.removeAttribute("style");
};
reset();
