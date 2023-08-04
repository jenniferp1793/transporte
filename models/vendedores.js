import mongoose from "mongoose";

const vendedorSchema= new mongoose.Schema({
    nombre:{type:String, required:true, minlength:7, maxlength:10},
    cc:{type:String, required:true, unique:true, minlength:7, maxlength:10},
    estado:{type:Number, default:1}
})

export default mongoose.modal("vendedor", vendedorSchema)