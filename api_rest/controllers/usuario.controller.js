const Usuario = require('../models/usuario');
const usuarioCtrl = {};

usuarioCtrl.getUsuarios = async (req,res)=>{
    const usuarios = await Usuario.find()
    res.json(usuarios);
}
usuarioCtrl.getUsuario = async (req,res)=>{
    const usuario = await Usuario.findById(req.params.id);
    res.json(usuario);
}

usuarioCtrl.createUsuario = async (req,res)=>{
    const usuario = new Usuario({
        pnombre: req.body.pnombre,
        apellido: req.body.apellido,
        edad: req.body.edad,
        direccion: req.body.edad
    });
    await usuario.save();
    res.json({
        status: 'Usuario guardado'
    });
}

usuarioCtrl.editUsuario = async (req,res)=>{
    const usuario = {
        pnombre: req.body.pnombre,
        apellido: req.body.apellido,
        edad: req.body.edad,
        direccion: req.body.direccion
    };
    await Usuario.findByIdAndUpdate(req.params.id,{$set:usuario},{new: true});
    res.json({status:'Usuario actualizado'})
}

usuarioCtrl.deleteUsuario = async (req,res)=>{
    await Usuario.findByIdAndRemove(req.params.id);
    res.json({status: 'Usuario eliminado'})
}
module.exports = usuarioCtrl;