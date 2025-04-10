const data = {
"id": 17,
"title": "Rain Jacket Women Windbreaker Striped Climbing Raincoats",
"price": 39.99,
"description": "Lightweight perfet for trip or casual wear---Long sleeve with hooded, adjustable drawstring waist design. Button and zipper front closure raincoat, fully stripes Lined and The Raincoat has 2 side pockets are a good size to hold all kinds of things, it covers the hips, and the hood is generous but doesn't overdo it.Attached Cotton Lined Hood with Adjustable Drawstrings give it a real styled look.",
"category": "women's clothing",
"image": "https://fakestoreapi.com/img/71HblAHs5xL._AC_UY879_-2.jpg",
"rating": {
    "rate": 3.8,
    "count": 679
}
};

function getData(){
    return new Promise( (resolve, reject) => {
        if(data==null){
            reject(new Error("No hay datos"));
        }//null        
    setTimeout ( () => {resolve(data)}, 2000);//5 segundos
    });
}//getData

getData
        .then((response)=> console.log("Respuesta: ", response))//Responde la consola con el objeto data
        .catch((err) => console.log("catch: ", err));//getData