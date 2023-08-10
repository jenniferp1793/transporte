import { Router } from "express";
import httpRutas from "../controllers/ruta.js";
import { check } from "express-validator"

const router = new Router();

router.get('/hola', httpRutas.getrutas);

router.get('/:destino', httpRutas.getRutasDestino);

router.post('/', httpRutas.postRutas);

router.delete('/:destino', (req, res) => {
  const { destino } = req.params;

  const index = bd.bus.findIndex(ruta1 => ruta1.destino === destino);
  const ruta1 = bd.ruta.splice(index, 1);

  if (index === -1) res.status(400).json({ error: "Bus no existe" });
  else res.json({ ruta1 });
});

export default router;