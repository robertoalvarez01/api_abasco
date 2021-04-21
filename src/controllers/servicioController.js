const ServicioService = require('../services/ServicioService');

exports.getAll = async(req,res)=>{
    const servicioService = new ServicioService();
    try {
        const servicios = await servicioService.getAll();
        res.status(200).json({
            ok:true,
            servicios
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
    const servicioService = new ServicioService();
    try {
        const {id} = req.params;
        const servicio = await servicioService.getOne(id);
        res.status(200).json({
            ok:true,
            servicio
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
    const servicioService = new ServicioService();
    try {
        const {body} = req;
        const createServicio = await servicioService.create(body);
        res.status(200).json({
            ok:true,
            info:createServicio
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
    const servicioService = new ServicioService();
    try {
        const {body} = req;
        const updateServicio = await servicioService.update(body);
        res.status(200).json({
            ok:true,
            info:updateServicio
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
    const servicioService = new ServicioService();
    try {
        const {params:{id}} = req;
        const deleteServicio = await servicioService.delete(id);
        res.status(200).json({
            ok:true,
            info:deleteServicio
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