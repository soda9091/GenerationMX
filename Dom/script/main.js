let btnMostrar = document.getElementById("btnMostrar");
let encabezado1 = document.getElementById("encabezado1");
let encabezado2 = document.getElementById("encabezado2");
let listas = document.getElementsByTagName("ul");

let elementos = document.getElementsByClassName("list-group-item");

let otroElemento = document.querySelector("ul>li"); //primer elemento

let otrosElementos = document.querySelectorAll("ul>li"); //todos

console.log(otrosElementos.length);

console.log("otroElemento: ", otroElemento);

console.log(listas.length); //2
// console.log(listas[0]);
console.log(listas.item(1));

console.log(elementos.item(2));

console.log(elementos.length); //10

let contador = 0; 
function modifica(){
    // encabezado1.innerText = "<em>Ejercicio</em> DOM"
    encabezado1.innerHTML += "<em>Ejercicio</em> DOM";
    encabezado2.innerText = ++contador;   
} //modifica

//console.log(encabezado1.innerText);

btnMostrar.addEventListener("click", function (event){
    event.preventDefault(); //no hagas lo que haces por defecto
    
    let element = document.createElement("li");
    element.innerText = "Another item"; // <li>Another item</li> es lo que obtendremos
    element.classList.add("list-group-item");

    let element2 = element.cloneNode(true);

    listas.item(0).before(element);
    
    listas.item(0).prepend(element2);

// append Inserta el elemnto al final de la lista
// listas.item(0).append(element);
// after inserta el elemento despues de la lista
// listas.item(0).after(element2);

// aftebegin Inserta el elemento al principio de la lista
// listas.item(1).insertAdjacentElement("afterbegin", element);
// beforeend Inserta el elemento al final de la lista
// listas.item(1).insertAdjacentElement("beforeend", element2);


// Corrected code for inserting elements using insertAdjacentElement

// Create the elements properly
const beforeBeginItem = document.createElement("li");
beforeBeginItem.className = "list-group-item";
beforeBeginItem.textContent = "Before Begin item";

const afterEndItem = document.createElement("li");
afterEndItem.className = "list-group-item";
afterEndItem.textContent = "After End item";

const afterBeginItem = document.createElement("li");
afterBeginItem.className = "list-group-item";
afterBeginItem.textContent = "After Begin item";

const beforeEndItem = document.createElement("li");
beforeEndItem.className = "list-group-item";
beforeEndItem.textContent = "Before End item";

// Insert the elements at the correct positions
listas.item(1).insertAdjacentElement("beforebegin", beforeBeginItem);
listas.item(1).insertAdjacentElement("afterend", afterEndItem);
listas.item(1).insertAdjacentElement("afterbegin", afterBeginItem);
listas.item(1).insertAdjacentElement("beforeend", beforeEndItem);

});

// Función para modificar el DOM al hacer clic en el elemento <em>
function modifica() {
    const encabezado1 = document.getElementById("encabezado1");
    encabezado1.textContent = "DOM Modificado"; // Cambia el texto del encabezado
    encabezado1.style.color = "blue"; // Cambia el color del texto
  }
  
  // Función para mostrar un mensaje al hacer clic en el botón
  document.getElementById("btnMostrar").addEventListener("click", function (event) {
    event.preventDefault(); // Evita que el formulario se envíe
    alert("¡Botón presionado!");
  }); // load

// Se ejecuta cuando termina de cargar todos los elementos de la pagina 
  window.addEventListener("load", function(event) {
        console.log("La página se ha cargado completamente.");
        // Aquí puedes realizar otras acciones después de que la página se haya cargado
      }
  );

  function txtToUpper(event){
    event.preventDefault(); //no hagas lo que haces por defecto
    event.target.value =event.target.value.trim().toUpperCase(); //convierte a mayusculas
  }//txtToUpper
//blur --> cuando se sale del campo 
  txtRFC.addEventListener("blur", txtToUpper); //txtRFC
  txtCurp.addEventListener("blur", txtToUpper); //txtCurp

  txtTelefono.addEventListener("blur", function (event){
      event.preventDefault(); //no hagas lo que haces por defecto
      txtCurp.value = txtTelefono.value.trim().slice(0.10); //convierte a mayusculas
  }); //txtTelefono
