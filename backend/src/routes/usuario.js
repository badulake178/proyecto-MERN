const {Router} = require('express')
const router = Router()

const {createUsu, getUsu, getUsuario, deleteUsu, updateUsu} = require('../controller/usuario.controller.js')

router.route('/')

    .get(getUsu)
    .post(createUsu)

router.route('/:id')
    .get(getUsuario)
    .delete(deleteUsu)
    .put(updateUsu)

module.exports = router;