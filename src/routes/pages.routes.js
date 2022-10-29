const { Router } = require("express");
const multer = require("multer")
const uploadConfig = require('../configs/upload')

const PagesController = require("../controllers/PagesController");
const ensureAuthenticated = require("../middlewares/ensureAuthenticated")

const upload = multer(uploadConfig.MULTER)
const pagesRoutes = Router();

pagesRoutes.use(ensureAuthenticated)

const pagesController = new PagesController();

pagesRoutes.post("/", upload.single("photo"), pagesController.create);
// pagesRoutes.post("/", photosController.create, pagesController.create);
pagesRoutes.get("/:id", pagesController.show);
pagesRoutes.delete("/:id", pagesController.delete);

module.exports = pagesRoutes;
