import Ruta from "../models/ruta.js";

const httpRuta ={
    getRuta: async (req, res) => {
        try {
            const ruta = await Ruta.find()
            res.json({ ruta })

        } catch (error) {
            res.status(400).json({ error })
        }
    },
    getRutaId: async (req, res) => {
        const { id } = req.params
        try {
            const ruta = await Ruta.findById({id})
            res.json({ ruta })

        } catch (error) {
            res.status(400).json({ error })
        }
    },
    postRuta: async (req, res) => {
        try {
            const { precio, origen, destino} = req.body
            const ruta = new Ruta({ precio, origen, destino})
            await ruta.save()

            res.json({ ruta })
        } catch (error) {
            res.status(400).json({ error })
        }
    },
    putRuta: async (req, res) => {
        try {
            const { id } = req.params
            const { precio, origen, destino} = req.body
            const ruta = await
                Ruta.findByIdAndUpdate(id, { precio, origen, destino}, { new: true });
            res.json({ruta})
        } catch (error) {
            res.status(400).json({error})
        }
    },
    deleteRuta: async (req,res) => {
        try {
            const { id } = req.params
            const ruta = await Ruta.findByIdAndDelete(id)
            res.json(ruta + `Ruta eliminada`)
        } catch (error) {
            res.status(400).json({error})
        }
    },
    putRutaInactivar: async (req,res)=>{
        try {
            const {id}=req.params
            const ruta=await Ruta.findByIdAndUpdate(id,{estado:0},{new:true})
            res.json({ruta})
        } catch (error) {
            res.status(400).json({error})
            
        }
    },
    putRutaActivar: async (req,res)=>{
        try {
            const {id}=req.params
            const ruta=await Ruta.findByIdAndUpdate(id,{estado:1},{new:true})
            res.json({ruta})
        } catch (error) {
            res.status(400).json({error})
        }
    }
}
export default httpRuta