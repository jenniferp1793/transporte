import Bus from "../models/bus.js";

const httpBus = {
    getBuses: async (req, res) => {
        try {
            const buses = await Bus.find()
            res.json({ buses })

        } catch (error) {
            res.status(400).json({ error })
        }

    },
    getBus: async (req, res) => {
        const {id}=req.params
        try {
            const bus = await Bus.findById(id)
            res.json({ bus })
            
        } catch (error) {
            res.status(400).json({error})
        }
    },

    postBus: async (req, res) => {
        try {
            const { numero_bus,cantidad_asientos, empresa_asignada } = req.body
            const bus = new Bus({ numero_bus, cantidad_asientos, empresa_asignada})
            await bus.save()

            res.json({ bus })
        } catch (error) {
            res.status(400).json({ error })
        }

    },
    
    putEditarBus: async (req,res) => {
        try {
            const {id}=req.params
            const {cantidad_asientos, empresa_asignada}=req.body
            const bus=await 
                Bus.findByIdAndUpdate(id,{cantidad_asientos,empresa_asignada},{new:true});
                res.json({ bus })
        } catch (error) {
            res.status(400).json({ error: "Error en el servidor" });
        }
    },
    
    deleteBus: async (req, res) => {
        try {
            const { numero_bus } = req.params;

            const bus = await Bus.findOneAndDelete({ numero_bus });

            if (!bus) {
                return res.status(404).json({ error: "Bus no encontrado" });
            }

            res.json({ message: "Bus eliminado correctamente" });
        } catch (error) {
            res.status(400).json({ error: "Error en el servidor" });
        }
    },
    putBusInactivar: async (req,res)=>{
        try {
            const {id}=req.params
            const bus=await Bus.findByIdAndUpdate(id,{estado:0},{new:true})
            res.json({bus})
        } catch (error) {
            res.status(400).json({error})
            
        }
    },
    putBusActivar: async (req,res)=>{
        try {
            const {id}=req.params
            const bus=await Bus.findByIdAndUpdate(id,{estado:1},{new:true})
            res.json({bus})
        } catch (error) {
            res.status(400).json({error})
        }
    }
    
}

export default httpBus
  