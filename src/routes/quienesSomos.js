const express = require('express');
const QuienesSomosService = require('../services/quienesSomos.js');
const path = require('path');

function quienesSomosApi(app) {
    const router = express.Router();
    app.use("/nosotros",router);
    const quienesSomosService = new QuienesSomosService();

    router.get('/',async(req,res,next)=>{
        const data = await quienesSomosService.get();
        res.status(200).json({
            status: true,
            data: data,
            info: "Se ejecuto con exito la peticion",
        });
    });

    router.put("/quienes_somos_modificar",async(req, res) => {
        const { contenido, pass } = req.body;
        const data = await quienesSomosService.update(contenido,pass);
        res.status(200).json({
            status: data,
            info: "Se ejecuto con exito la peticion",
        });
    });
};

module.exports = quienesSomosApi;