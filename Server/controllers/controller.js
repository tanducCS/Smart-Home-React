const mqtt = require('mqtt');
const client = mqtt.connect("mqtt://nguyenha25012002:aio_uhYk31bGDcupNrpAdTcaPSKnY8ug@io.adafruit.com",1883);
client.on('connect', function () {
  console.log('Connected to MQTT broker');
});
topic1="nguyenha25012002/feeds/temperature";
topic2="nguyenha25012002/feeds/humidity";
client.subscribe(topic1);
client.subscribe(topic2);
module.exports = {
  publish: function (topic, message) {
    client.publish(topic, message);
  },
  subscribe: function (callback) {
    client.on('message', function (topic, message) {
        // console.log({ message: message.toString() });
      callback(topic, message);
    });
  },

};
