const {Router} = require("express")

const usersRoutes = require("./users.routes")
const albumsRoutes = require("./albums.routes")
const pagesRoutes = require("./pages.routes")


const routes = Router()

routes.use("/users",usersRoutes)
routes.use("/albums",albumsRoutes)
routes.use("/pages",pagesRoutes)

module.exports = routes