const BarriosService = require('../services/BarrioService');

exports.getAll = async(req,res)=>{
    const barriosService = new BarriosService();
    try {
        const barrios = await barriosService.getAll();
        res.status(200).json({
            ok:true,
            barrios
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
    const barriosService = new BarriosService();
    try {
        const {id} = req.params;
        const barrio = await barriosService.getOne(id);
        res.status(200).json({
            ok:true,
            barrio
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

exports.findByLocalidad = async (req,res)=>{
    const barriosService = new BarriosService();
    try {
        const {idLocalidad} = req.params;
        const barrio = await barriosService.getByLocalidad(idLocalidad);
        res.status(200).json({
            ok:true,
            barrio
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
    const barriosService = new BarriosService();
    try {
        const {body} = req;
        const createBarrio = await barriosService.create(body);
        res.status(200).json({
            ok:true,
            info:createBarrio
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
    const barriosService = new BarriosService();
    try {
        const {body,params:{id}} = req;
        const updateBarrio = await barriosService.update(body,id);
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
    const barriosService = new BarriosService();
    try {
        const {params:{id}} = req;
        const deleteBarrio = await barriosService.delete(id);
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