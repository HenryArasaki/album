const { response } = require("express");
const knex = require("../database/knex");

class PhotosController {
    async create(req,res){
        const user_id = req.user.user.id
        const photoFileName = req.file.filename
    }
}

module.exports = PhotosController;
