const express = require('express');
const ContactoService = require('../services/Contacto');

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
}

module.exports = contactoApi;