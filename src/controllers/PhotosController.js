const knex = require("../database/knex");
const DiskStorage = require("../providers/DiskStorage");

class PhotosController {
    async create(req,res){
        const photoFilename = req.file.filename
        console.log(photoFilename)

        const diskStorage = new DiskStorage

        const filename = await diskStorage.saveFile(photoFilename)

        res.json(filename)
    }

    async show(req,res){
        
    }
}

module.exports = PhotosController;
