// nhận tin nhắn từ chủ đề và trả về dữ liệu dưới dạng JSON
var mqtt = require("mqtt");
const fetchTemp =(callback,client)=>{
    // let client  = mqtt.connect("mqtt://nguyenha25012002:aio_rrpY96Qm12VPRHkNJOuCd39HQ9IL@io.adafruit.com",1883);
    client.on('connect', () => {
        client.subscribe("nguyenha25012002/feeds/temperature");
        console.log('connected');
    });
    client.on('message', function (topic, message) {
        console.log({ data: message.toString() });
        const data = { data: message.toString() };
        // client.end();
        callback(null, data);
    });
    client.on('reconnect', () => {
        client.subscribe("nguyenha25012002/feeds/humidity");
        console.log('reconnected');
    });

    client.on('error', (err) => console.log('error', err));

}
module.exports = { fetchTemp };