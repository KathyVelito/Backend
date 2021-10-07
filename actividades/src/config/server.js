import express from "express";
import morgan from "morgan";

export class Server {
    constructor(){
        this.app = express();
        this.puerto = 8000;
        this.rutas();
    }

rutas(){
    this.app.use(morgan("dev"));
    this.app.get('/',(req, res)=>{
        res.send("Bienvenido a mi API");
    });
}
    start(){
        this.app.listen(this.puerto, ()=>{
            console.log(`Servidor corriendo en el puerto ${this.puerto}`)
        })
    }
}



//export const x = 10;
 //const x = 10;

 //module.exports = {
   //  x: x,
 //};
