
const express = require("express");
const router = express.Router();

const mqtt = require('./controllers/controller');


router.get("/getTemp", (req, res) => {
  mqtt.subscribe('nguyenha25012002/feeds/temperature', function(topic, message) {
    console.log(`Received message on topic ${topic}: ${message.toString()}`);
    res.json({ data: message.toString() });
  });
});
router.get("/getHumi", (req, res) => {
  mqtt.subscribe('nguyenha25012002/feeds/huminity', function(topic, message) {
    console.log(`Received message on topic ${topic}: ${message.toString()}`);
  });
});

module.exports = router;
