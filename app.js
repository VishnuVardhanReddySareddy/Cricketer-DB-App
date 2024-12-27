const express = require("express");
const bodyParser = require("body-parser");
const sequelize = require("./config/database");
const cricketerRoutes = require("./routes/cricketerRoutes");
const path = require("path");
// Serve static files

const app = express();
app.use(bodyParser.json());
app.use(express.static(path.join(__dirname, "/")));
app.use("/api", cricketerRoutes);

sequelize
  .sync()
  .then(() => {
    console.log("Database synced");
    app.listen(3000, () => {
      console.log("Server is running on http://localhost:3000");
    });
  })
  .catch((error) => {
    console.error("Failed to sync database:", error);
  });
