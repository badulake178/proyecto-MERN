const usuarioCtrl = {};

const UsuarioModel = require('../models/UsuarioModel')

usuarioCtrl.getUsu = async(req, res) => {
    const usuarios = await UsuarioModel.find()
    res.json(usuarios)
};
usuarioCtrl.createUsu = async(req, res) => {
    const {nombre, apellido, correo, telefono, edad} = req.body;
    const newUsu = new UsuarioModel({
        nombre: nombre,
        apellido: apellido,
        correo: correo,
        telefono: telefono,
        edad: edad
    })

    await newUsu.save();
    res.json({message: "el usuario ha sido creado"})
};
usuarioCtrl.getUsuario = async(req, res) => {
    const usuario = await UsuarioModel.findById(req.params.id)
    res.json(usuario);
};
usuarioCtrl.deleteUsu = async(req, res) => {
    await UsuarioModel.findByIdAndDelete(req.params.id)
    res.json({message: 'usuario ha sido eliminado.'})
};
usuarioCtrl.updateUsu = async(req, res) => {
    const {nombre, apellido, correo, telefono, edad} = req.body;
    await UsuarioModel.findByIdAndUpdate(req.params.id, {
        nombre,
        apellido,
        edad,
        correo,
        telefono
    })
    res.json({message: 'El usuario ha sido actualizado'})
};

module.exports = usuarioCtrl;