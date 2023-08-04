import { Router } from "express"
import httpTicket from "../controllers/ticket.js"
import { check } from "express-validator"

const router=new Router()

router.get('/ticket', httpTicket, getticket[
  check('fecha_venta', "La fecha de venta es obligatorio").not().isEmpty(),
  check('hora_venta', "La hora de venta es obligatorio").not().isEmpty(),
  check('fecha_salida', "La fecha de salida es obligatorio").not().isEmpty(),
  check('hora_salida', "La hora de salida es obligatorio").not().isEmpty(),
  check('precio', "El precio es obligatorio").not().isEmpty(),
  check('cliente', "El cliente es obligatorio").not().isEmpty(),
  check('ruta', "La ruta es obligatoria").not().isEmpty(),
  check('bus', "El bus es obligatoria").isNumeric(),
  check('vendedores', "El vendedor es obligatorio").not().isEmpty()
] ,httpTicket.getticket  )


export default router