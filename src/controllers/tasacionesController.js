const Nodemailer = require('../services/NodeMailer');
const {config} = require('../../config/index');

exports.sendEmail = async (req,res)=>{
    try {
        const {body} = req;
        let text = `${body.nombre} <${body.email}> \n 
        Teléfono: ${body.telefono} \n
        Ciudad: ${body.localidad} \n
        Barrio: ${body.barrio} \n
        Tipo de propiedad: ${body.categoria} \n
        Tipo de operación: ${body.operacion} \n
        Mensaje: ${body.mensaje}       
        `;
        const nodemailer = new Nodemailer();
        const mailOptions={
            from:body.nombre,
            to:`${config.FROM_USERNAME}`,
            subject:'Nuevo pedido de tasación desde página web',
            text
        };
        nodemailer.send(mailOptions).then(result=>{
            res.status(200).json({
                ok:true,
                msg:'Enviado',
                info:result
            })
        }).catch(err=>{
            res.status(500).json({
                ok:false,
                error:err
            })
        })
    } catch (error) {
        console.log(error);
        res.status(500).json({
            ok:false,
            msg:error.message,
            info:error
        })
    }
}