const knex = require("../database/knex");

class PagesController {
  async create(request, response) {
    const { title,description,date,album_id,photo} = request.body;
    

    await knex("pages").insert({
      album_id,
      title,
      description,
      date,
      photo
    });

    return response.json();
  }


  async show(req,res){
    const {id} = req.params

    const album = await knex("pages").where({id}).first()

    return res.json(album)
  }

  async delete(req,res){
    const {id} = req.params

    await knex("pages").where({id}).delete()
    return res.json()
  }
}

module.exports = PagesController;
