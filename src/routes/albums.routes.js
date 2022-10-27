const { Router } = require("express");
const AlbumController = require("../controllers/AlbumController");
const ensureAuthenticated = require("../middlewares/ensureAuthenticated")

const albumsRoutes = Router();

albumsRoutes.use(ensureAuthenticated)

const albumsController = new AlbumController();

albumsRoutes.get("/", albumsController.index);
albumsRoutes.post("/", albumsController.create);
albumsRoutes.get("/:id", albumsController.show);
albumsRoutes.delete("/:id", albumsController.delete);

module.exports = albumsRoutes;
