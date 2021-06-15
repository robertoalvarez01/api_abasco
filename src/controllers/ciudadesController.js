const CiudadService = require('../services/CiudadesService');

exports.getAll = async(req,res)=>{
    const ciudadService = new CiudadService();
    try {
        const ciudades = await ciudadService.getAll();
        res.status(200).json({
            ok:true,
            ciudades
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
        const ciudad = await ciudadService.getOne(id);
        res.status(200).json({
            ok:true,
            ciudad
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
        const createCiudad = await ciudadService.create(body);
        res.status(200).json({
            ok:true,
            info:createCiudad
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
        const updateCiudad = await ciudadService.update(body,id);
        res.status(200).json({
            ok:true,
            info:updateCiudad
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
        const deleteCiudad = await ciudadService.delete(id);
        res.status(200).json({
            ok:true,
            info:deleteCiudad
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