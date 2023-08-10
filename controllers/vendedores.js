import vendedores from "../models/vendedores.js";
import vendedores from "../models/vendedores.js";
import vendedores from "../models/vendedores.js";

const httpVendedores = {
    getvendedores: async (req, res) => {
        try {
            const vendedores = await Vendedor.find()
            res.json({ vendedores })      
        } catch (error) {
            res.status(400).json({error})
        }
    },
    getVendedoresCedula: async (req, res) => {
        const {cedula}=req.params
        try {
            const vendedores = await vendedores.find({cc:cedula})
            res.json({ vendedores })
        } catch (error) {
            res.status(400).json({error})
        }
    },
    getVendedoresId: async(req,res)=>{
        try {
            const { id } = req.params
            const vendedores = await Vendedor.findById(id)
            res.json({ vendedores })
        } catch (error) {
            res.status(400).json({error})
        }      
    },
    postVendedores: async (req, res) => {
        try {
            const { nombre, cedula, edad, telefono } = req.body
            const vendedores = new ({ nombre, cedula, edad, telefono })
            await vendedores.save()

            res.json({ vendedores })
        } catch (error) {
            res.status(400).json({ error })
        }
    },
    
    putvendedores: async (req,res) => {
        const {id}=req.params
        const {nombre,telefononuevo}=req.body
        const Vendedor=await
            Vendedor.findByIdAndUpdate(id,{nombre,telefono:telefononuevo},{new:true});
    },
    deleteVendedores: async()=>{
        const {cedula}=req.params
        const Vendedor= await Vendedor.findOneAndDelete({cc:cedula})
        res.json({Vendedor})
    },
    deleteVendedoresById: async ()=>{
        try {
            const {id}=req.params
            const vendedor=await Vendedor.findByIdAndDelete(id)
        } catch (error) {    
        }
    },

    putVendedorInactivar: async ()=>{
        try {
            const {id}=req.params
            const vendedor=await Vendedor.findByIdAndUpdate(id,{estado:0},{new:true})
            res.json({vendedor})
        } catch (error) {  
        }
    },
    putVendedorActivar: async ()=>{
        try {
            const {id}=req.params
            const vendedor=await Vendedor.findByIdAndUpdate(id,{estado:1})
        } catch (error) {
        }
    }
}

export default vendedores