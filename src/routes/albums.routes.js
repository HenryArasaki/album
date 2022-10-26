const { Router } = require("express");
const AlbumController = require("../controllers/AlbumController");

const albumsRoutes = Router();

const albumsController = new AlbumController();

albumsRoutes.post("/:user_id", albumsController.create);
albumsRoutes.get("/:id", albumsController.show);
albumsRoutes.delete("/:id", albumsController.delete);

module.exports = albumsRoutes;
