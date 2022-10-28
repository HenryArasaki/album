const { Router } = require("express");

const PagesController = require("../controllers/PagesController");
const ensureAuthenticated = require("../middlewares/ensureAuthenticated")


const pagesRoutes = Router();

pagesRoutes.use(ensureAuthenticated)

const pagesController = new PagesController();

pagesRoutes.post("/", pagesController.create);
pagesRoutes.get("/:id", pagesController.show);
pagesRoutes.delete("/:id", pagesController.delete);

module.exports = pagesRoutes;
