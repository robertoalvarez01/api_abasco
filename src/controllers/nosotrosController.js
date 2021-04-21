const QuienesSomosService = require('../services/NosotrosService.js');

exports.getInfo = async (req,res)=>{
    const quienesSomosService = new QuienesSomosService();
    try {
        const data = await quienesSomosService.get();
        res.status(200).json({
            status: true,
            data: data,
            info: "Se ejecuto con exito la peticion",
        });
    } catch (error) {
        res.status(500).json({
            ok:false,
            msg:error.message,
            info:{
                error
            }
        })
    }
}

exports.modificarInfo = async (req,res)=>{
    const quienesSomosService = new QuienesSomosService();
    try {
        const { contenido } = req.body;
        const data = await quienesSomosService.update(contenido);
        res.status(200).json({
            status: data,
            info: "Se ejecuto con exito la peticion",
        });
    } catch (error) {
        res.status(500).json({
            ok:false,
            msg:error.message,
            info:{
                error
            }
        })
    }
}