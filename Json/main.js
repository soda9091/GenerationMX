const producto = {"id":1,"title":"Fjallraven - Foldsack No. 1 Backpack, Fits 15 Laptops","price":109.95,"description":"Your perfect pack for everyday use and walks in the forest. Stash your laptop (up to 15 inches) in the padded sleeve, your everyday","category":"men's clothing","image":"https://fakestoreapi.com/img/81fPKd-2AYL.AC_SL1500.jpg","rating":{"rate":3.9,"count":120}}

// Objeto --> Cadena
let strProd = JSON.stringify(producto);
console.log("strProd: ", strProd); // {"id":1,"title":"Fjallraven - Foldsack No. 1 Backpack, Fits 15 Laptops"}

//Candena --> Objeto
let objProd = JSON.parse(strProd);
console.log("prod: ", objProd); // {id: 1, title: "Fjallraven - Foldsack No. 1 Backpack, Fits 15 Laptops"}