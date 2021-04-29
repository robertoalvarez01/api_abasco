const LocalidadService = require('../services/LocalidadService');

exports.getAll = async(req,res)=>{
    const localidadService = new LocalidadService();
    try {
        const localidades = await localidadService.getAll();
        res.status(200).json({
            ok:true,
            localidades
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
    const localidadService = new LocalidadService();
    try {
        const {id} = req.params;
        const localidad = await localidadService.getOne(id);
        res.status(200).json({
            ok:true,
            localidad
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
    const localidadService = new LocalidadService();
    try {
        const {idLocalidad} = req.query;
        const barrio = await localidadService.getByLocalidad(idLocalidad);
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
    const localidadService = new LocalidadService();
    try {
        const {body} = req;
        const createLocalidad = await localidadService.create(body);
        res.status(200).json({
            ok:true,
            info:createLocalidad
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
    const localidadService = new LocalidadService();
    try {
        const {body,params:{id}} = req;
        const updateLocalidad = await localidadService.update(body,id);
        res.status(200).json({
            ok:true,
            info:updateLocalidad
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
    const localidadService = new LocalidadService();
    try {
        const {params:{id}} = req;
        const deleteLocalidad = await localidadService.delete(id);
        res.status(200).json({
            ok:true,
            info:deleteLocalidad
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