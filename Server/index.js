import { connect } from 'mqtt';
const client = connect('mqtt://io.adafruit.com', {
  username: 'nguyenha25012002',
  password: 'aio_XxPs137wiW254ueUJcTGfUFKxKdl',
});
feed="nguyenha25012002/feeds/temperature"
client.on('connect', () => {
    console.log("connected")
    // sub đúng kênh để nhận dữ liệu
        client.subscribe(feed);
        console.log('connected ');
    
    
});

client.on('reconnect', () => {
         client.subscribe(feed);
        console.log('reconnected ');

});

client.on('error', (err) => console.log('error', err));

client.on('offline', () => connect = false);

client.on('close', () => connect = false);

client.on('message', (topic, message) => {
    console.log(message.toString('utf8'));
});