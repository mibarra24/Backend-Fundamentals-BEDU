// 1. Importar express
const express = require("express");

//2. Crear una insancia de un servidor
const app = express();

// 3. Declaracion de rutas
// Un metodo/verbo de HTTP es una accion
// que puede realizar un backend
//GET, POST, PUT, PATCH, DELETE, OPTIONS, HEAD, TRACE, CONNECT...
//instancia.metodo(ruta, handler)
//http://localhost:8080/
app.get("/", function (request, response) {
    //send() es write() y end() en una sola instruccion
    response.send("Hello World")
})

app.get("/acercade", function (request, response) {
    //_dirname es la ruta absoluta de donde se encuentra
    //el archivo
	response.sendFile(`${__dirname}/viejo-servidor/about.html`);
});

//4. Escuchar un puerto
app.listen(8080,function () {
    console.log("> Escuchando puerto 8080")
})
