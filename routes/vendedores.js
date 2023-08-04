import { Router } from "express"
import httpVendedores from "../controllers/vendedores.js"
import { check } from "express-validator"

const router=new Router()

router.get('/hola',[
    check("nombre", "El nombre es obligatorio").not().isEmpty(),
    check("nombre", "Minimo 8 caracteres").isLength({min:8}),
    check("nombrecampo").isMongoId(),
    check("cedula, cedula duplicada"),
    check("cedula", "La cedula es obligatoria").not().isEmpty(),
    check("cedula", "numerica").isNumeric(),
    check("edad", "numerica").isNumeric(),
    check("telefono", "numerica").isNumeric()
] ,httpVendedores .getVendedores)

router.get('/:cedula', httpVendedores.getVendedoresCedula)

router.post('/', httpVendedores.postVendedores )

router.delete('/:cedula',(req,res)=>{
    const {cedula}=req.params

    const index=bd.vendedores.findIndex( vendedor=> vendedor.cc==cedula   )
    const vendedor= bd.vendedoreses.splice(index,1)

    if( index==-1 ) res.status(400).json({error:"Vendedor no existe"})
    else res.json({vendedor})
})

export default router