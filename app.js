const express = require("express"); // requiero modulo nativo express
const app = express(); // ejecuto los metodos de express

app.listen(3030, ()=> console.log("Server running in 3030 port")); // levanto servidor

let routerHome = require("./routes/home");
let routerSucursales = require("./routes/sucursales");
let routerMarcas = require("./routes/marcas");
let routerAutos = require("./routes/autos");


app.use("/", routerHome);
app.use("/", routerSucursales);
app.use("/", routerMarcas);
app.use("/", routerAutos);

app.get('*', (req, res) => {
	res.status(404).send('404 not found. <br> ¡Houston, poseemos problemas!');
});