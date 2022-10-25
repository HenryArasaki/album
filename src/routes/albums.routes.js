const { Router } = require("express");
const AlbumController = require("../controllers/AlbumController");

const albumsRoutes = Router();

const albumsController = new AlbumController();

albumsRoutes.post("/:user_id", albumsController.create);

module.exports = albumsRoutes;
