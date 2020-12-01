const fs = require("fs");
const  concesionaria = JSON.parse(fs.readFileSync("./data/concesionarias.json", "utf-8"));

module.exports = {
    home : (req,res)=>{
        res.send(`Bienvenido a la Concesionaria <br><br> Nuestras Sucursales: <br><br>→ ${concesionaria[0].sucursal}<br>→ ${concesionaria[1].sucursal}<br>→ ${concesionaria[2].sucursal}<br>→ ${concesionaria[3].sucursal}<br>→ ${concesionaria[4].sucursal}`);
    
    },
}