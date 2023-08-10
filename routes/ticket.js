import { Router } from "express"
import httpTicket from "../controllers/ticket.js";
import { check } from "express-validator";
import validarCampos from "../middlewares/validar.js"
import helpersTicket from "../helpers/hp_ticket.js";

const router=new Router()

router.get('/ticket', httpTicket.getTicket);

router.get('/ticket/:id',[
    check("id", "Digite el id").not().isEmpty(),
    check("id", "Digite el id").isMongoId(),
    validarCampos
],httpTicket.getTicketId);

router.post('/agregar',[
    check("vendedor_id", "Digite el id del vendedor").isMongoId(),
    check("cliente_id", "Digite el id del cliente").isMongoId(),
    check("ruta_id", "Digite el id de la ruta").isMongoId(),
    check("bus_id", "Digite el id del bus").isMongoId(),
    check("fechahora_venta","vacio").isISO8601().toDate(),
    validarCampos
],httpTicket.postTicket);

router.delete('/ticket/:id',[
    check("id", "Digite el id").not().isEmpty(),
    check("id", "Digite el id").isMongoId(),
    validarCampos,
], httpTicket.deleteTicket);

router.put('inactivarTicket/:id',[
    check("id", "Digite el id").not().isEmpty(),
    check("id", "Digite el id").isMongoId(),
    validarCampos
],httpTicket.putTicketInactivar)
router.put('activarTicket/:id',[
    check("id", "Digite el id").not().isEmpty(),
    check("id", "Digite el id").isMongoId(),
    validarCampos
],httpTicket.putTicketActivar)

export default router