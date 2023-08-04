import Cliente from "../models/clientes.js";

const httpClientes = {
    getclientes: async (req, res) => {
        try {
            const clientes = await Cliente.find()
            res.json({ clientes })      
        } catch (error) {
            res.status(400).json({error})
        }
    },
    getClientesCedula: async (req, res) => {
        const {cedula}=req.params
        try {
            const clientes = await Cliente.find({cc:cedula})
            res.json({ clientes })
           
        } catch (error) {
            res.status(400).json({error})
        }
    },
    getClientesId: async(req,res)=>{
        try {
            const { id } = req.params
            //const persona= await Persona.find({_id:id})
            const cliente = await Cliente.findById(id)
            res.json({ cliente })
        } catch (error) {
            res.status(400).json({error})
        }      
    },
    postClientes: async (req, res) => {
        try {
            const { nombre, cedula, edad, telefono } = req.body
            const cliente = new Cliente({ nombre, cedula, edad, telefono })
            await cliente.save()

            res.json({ cliente })
        } catch (error) {
            res.status(400).json({ error })
        }
    },
    
    putclientes: async (req,res) => {
        const {id}=req.params
        const {nombre,telefononuevo}=req.body
        const cliente=await
            cliente.findByIdAndUpdate(id,{nombre,telefono:telefononuevo},{new:true});
    },
    deleteClientes: async()=>{
        const {cedula}=req.params
        const cliente= await Cliente.findOneAndDelete({cc:cedula})
        //const persona= await Persona.deleteMany({condiciones})
        res.json({cliente})
    },
    deleteClienteById: async ()=>{
        try {
            const {id}=req.params
            const cliente=await Cliente.findByIdAndDelete(id)
        } catch (error) {    
        }
    },

    putClienteInactivar: async ()=>{
        try {
            const {id}=req.params
            const cliente=await Cliente.findByIdAndUpdate(id,{estado:0},{new:true})
            res.json({cliente})
        } catch (error) {  
        }
    },
    putClienteActivar: async ()=>{
        try {
            const {id}=req.params
            const cliente=await Cliente.findByIdAndUpdate(id,{estado:1})
        } catch (error) {
           
        }
    }
}

export default httpClientes