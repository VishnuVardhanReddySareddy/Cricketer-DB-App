const Cricketer = require("../models/cricketer");

exports.createCricketer = async (req, res) => {
  try {
    const cricketer = await Cricketer.create(req.body);
    res.json(cricketer);
  } catch (error) {
    res.status(500).json({ error: "Failed to create cricketer" });
  }
};

exports.getCricketers = async (req, res) => {
  try {
    const cricketers = await Cricketer.findAll();
    res.json(cricketers);
  } catch (error) {
    res.status(500).json({ error: "Failed to fetch cricketers" });
  }
};

exports.getCricketerById = async (req, res) => {
  try {
    const cricketer = await Cricketer.findByPk(req.params.id);
    if (cricketer) {
      res.json(cricketer);
    } else {
      res.status(404).json({ error: "Cricketer not found" });
    }
  } catch (error) {
    res.status(500).json({ error: "Failed to fetch cricketer" });
  }
};

exports.updateCricketer = async (req, res) => {
  try {
    const cricketer = await Cricketer.findByPk(req.params.id);
    if (cricketer) {
      await cricketer.update(req.body);
      res.json(cricketer);
    } else {
      res.status(404).json({ error: "Cricketer not found" });
    }
  } catch (error) {
    res.status(500).json({ error: "Failed to update cricketer" });
  }
};

exports.getCricketerByName = async (req, res) => {
  try {
    const cricketer = await Cricketer.findOne({
      where: { name: req.params.name },
    });
    if (cricketer) {
      res.json(cricketer);
    } else {
      res.status(404).json({ error: "Cricketer not found" });
    }
  } catch (error) {
    res.status(500).json({ error: "Failed to fetch cricketer" });
  }
};
