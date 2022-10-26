const knex = require("../database/knex");

class PagesController {
  async create(request, response) {
    const { title,description,date} = request.body;
    const { album_id } = request.params;

    await knex("pages").insert({
      album_id,
      title,
      description,
      date
    });

    response.json();
  }

  async show(req,res){
    const {id} = req.params

    const album = await knex("pages").where({id}).first()

    return res.json(album)
  }
}

module.exports = PagesController;
