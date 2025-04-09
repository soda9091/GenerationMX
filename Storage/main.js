localStorage.setItem("email", "eestevass@gmail.com");

let email = localStorage.getItem("email");
encabezado1.innerText =  'Bienvenido de nuevo ${email}';
console.log(email);

localStorage.removeItem("email"); //elimina el elemento email del localStorage

//guarda el correo electronico en el navegador
//localStorage.setItem("email", "eestevass@gmail.com")

/////////////////////////

let encabezado = document.getElementsByTagName("h1").item(0);

if (localStorage.getItem("email") === null) {
    let email = localStorage.getItem("email");
    encabezado.innerText = 'Bienvenido de nuevo ${email}';

    console.log(email);
} else {
    //guarda el correo electronico en el navegador
    localStorage.setItem("email","eestevass@gmail.com");
    localStorage.setItem("email","edu18cool@gmail.com");
}//!==null
