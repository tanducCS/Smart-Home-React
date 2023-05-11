

var mqtt = require("mqtt");
var username = "nguyenha25012002";
var key = "aio_FJSl11XytfrvjJaJuRA6zhGbkP9G";
var feedName = 'ligh_on_off';

let client = mqtt.connect("mqtt://nguyenha25012002:aio_MEVv184VPv9Sjenti1EM1WKmXU9y@io.adafruit.com", 1883);



client.on('connect', function () {
    console.log('Connected to Adafruit');
    // Publish message to the feed
    client.publish("nguyenha25012002/feeds/ligh-on-off", '0');
});

client.on('error', (err) => console.log('error', err));