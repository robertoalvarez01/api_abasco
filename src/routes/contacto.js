const express = require('express');
const Nodemailer = require('../services/NodeMailer');
const ContactoService = require('../services/Contacto');
const {config} = require('../../config/index');

function contactoApi(app) {
    const router = express.Router();
    app.use('/contacto',router);
    const contactoService = new ContactoService();

    router.get('/',async(req,res,next)=>{
        try {
            const datos = await contactoService.get();
            res.status(200).json({
                data:datos || [],
                info:'Datos de contacto'
            });
        } catch (error) {
            next(error);
        }
    });

    router.put('/:id',async(req,res,next)=>{
        const {body:data} = req;
        const {id} = req.params;
        const response = await contactoService.update(data,id);
        res.status(200).json({
            data:response,
            info:'Contacto modificado'
        })
    })

    router.post('/sendMail',async(req,res,next)=>{
        const {body} = req;
        let text = `${body.nombre} <${body.email}> \n ${body.mensaje}`;
        if(req.body.propiedad){
            text = `${body.nombre} <${body.email}> \n Propiedad: ${req.body.propiedad} \n ${body.mensaje}`
        }
        const nodemailer = new Nodemailer();
        const mailOptions={
            from:body.nombre,
            to:`${config.FROM_USERNAME}`,
            subject:body.asunto,
            text
        };
        nodemailer.send(mailOptions).then(result=>{
            res.status(200).json({
                status:true,
                info:'enviado'
            })
        }).catch(err=>{
            res.send({
                status:false,
                error:err
            })
        })
    })
}

module.exports = contactoApi;
