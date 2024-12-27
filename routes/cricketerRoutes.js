const express = require("express");
const cricketerController = require("../controllers/cricketerController");

const router = express.Router();

router.post("/cricketers", cricketerController.createCricketer);
router.get("/cricketers", cricketerController.getCricketers);
router.get("/cricketers/:id", cricketerController.getCricketerById);
router.put("/cricketers/:id", cricketerController.updateCricketer);
router.get("/cricketers/name/:name", cricketerController.getCricketerByName);

module.exports = router;
