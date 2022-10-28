const { Router } = require("express");

const PagesController = require("../controllers/PagesController");
const PhotosController = require("../controllers/PhotosController");
const ensureAuthenticated = require("../middlewares/ensureAuthenticated")


const pagesRoutes = Router();

pagesRoutes.use(ensureAuthenticated)

const pagesController = new PagesController();
const photosController = new PhotosController();

pagesRoutes.post("/", pagesController.create);
// pagesRoutes.post("/", photosController.create, pagesController.create);
pagesRoutes.get("/:id", pagesController.show);
pagesRoutes.delete("/:id", pagesController.delete);

module.exports = pagesRoutes;
