const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const AuthService = require('../services/AuthService');

exports.login = async(req,res)=>{
    //Extraer email y password
    const {email,pw} = req.body;
    const authService = new AuthService();
    try {
        //Revisar que sea un usuario registrado
        let usuario = await authService.login(email);
        usuario = usuario[0];
        if(!usuario) return res.status(400).json({ok:false,msg:'El usuario no existe'});

        //Revisar su password
        const passCorrecto =  await bcrypt.compare(pw,usuario.pw);
        if(!passCorrecto) return res.status(400).json({ok:false,msg:'Password incorrecto'});

        //Si todo esta OK, crear y firmar JWT
        const payload = {
            usuario:{
                idUsuario:usuario.idUsuario,
                admin:usuario.admin
            }
        };

        //firmar token
        jwt.sign(payload,process.env.JWT_SECRET,{
            expiresIn:3600 //UNA HORA   
        },(error,token)=>{
            if(error) {
                res.status(400).json({
                    ok:false,
                    msg:error.message,
                })
                return;
            };

            //Mensaje de confirmacion
            res.status(200).json({
                ok:true,
                token
            })
        });
    } catch (error) {
        console.log(error);
        res.status(400).json({
            ok:false,
            msg:error.message,
            info:{
                error
            }
        })
    }
}

exports.obtenerUsuario = async(req,res)=>{
    const authService = new AuthService();
    try {
        const usuario = await authService.getById(req.usuario.idUsuario);
        res.status(200).json({
            ok:true,
            usuario
        })
    } catch (error) {
        console.log(error);
        res.status(500).json({
            ok:false,
            msg:error.message,
            info:{
                error
            }
        })
    }
}