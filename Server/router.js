
const express = require("express");
const router = express.Router();

const mqtt = require('./controllers/controller');

router.post('/turnLightOn', (req, res) => {
  const data = req.body.active;
  mqtt.publish("nguyenha25012002/feeds/ligh-on-off", data);
  res.send('Data received');
});
router.post('/turnLightOff', (req, res) => {
  const data = req.body.active;
  mqtt.publish("nguyenha25012002/feeds/ligh-on-off", data);
  res.send('Data received');
});
router.post('/turnFanOn', (req, res) => {
  const data = req.body.active;
  mqtt.publish("nguyenha25012002/feeds/fan-speed", data);
  res.send('Data received');
});
router.post('/turnFanOff', (req, res) => {
  const data = req.body.active;
  mqtt.publish("nguyenha25012002/feeds/fan-speed", data);
  res.send('Data received');
});
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
// router.post("/turnLed", (req, res) => {
//   mqtt.publish("nguyenha25012002/feeds/ligh-on-off", message);
// });
module.exports = router;