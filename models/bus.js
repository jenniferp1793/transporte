import mongoose from "mongoose";

const busSchema = new mongoose.Schema({
  numero_vehiculo: { type: Number, default: 0 },
  placa: { type: String, required: true, minlength: 8 },
  hora_salida: { type: Date, default: Date.now },
  valor: { type: Number, default: 0 },
  numero_acientos: { type: Number, default: 0 },
  estado: { type: Number, default: 1 },
});

export default mongoose.model("Bus", busSchema);