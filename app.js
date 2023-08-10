import express from "express";
import 'dotenv/config';
import clientes  from "./routes/clientes.js";
import bus  from "./routes/bus.js";
import ticket  from "./routes/ticket.js";
import mongoose from "mongoose";
import rutas from "./routes/rutas.js";

mongoose.connect('mongodb://127.0.0.1:27017/test')
.then(()=> console.log("Connected to MongoDB"))

const app = express()
app.use(express.json())
app.use(   "/api/clientes"   ,clientes);
app.use(   "/api/bus"   ,bus);
app.use(   "/api/ticket"   ,ticket);
app.use(   "/api/ruta"   ,rutas);


app.listen(process.env.PORT,()=>{
  console.log(`Servidor escuchando en el puerto ${process.env.PORT}`);
  
})