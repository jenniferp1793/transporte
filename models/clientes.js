import mongoose from "mongoose";

const clienteSchema = new mongoose.Schema({
    nombre: { type: String, required: true, minlength: 7, maxlength: 10 },
    cc: { type: String, required: true, unique: true, minlength: 7, maxlength: 10 },
    edad: { type: Number, default: 0 },
    telefono: { type: Number, default: 0 },
    estado: { type: Number, default: 1 }
});

export default mongoose.model("Cliente", clienteSchema);