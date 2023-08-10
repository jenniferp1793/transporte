/* import bd from "../basedatos.js"; */
import tickets from "../models/ticket.js";

const httpTicket = {
    gettickets: async (req, res) => {
        try {
            const ticket1 = await tickets.find()
            res.json({ ticket1 })      
        } catch (error) {
            res.status(400).json({error})
        }
    },
    getticketPrecio: async (req, res) => {
        const {precio}=req.params
        try {
            const tickets = await tickets.find({precio:precio})
            res.json({ tickets })
        } catch (error) {
            res.status(400).json({error})
        }
    },
    getTicketsId: async(req,res)=>{
        try {
            const { id } = req.params
            //const persona= await Persona.find({_id:id})
            const tickets = await tickets.findById(id)
            res.json({ tickets })
        } catch (error) {
            res.status(400).json({error})
        }      
    },

    postTickets:async (req, res) =>{
        try {
        const { cliente, ruta,fecha,vendedor,precio } = req.body;
        const ticket3 = new tickets({ cliente, ruta,fecha,vendedor,precio });
        await ticket3.save();
    
        res.json({ ticket3 });
        } catch (error) {
        res.status(400).json({ error });
        }
    },
    putTickets: async (req, res) => {
        try {
        const { id } = req.params;
        const { ruta,fecha } = req.body;
        const ticket3 = await tickets.findByIdAndUpdate(
            id,
            { ruta, fecha: fecha_salida },
            { new: true }
        );
        res.json({ ticket3 });
        } catch (error) {
        res.status(400).json({ error });
        }
    },
    
    deleteTickets: async (req, res) => {
        const { precio} = req.params;
        const ticket3 = await bus.findOneAndDelete({ precio:precio });
        res.json({ ticket3 });
    },
    
    deleteTicketsId: async (req, res) => {
        try {
        const { id } = req.params;
        const ticket3 = await bus.findByIdAndDelete(id);
        res.json({ ticket3 });
        } catch (error) {
        res.status(400).json({ error });
        }
    },
    
    putTicketsInactivar: async (req, res) => {
        try {
        const { id } = req.params;
        const ticket3 = await tickets.findByIdAndUpdate(id, { estado: 0 }, { new: true });
        res.json({ ticket3 });
        } catch (error) {
        res.status(400).json({ error });
        }
    },
    
    putTicketsActivar: async (req, res) => {
        try {
        const { id } = req.params;
        const ticket3 = await tickets.findByIdAndUpdate(id, { estado: 1 });
        res.json({ ticket3 });
        } catch (error) {
        res.status(400).json({ error });
        }
    },
    };
export default httpTicket;