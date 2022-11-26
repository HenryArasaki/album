require("dotenv/config")
require("express-async-errors");
const migrationsRun = require("./database/sqlite/migrations");
const AppError = require("./utils/AppError");
const uploadConfig = require("./configs/upload");

const cors = require("cors");

const express = require("express");
const routes = require("./routes");

migrationsRun();

const app = express();
app.use(cors())
app.use(express.json({limit: '25mb'}));

app.use("/photos", express.static(uploadConfig.UPLOADS_FOLDER));

app.use(express.urlencoded({limit: "50mb", extended: true, parameterLimit: 100000}))

app.use(routes);

app.use((error, req, res, next) => {
  if (error instanceof AppError) {
    return res.status(error.statusCode).json({
      status: "error",
      message: error.message,
    });
  }

  console.error(error);

  return res.status(500).json({
    status: "error",
    messagge: "Internal server error",
  });
});

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => console.log(`Server is runnin on Port ${PORT}`));
