const fs = require("fs");
const  concesionaria = JSON.parse(fs.readFileSync("./data/concesionarias.json", "utf-8"));

module.exports = {
    listar: (req,res) =>{
        let autos=[];
        for(let i=0; i<concesionaria.length; i++){
            autos.push(concesionaria[i].autos);
        }
        res.send(autos);
    
    },
    filtrarPorMarca: (req,res)=>{
        let autos=[];
        let automotor;
        for(let i=0; i<concesionaria.length; i++){
            autos.push(concesionaria[i].autos);
        }
        automotor = autos.filter(element => {
            if(req.params.marca == element.marca){
            res.send(element.marca)
            }
        })
    },
    filtrarPorColor: (req,res) =>{


    },
    filtrarPorAnio: (req,res) =>{

    }
}