const DatoTecnicoService = require('../services/DatoTecnicoService');

exports.getAll = async(req,res)=>{
    const datoTecnicoService = new DatoTecnicoService();
    try {
        const datos = await datoTecnicoService.getAll();
        res.status(200).json({
            ok:true,
            datos
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

exports.create = async (req,res)=>{
    const datoTecnicoService = new DatoTecnicoService();
    try {
        const {body} = req;
        const createDatoTecnico = await datoTecnicoService.create(body);
        res.status(200).json({
            ok:true,
            info:createDatoTecnico
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

exports.update = async (req,res)=>{
    const datoTecnicoService = new DatoTecnicoService();
    try {
        const {body} = req;
        const updateBarrio = await datoTecnicoService.update(body);
        res.status(200).json({
            ok:true,
            info:updateBarrio
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

exports.delete = async (req,res)=>{
    const datoTecnicoService = new DatoTecnicoService();
    try {
        const {params:{id}} = req;
        const deleteBarrio = await datoTecnicoService.delete(id);
        res.status(200).json({
            ok:true,
            info:deleteBarrio
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