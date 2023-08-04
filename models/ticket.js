import mongoose from "mongoose";

const ticket = new mongoose.Schema(
    {
        fechas:[{
            fecha_venta:{type: Date, required: false, default: Date.now},
            hora_venta:{ type: Date, required: false, default: Date.now},
            fecha_salida:{type: Date, required: false, default: Date.now},
            hora_salida:{ type: Date, required: true},
        }],
        precio:{type: Number, required: true},
        cliente:{type:mongoose.Schema.Types.ObjectId, ref:'Cliente', required: true},
        bus:{type:mongoose.Schema.Types.ObjectId, ref:'Bus', required: true},
        ruta:{type:mongoose.Schema.Types.ObjectId, ref:'Ruta', required: true},
        conductor:{type:mongoose.Schema.Types.ObjectId, ref:'Conductor', required: true},
        vendedor:{type:mongoose.Schema.Types.ObjectId, ref:'Vendedor', required: true},
});

export default mongoose.model("ticket", ticket);