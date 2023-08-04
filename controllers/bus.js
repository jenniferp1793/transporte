import bus from "../models/bus.js";

const httpBus = {
    getbus: async (req, res) => {
      try {
        const buses = await bus.find();
        res.json({ buses });
      } catch (error) {
        res.status(400).json({ error });
      }
    },
  
    getBusPlaca: async (req, res) => {
      const { placa } = req.params;
      try {
        const bus = await bus.find({ placa: placa });
        res.json({ bus });
      } catch (error) {
        res.status(400).json({ error });
      }
    },
  
    getBusId: async (req, res) => {
      try {
        const { id } = req.params;
        const bus = await bus.findById(id);
        res.json({ bus });
      } catch (error) {
        res.status(400).json({ error });
      }
    },
  
    postBuses: async (req, res) => {
      try {
        const { numero_vehiculo, placa, conductor } = req.body;
        const bus3 = new bus({ numero_vehiculo, placa, conductor });
        await bus3.save();
  
        res.json({ bus3 });
      } catch (error) {
        res.status(400).json({ error });
      }
    },
  
    putBuses: async (req, res) => {
      try {
        const { id } = req.params;
        const { numero_vehiculo, conductornuevo } = req.body;
        const bus3 = await bus.findByIdAndUpdate(
          id,
          { numero_vehiculo, conductor: conductornuevo },
          { new: true }
        );
        res.json({ bus3 });
      } catch (error) {
        res.status(400).json({ error });
      }
    },
  
    deleteBuses: async (req, res) => {
      const { placa } = req.params;
      const bus3 = await bus.findOneAndDelete({ placa: placa });
      res.json({ bus3 });
    },
  
    deleteBusById: async (req, res) => {
      try {
        const { id } = req.params;
        const bus3 = await bus.findByIdAndDelete(id);
        res.json({ bus3 });
      } catch (error) {
        res.status(400).json({ error });
      }
    },
  
    putBusInactivar: async (req, res) => {
      try {
        const { id } = req.params;
        const bus3 = await bus.findByIdAndUpdate(id, { estado: 0 }, { new: true });
        res.json({ bus3 });
      } catch (error) {
        res.status(400).json({ error });
      }
    },
  
    putBusActivar: async (req, res) => {
      try {
        const { id } = req.params;
        const bus3 = await bus.findByIdAndUpdate(id, { estado: 1 });
        res.json({ bus3 });
      } catch (error) {
        res.status(400).json({ error });
      }
    },
  };
  
  export default httpBus;
  