const mqtt = require('mqtt');
const client = mqtt.connect("mqtt://nguyenha25012002:aio_CCth75LtwRyPq805FYOBibkBtHu2@io.adafruit.com",1883);
client.on('connect', function () {
  console.log('Connected to MQTT broker');
});

module.exports = {
  publish: function (topic, message) {
    client.publish(topic, message);
  },
  subscribe: function (topic, callback) {
    client.subscribe(topic);
    client.on('message', function (topic, message) {
        console.log({ message: message.toString() });
      callback(topic, message);
    });
  }
};
