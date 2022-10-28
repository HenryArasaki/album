const {Router} = require("express")

const usersRoutes = require("./users.routes")
const albumsRoutes = require("./albums.routes")
const pagesRoutes = require("./pages.routes")
const photosRoutes = require("./photos.routes")
const sessionsRoutes = require("./sessions.routes")


const routes = Router()

routes.use("/users",usersRoutes)
routes.use("/sessions",sessionsRoutes)
routes.use("/albums",albumsRoutes)
routes.use("/pages",pagesRoutes)
routes.use("/photos",photosRoutes)

module.exports = routes