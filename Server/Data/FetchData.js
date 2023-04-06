import {connect} from 'mqtt/dist/mqtt';

const FetchData= ()=>{
    let temp,humidity,lightInt='';
    let feed =  'nguyenha25012002/feeds/temperature';
    let client = connect('mqtt://io.adafruit.com',{
    username: "nguyenha25012002",
    password: "aio_cSrM59tpae7B3sQktwiYdKGYxSqb",
    });

    client.on('connect', () => {
    // sub đúng kênh để nhận dữ liệu
    client.subscribe('nguyenha25012002/feeds/temperature');
        console.log('há há ');


    });

    client.on('reconnect', () => {
        client.subscribe('nguyenha25012002/feeds/temperature');
        console.log('reconnected ');

    });

    client.on('error', (err) => console.log('error', err));

    client.on('offline', () => connect = false);

    client.on('close', () => connect = false);

    client.on('message', (topic, message) => {
    console.log(`Received message: ${message.toString()}`);
    });

    return [temp,lightInt,humidity]
}