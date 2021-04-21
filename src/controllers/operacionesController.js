const OperacionesService = require('../services/OperacionesService');

exports.getAll = async(req,res)=>{
    const operacionesService = new OperacionesService();
    try {
        const operaciones = await operacionesService.getAll();
        res.status(200).json({
            ok:true,
            operaciones
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
    const operacionesService = new OperacionesService();
    try {
        const {id} = req.params;
        const operacion = await operacionesService.getOne(id);
        res.status(200).json({
            ok:true,
            operacion
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
    const operacionesService = new OperacionesService();
    try {
        const {body} = req;
        const createOperacion = await operacionesService.create(body);
        res.status(200).json({
            ok:true,
            info:createOperacion
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
    const operacionesService = new OperacionesService();
    try {
        const {body,params:{id}} = req;
        const updateOperacion = await operacionesService.update(body,id);
        res.status(200).json({
            ok:true,
            info:updateOperacion
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
    const operacionesService = new OperacionesService();
    try {
        const {params:{id}} = req;
        const deleteOperacion = await operacionesService.delete(id);
        res.status(200).json({
            ok:true,
            info:deleteOperacion
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