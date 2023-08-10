import { Router } from "express"
import httpClientes from "../controllers/clientes.js"
import { check } from "express-validator"

const router=new Router()

router.get('/hola',[
  check("nombre", "El nombre es obligatorio").not().isEmpty(),
  check("nombre", "Minimo 8 caracteres").isLength({min:8}),
  check("nombrecampo").isMongoId(),
  check("cedula, cedula duplicada"),
  check("cedula", "La cedula es obligatoria").not().isEmpty(),
  check("cedula", "numerica").isNumeric(),
  check("telefono", "El telefono es obligatorio").not().isEmpty(),
  check("telefono", "Maximo 15 caracteres").isLength({max:15})
] ,httpClientes.getclientes  )

router.get('/:cedula', httpClientes.getClientesCedula)

router.post('/', httpClientes.postClientes  )

router.delete('/:cedula',(req,res)=>{
  const {cedula}=req.params

  const index=bd.clientes.findIndex( cliente=> cliente.cc==cedula   )
  const cliente= bd.clientes.splice(index,1)

  if( index==-1 ) res.status(400).json({error:"Cliente no existe"})
  else res.json({cliente})
})

export default router

const validarCampos = ( req, res, next ) => {
  const errors = validationResult(req);
  if( ! errors.isEmpty() ){

      if (req.codeError){
          return res.status(req.codeError).json({error:"Error de validación de datos"});
      } 

      return res.status(400).json({error:"Error de validación de datos"});
  }
  
  next();
}


export {
  validarCampos
}