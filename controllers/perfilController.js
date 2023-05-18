const Usuario = require("../models/user");

exports.perfil = (req, res) => {
    res.render("perfil", { tituloWeb: "Perfil de usuario",usuario: req.session.cuenta});
};
exports.users_edit_get = async (req, res) => {
    const id = req.params.id;
    try {
        const usuarioEditar = await Usuario.findOne({_id:id});
        res.render("editarperfil", { tituloWeb: "Editar usuario", usuarioEditar: usuarioEditar });
    } catch (error) {
        console.log(error);
    }
};

exports.users_edit_put = async (req, res) => {
    
const id = req.params.id;
    const body = req.body;
    console.log(id)
    console.log('body', body)
    try {
        const usuarioEditar = await Usuario.findByIdAndUpdate(
            id, body, { useFindAndModify: false }
        )
        console.log(usuarioEditar)
        res.json({
            estado: true,
            mensaje: 'Usuario editado'
        })
    } catch (error) {
        
        console.log(error)
        res.json({
            estado: false,
            mensaje: 'Problema al editar el Usuario'
        })
    }
}
   /* ---------
    
    const body = req.body;
    
    const id = req.params.id;
    
    try {
        if (body.nombre != "" && body.correo != "" && body.password != "" && body.apellidos != "") {
            const usuarioEditar = await Usuario.findByIdAndUpdate(
                id, body, { useFindAndModify: false }
                );
            res.json({
                estado: true,
                mensaje: 'Usuario editado'
            })
        } else {
            res.json({
                estado: false,
                mensaje: 'Problema al editar el usuario'
            })
        }
    } catch (error) {
        console.log(error)
        res.json({
            estado: false,
            mensaje: 'Problema al editar el usuario'
        })
    }
};*/

exports.users_edit_delete = async (req, res) => {
    const id = req.params.id;
    try {
        const usuarioBorrar = await Usuario.findByIdAndDelete(id);
        if (usuarioBorrar) {
            res.json({
                estado: true,
                mensaje: "Usuario eliminado correctamente"
            });
        } else {
            res.json({
                estado: false,
                mensaje: "Problema al eliminar el usuario"
            });
        }
    } catch (error) {
        console.log(error);
    }
};
