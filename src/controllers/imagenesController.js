const CloudStorage = require('../services/CloudStorage');
const ImagenesService = require('../services/ImagenesService');

exports.agregar = async (req,res)=>{
    const cs = new CloudStorage();
    const imagenesService = new ImagenesService();
    const { idCasa } = req.body;
    try {
        const link = await cs.upload(req.file);
        const imagenSubida = await imagenesService.agregarImagen(idCasa,link,true);
        res.status(200).send({
            ok:true,
            msg:'Imagen subida',
            info:imagenSubida
        })
    } catch (error) {
        console.log(error);
        res.status(500).json({
            ok:false,
            msg:error.message,
            info:{
                error
            }
        })
    }
}

exports.agregarVarias = async (req,res)=>{
    const cs = new CloudStorage();
    const imagenesService = new ImagenesService();
    const { idCasa } = req.body;
    const {files} = req;
    try {
        for (let index = 0; index < files.length; index++) {
            const link = await cs.upload(files[index]);
            const subida = await imagenesService.agregarImagen(idCasa,link,false);
            console.log('subido');   
        }
        res.status(200).json({
            ok:true,
            msg:'Todas las imagenes cargadas'
        })
    } catch (error) {
        console.log(error);
        res.status(500).json({
            ok:false,
            msg:error.message,
            info:{
                error
            }
        })
    }
}

exports.modificarImagen = async(req,res)=>{
    const { id } = req.body;
    const cs = new CloudStorage();
    const imagenesService = new ImagenesService();
    const {file} = req;
    if(req.file){
        try {
            cs.upload(file).then(async link=>{
                const update = await imagenesService.modificarImagen(link,id);
                res.status(200).json({
                    ok:true,
                    msg:'Imagen modificada',
                    info:update
                })
            }).catch(err=>{
                console.log(err);
                res.status(500).json({
                    ok:false,
                    msg:error.message,
                    info:err
                })
            })
        } catch (error) {
            console.log(error);
            res.status(500).json({
                ok:false,
                msg:error.message,
                info:{
                    error
                }
            })
        }
    }
}

exports.eliminarImagen = async(req,res)=>{
    const {name} = req.query;
    const { id } = req.params;
    const cs = new CloudStorage();
    const imagenesService = new ImagenesService();
    cs.delete(name).then(async()=>{
        try {
            const del = await imagenesService.eliminarImagen(id);
            res.status(200).json({
                ok:true,
                msg:'Imagen eliminada',
                info:del
            })
        } catch (error) {
            res.status(500).json({
                ok:false,
                msg:error.message,
                info:{error}
            })
        }
    }).catch(err=>{
        console.log(err);
        res.status(500).json({
            ok:false,
            msg:err.message,
            info:{err}
        })
    })
}

exports.getAll = async(req,res)=>{
    const imagenesService = new ImagenesService();
    try {
        let imagenes;
        if(req.params.id){
            imagenes = await imagenesService.getByIdCasa(req.params.id);
        }else{
            imagenes = await imagenesService.getAll();
        }
        return res.status(200).json({
            ok:true,
            imagenes
        })
    } catch (error) {
        console.log(error);
        res.status(500).json({
            ok:false,
            msg:error.message,
            info:{error}
        }) 
    }
}

exports.getByIdCasa = async(req,res)=>{
    const imagenesService = new ImagenesService();
    try {
        const {id} = req.params;
        const imagenes = await imagenesService.getByIdCasa(id);
        return res.status(200).json({
            ok:true,
            imagenes
        })
    } catch (error) {
        console.log(error);
        res.status(500).json({
            ok:false,
            msg:error.message,
            info:{error}
        }) 
    }
}
