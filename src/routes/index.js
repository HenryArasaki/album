const {Router} = require("express")

const usersRoutes = require("./users.routes")
const albumsRoutes = require("./albums.routes")


const routes = Router()

routes.use("/users",usersRoutes)
routes.use("/albums",albumsRoutes)

module.exports = routes