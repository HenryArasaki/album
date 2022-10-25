const knex = require("../database/knex");

class AlbumsController {
  async create(request, response) {
    const { name,isPublic} = request.body;
    const { user_id } = request.params;

    const album_id = await knex("albums").insert({
      user_id,
      name,
      isPublic
    });

    response.json();
  }
}

module.exports = AlbumsController;
