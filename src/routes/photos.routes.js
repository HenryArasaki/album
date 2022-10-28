const { Router } = require("express");
const multer = require("multer")
const uploadConfig = require('../configs/upload')

const PhotosController = require("../controllers/PhotosController.js");
const ensureAuthenticated = require("../middlewares/ensureAuthenticated")


const photosRoutes = Router();
const upload = multer(uploadConfig.MULTER)

photosRoutes.use(ensureAuthenticated)

const photosController = new PhotosController();

photosRoutes.post("/", upload.single("photo"), photosController.create);


module.exports = photosRoutes;
