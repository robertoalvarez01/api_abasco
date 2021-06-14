const CiudadService = require('../services/CiudadesService');

exports.getAll = async(req,res)=>{
    const ciudadService = new CiudadService();
    try {
        const localidades = await ciudadService.getAll();
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
    const ciudadService = new CiudadService();
    try {
        const {id} = req.params;
        const localidad = await ciudadService.getOne(id);
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
    const ciudadService = new CiudadService();
    try {
        const {idLocalidad} = req.query;
        const barrio = await ciudadService.getByLocalidad(idLocalidad);
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
    const ciudadService = new CiudadService();
    try {
        const {body} = req;
        const createLocalidad = await ciudadService.create(body);
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
    const ciudadService = new CiudadService();
    try {
        const {body,params:{id}} = req;
        const updateLocalidad = await ciudadService.update(body,id);
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
    const ciudadService = new CiudadService();
    try {
        const {params:{id}} = req;
        const deleteLocalidad = await ciudadService.delete(id);
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