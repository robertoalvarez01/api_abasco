const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const UsuarioService = require('../services/UsuarioService');

exports.getAll = async(req,res)=>{
    const desde = req.query.desde || 0;
    const limite = req.query.limite || 5;
    const usuarioService = new UsuarioService();
    try {
        const users = await usuarioService.getAll(desde,limite);
        res.status(200).json({
            ok:true,
            usuarios:users
        })
    } catch (error) {
        console.log(error);
        res.status(500).json({
            ok:false,
            msg:'Ha ocurrido un error'
        })
    }
}

exports.get = async(req,res)=>{
    const {id} = req.params;
    const usuarioService = new UsuarioService();
    try {
        const user = await usuarioService.findById(id);
        res.status(200).json({
            ok:true,
            usuario:user
        })
    } catch (error) {
        console.log(error);
        res.status(500).json({
            ok:false,
            msg:'Ha ocurrido un error'
        })
    }
}

exports.create = async(req,res)=>{
    const usuarioService = new UsuarioService();
    try {
        //Revisar que el usuario registrado sea unico
        let usuario = await usuarioService.findByEmail(req.body.email);
        console.log(usuario);
        if(usuario.length>0) return res.status(400).json({ok:false,msg:'El usuario ya existe'});

        //hashear password
        const salt = await bcrypt.genSalt(10); //a mayor valor, consume mas memoria del servidor
        req.body.pw = await bcrypt.hash(req.body.pw,salt);

        //guardar usuario
        let user;
        if(req.usuario && req.usuario.admin){
            user = await usuarioService.createAdmin(req.body);
        }else{
            user = await usuarioService.create(req.body);
            //Crear y firmar el JWT
            const payload = {
                usuario:{
                    idUsuario:user.insertId,
                    admin:0
                }
            };

            //firmar token
            return jwt.sign(payload,process.env.JWT_SECRET,{
                expiresIn:3600 //UNA HORA   
            },(error,token)=>{
                if(error){
                    res.status(500).json({
                        ok:false,
                        msg:'Ha ocurrido un error',
                        info:{
                            error
                        }
                    })
                    return;
                };

                //Mensaje de confirmacion
                res.status(200).json({
                    ok:true,
                    token
                })
                return;
            });
        }
        res.status(500).json({
            ok:true,
            info:user
        });
    } catch (error) {
        res.status(500).json({
            ok:false,
            msg:'Ha ocurrido un error',
            info:{
                error
            }
        })
    }
}

exports.update = async(req,res)=>{
    const usuarioService = new UsuarioService();
    try {
        //hashear password
        const salt = await bcrypt.genSalt(10); //a mayor valor, consume mas memoria del servidor
        req.body.pw = await bcrypt.hash(req.body.pw,salt);

        //actualizar usuario
        const user = await usuarioService.update(req.body,req.params.id);
        
        //Mensaje de confirmacion
        res.status(200).json({
            ok:true,
            info:user
        })

        //HABILITAR ESTO EN EL FUTURO CUANDO SE IMPLEMENTE AUTENTICACION A NIVEL GENERAL

        // //Crear y firmar el JWT
        // const payload = {
        //     usuario:{
        //         id:usuario.id
        //     }
        // };

        //firmar token
        // jwt.sign(payload,process.env.JWT_SECRET,{
        //     expiresIn:3600 //UNA HORA   
        // },(error,token)=>{
        //     if(error) throw error;

        //     //Mensaje de confirmacion
        //     res.status(200).json({
        //         ok:true,
        //         token
        //     })
        // });

    } catch (error) {
        console.log(error);
        res.status(500).json({
            ok:false,
            msg:'Ha ocurrido un error'
        })
    }
}

exports.delete = async(req,res)=>{
    const usuarioService = new UsuarioService();
    try {
        const {id} = req.params;
        const eliminar = await usuarioService.delete(id);
        res.status(200).json({
            ok:true,
            info:eliminar
        })
    } catch (error) {
        console.log(error);
        res.status(500).json({
            ok:false,
            msg:'Ha ocurrido un error'
        }) 
    }
}