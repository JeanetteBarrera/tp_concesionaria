const fs = require("fs");
const  concesionaria = JSON.parse(fs.readFileSync("./data/concesionarias.json", "utf-8"));

module.exports = {
    /*marcas: function() {
        let marcas=[];
        for(let i=0; i<concesionaria.length; i++){
            autos = concesionaria[i].autos;
            autos.forEach(element =>{
                if(marcas.indexOf(element.marca)=== -1){
                    marcas.push(element.marca);
                }
            })
        }
        return marcas;
    },*/

    todasLasMarcas: (req,res)=> {
        let autos; 
        let marcas =[]; // dentro de este array almacenaremos el nombre de las marcas de autos principales

        for(let i=0; i<concesionaria.length; i++){
            autos = concesionaria[i].autos;
            autos.forEach(element =>{
                if(marcas.indexOf(element.marca)=== -1){
                    marcas.push(element.marca);
                }
            });  
        }
        res.write("*************************************\n");
        res.write(`Estas son nuestras Marcas Principales\n`);
        res.write("*************************************\n\n");
        marcas.forEach(marca =>{
            res.write(`-${marca.toUpperCase()}\n`);
            
        })
        res.end();
    },

    marcaEspecifica: (req,res) =>{
        let autos;
        let autosMarca=[];
        let marcas = ["volkswagen","peugeot","chevrolet", "nissan", "renault", "audi", "fiat","ford","toyota", "citroen", "chery", "honda"];
        
        //res.write(`\nResultado de busqueda: ${req.params.marca}\n\n`);
        marcas.forEach(marca => {
            if(marca == req.params.marca){
                res.write(`\nResultado de busqueda: ${req.params.marca}\n\n`);
                for(let j=0; j<concesionaria.length; j++){
                    autos = concesionaria[j].autos;
                    autosMarca = autos.filter(auto =>auto.marca == req.params.marca);
                    
                    res.write(`--En la Sucursal: ${concesionaria[j].sucursal.toUpperCase()} \n\n`)
                    autosMarca.forEach(element =>{
                        
                    res.write(`Marca: ${element.marca}\n`);
                    res.write(`Modelo: ${element.modelo}\n`);
                    res.write(`Anio: ${element.anio}\n\n`)
                        
                    })   
                }
            }   
        })
        res.write("No se encontro");
        res.end();

    }    
}    
