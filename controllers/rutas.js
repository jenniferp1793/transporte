import ruta from "../models/ruta.js";

const httpRutas = {
    getrutas:async (req, res) => {
        try{
            const Ruta=await ruta.find()
            res.json({Ruta})
        }catch(error){
            res.status(400).json({error})
        }   
    },
    getRutasDestino:async (req, res) => {
        const { destino } = req.params
        try{
            const Ruta2=await ruta.find({id:destino})
            res.json({Ruta2})
        }catch(error){
            res.status(400).json({error})
        }
    },

    postRutas:async (req, res) => {
        try{
        const { origen, destino, hora_salida,valor, numero_acientos} = req.body

        const ruta1 =new ruta( { origen,destino, hora_salida, valor, numero_acientos});
        await ruta1.save();
        res.json({ ruta1 });
        }catch (error){
            res.status(400).json({error});
        }
    },
    putRutas:async(req,res)=>{
        try{
            const{id}=req.params;
            const{origen,nuevovalor}=req.body;
            const ruta1 = await ruta.findByIdAndUpdate(
                id,
            {origen,nuevovalor:nuevovalor},
            {new:true}
            );
            res-json({ruta1});
        }catch(error){
            res.status(400).json({error});
        }
    },
    deleteRutas:async (req,res)=>{
        const {destino}=req.params;
        const ruta1=await ruta.findOneAndDelete({destino:destino});
        res.json({ruta1});
    },
    deleteRutasId:async(req, res)=>{
        try{
            const {id}= req.params;
            const ruta1=await ruta.findOneAndDelete(id);
            res.json({ruta1});
        }catch (error){
            res.status(400).json({error});
        }
    },
putRutaActivar: async (req , res)=>{
        try {
            const { id } = req.params;
            const ruta1 = await ruta.findByIdAndUpdate(id, { estado: 1 });
            res.json({ ruta1 });
        } catch (error) {
            res.status(400).json({ error });
        }
    },
};

export default httpRutas