const { response } = require("express");
const knex = require("../database/knex");

class AlbumsController {
  async create(request, response) {
    const { name,isPublic} = request.body;
    const  user_id  = request.user.id;

    await knex("albums").insert({
      user_id,
      name,
      isPublic
    });

    return response.json();
  }

  async show(req,res){
    const {id} = req.params

    const album = await knex("albums").where({id}).first()
    const pages = await knex("pages").where({album_id:id}).orderBy("date")

    return res.json({
      ...album,
      pages
    })
  }

  async delete(req,res){
    const {id} = req.params

    await knex("albums").where({id}).delete()
    return res.json()
  }

  async index(req,res){
    const {name} = req.query
    const user_id = req.user.id

    const albums = await knex("albums").where({user_id}).orderBy("id")

    return res.json(albums)
  }
}

module.exports = AlbumsController;
