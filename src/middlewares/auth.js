const jwt = require('jsonwebtoken');

let verifyToken = (req,res,next)=>{
    //leer token del header
    const token = req.header('x-auth-token');

    //Revisar si no hay token
    if(!token) return res.status(401).json({ok:false,msg:'Permiso no valido'})

    //validar token
    try {
        const cifrado = jwt.verify(token, process.env.JWT_SECRET);
        req.usuario = cifrado.usuario;
        next();
    } catch (error) {
        res.status(401).json({ok:false,msg:'token no valido'})
    }
}

let verifyAdminUser = (req,res,next)=>{
    //usuario que hizo la peticion
    const usuario = req.usuario;
    if(usuario.admin === 1){
        next();
    }else{
        res.status(401).json({ok:false,msg:'No tienes permisos suficientes para realizar esta acción.'})
    }
}

module.exports = {verifyToken,verifyAdminUser};