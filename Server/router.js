
const express = require("express");
const router = express.Router();

const {fetchTemp} = require('./controllers/Temperature/temp');
var mqtt = require("mqtt");
let client  = mqtt.connect("mqtt://nguyenha25012002:aio_rrpY96Qm12VPRHkNJOuCd39HQ9IL@io.adafruit.com",1883);
router.get("/getTemp", (req, res) => {
  fetchTemp((err, data) => {
    if (err) {
      console.log(err);
      res.status(500).send("Error");
    } else {
      console.log(data);
      res.json(data);
    }
  },client);
});
router.get("/getHumi", (req, res) => {
  fetchHumi((err, data) => {
    if (err) {
      console.log(err);
      res.status(500).send("Error");
    } else {
      console.log(data);
      res.json(data);
    }
  },client);
});

module.exports = router;
