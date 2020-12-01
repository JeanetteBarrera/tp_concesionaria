const fs = require("fs");
const concesionaria = JSON.parse(fs.readFileSync("./data/concesionarias.json","utf-8"));

module.exports = {
    listar: (req,res) => {
            res.send(`Sucursales: <br><br>→ ${concesionaria[0].sucursal} <br>   Direccion: ${concesionaria[0].direccion} <br>   Telefono: ${concesionaria[0].telefono} <br><br>
            → ${concesionaria[1].sucursal} <br>   Direccion: ${concesionaria[1].direccion} <br>   Telefono: ${concesionaria[1].telefono} <br><br>
            → ${concesionaria[2].sucursal} <br>   Direccion: ${concesionaria[2].direccion} <br>   Telefono: ${concesionaria[2].telefono} <br><br>
            → ${concesionaria[3].sucursal} <br>   Direccion: ${concesionaria[3].direccion} <br>   Telefono: ${concesionaria[3].telefono} <br><br>
            → ${concesionaria[4].sucursal} <br>   Direccion: ${concesionaria[4].direccion} <br>   Telefono: ${concesionaria[4].telefono} <br><br>`);
    },
    porSucursal: (req,res) =>{
        let sucursal = concesionaria.find(element => req.params.sucursal == element.sucursal);
        let autos = sucursal.autos;
        
            if(sucursal == undefined){
                res.send("no se encontro sucursal")
            }else{
                res.write(`►${sucursal.sucursal.toUpperCase()} \n\nDireccion: ${sucursal.direccion}\nTelefono: ${sucursal.telefono}\nTotal de Autos disponibles: ${sucursal.autos.length}\n\nLista de todos los vehiculos disponibles:\n\n`);
                autos.forEach(auto => {
                    res.write("  ----------------------\n")
                    res.write(`  Marca: ${auto.marca}\n  Modelo: ${auto.modelo}\n  Año: ${auto.anio}\n  Color: ${auto.color}\n`);
                });
                //res.send(sucursal.sucursal + "<br><br>→ Direccion:"+ sucursal.direccion +"<br>→ Telefono: "+sucursal.telefono+"<br>→ Total de Autos disponibles: "+sucursal.autos.length+ "<br>→ Lista de todos los vehiculos disponibles: <br>"+ autos);
            }
            res.end();
        }
    
}