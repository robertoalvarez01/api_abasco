const express = require('express');
const PartidosService = require('../services/Partidos');
const password = "ZAQ12wsx";

function partidosApi(app) {
    const router = express.Router();
    app.use('/partidos',router);
    const partidosService = new PartidosService();

    router.get('/',async(req,res,next)=>{
        try {
            const partidos = await partidosService.get();
            res.status(200).json({
                data:partidos,
                info:'Partidos listados'
            })
        } catch (error) {
            next(error)
        }
    });

    router.get('/:id',async(req,res,next)=>{
        try {
            const {id} = req.params;
            const partido = await partidosService.getOne(id);
            res.status(200).json({
                data:partido,
                info:'Partido listado'
            })
        } catch (error) {
            next(error)
        }
    });

    router.post('/',async(req,res,next)=>{
        const {partido,pass} = req.body;
        if(pass !== password) return res.status(403).send({info:'Contraseña incorrecta'});
        try {
            const response = await partidosService.create(partido);
            res.status(200).json({
                info:'Partido creado',
                response
            })
        } catch (error) {
            next(error);
        }
    })

    router.put('/:id',async(req,res,next)=>{
        const {id} = req.params;
        const {partido,pass} = req.body;
        if(pass !== password) return res.status(403).send({info:'Contraseña incorrecta'});
        try {
            const response = await partidosService.update(partido,id);
            res.status(200).json({
                info:'Partido Modificado',
                response
            })
        } catch (error) {
            next(error);
        }
    });

    router.delete('/:id/:pass',async(req,res,next)=>{
        const {pass,id} = req.params;
        if(pass !== password) return res.status(403).send({info:'Contraseña incorrecta'});
        try {
            const response = await partidosService.delete(id);
            res.status(200).json({
                info:response
            })
        } catch (error) {
            next(error)
        }
    });

}

module.exports = partidosApi;