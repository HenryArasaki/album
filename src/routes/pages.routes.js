const { Router } = require("express");
const PagesController = require("../controllers/PagesController");

const pagesRoutes = Router();

const pagesController = new PagesController();

pagesRoutes.post("/:album_id", pagesController.create);
pagesRoutes.get("/:id", pagesController.show);

module.exports = pagesRoutes;
