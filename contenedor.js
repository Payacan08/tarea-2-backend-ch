const fs = require('fs');

class Contenedor{
    constructor (nombre){
        this.ruta = `./${nombre}.txt`
    }

    save(object){
        let json=[], id=1;
        try {
            json = JSON.parse(fs.readFileSync(this.ruta,'utf-8',));
            json.forEach(element => {
                if (element.id>=id){
                    id = element.id + 1;
                }
            });           
        } catch (error) {
            console.log("Documento no encontrado, Se creara documento.");
        }
        object.id = id;
        json.push(object);
        try {
            fs.writeFileSync(this.ruta, JSON.stringify(json))   
        } catch (error) {
            console.log("Error al escribir en documento");
        }
        
    }

    getById(number){
        let json=[]
        try {
            json = JSON.parse(fs.readFileSync(this.ruta,'utf-8'));          
        } catch (err) {
            console.log(err);
        }
        json.forEach(element=>{
            if(element.id == number){
                json = element;
            }
        })
        return json
    }

    getAll(){
        let json=[]
        try {
            json = JSON.parse(fs.readFileSync(this.ruta,'utf-8'));          
        } catch (err) {
            console.log(err);
        }
        return json;
    }

    deleteById(number){
        let json=[]
        try {
            json = JSON.parse(fs.readFileSync(this.ruta,'utf-8',));          
        } catch (err) {
            console.log(err);
        }
        json = json.filter(element => element.id !== number); 
        try {
            fs.writeFileSync(this.ruta, JSON.stringify(json))   
        } catch (error) {
            console.log("Error al escribir en documento");
        }
    }

    deleteAll(){
        let json=[]
        try {
            fs.writeFileSync(this.ruta, JSON.stringify(json))   
        } catch (error) {
            console.log("Error al escribir en documento");
        }
    }

    length(){
        let json=[]
        try {
            json = JSON.parse(fs.readFileSync(this.ruta,'utf-8',));          
        } catch (err) {
            console.log(err);
        }
        return json.length       
    }

    randomObj(){
        let randomNum = Math.floor(Math.random()*this.length()+1);
        return this.getById(randomNum);
    }
}

module.exports = Contenedor




