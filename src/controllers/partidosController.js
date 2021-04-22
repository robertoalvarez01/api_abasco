const PartidosService = require('../services/PartidosService');

exports.getAll = async(req,res)=>{
    const partidosService = new PartidosService();
    try {
        const partidos = await partidosService.get();
        res.status(200).json({
            ok:true,
            partidos
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

exports.findById = async (req,res)=>{
    const partidosService = new PartidosService();
    try {
        const {id} = req.params;
        const partido = await partidosService.getOne(id);
        res.status(200).json({
            ok:true,
            partido
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
    const partidosService = new PartidosService();
    try {
        const {body} = req;
        const createPartido = await partidosService.create(body);
        res.status(200).json({
            ok:true,
            info:createPartido
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
    const partidosService = new PartidosService();
    try {
        const {body,params:{id}} = req;
        const updatePartido = await partidosService.update(body,id);
        res.status(200).json({
            ok:true,
            info:updatePartido
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
    const partidosService = new PartidosService();
    try {
        const {params:{id}} = req;
        const deletePartido = await partidosService.delete(id);
        res.status(200).json({
            ok:true,
            info:deletePartido
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