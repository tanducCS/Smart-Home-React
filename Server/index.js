const express = require('express');
const app = express();
const cors = require("cors");
app.use(cors());

const server = require('http').Server(app);
const io = require('socket.io')(server, {
    cors: {
      origin: "http://localhost:3001",
      methods: ["GET", "POST"]
    }
  });
  
  
const mqtt = require('./controllers/controller');


// Start the server and listen for connections
server.listen(3000, () => {
  console.log('Server started on port 3000');
});

// Update the temperature every 30 seconds and send it to the client
// setInterval(() => {
    mqtt.subscribe('nguyenha25012002/feeds/temperature', function(topic, message) {
        console.log(`Received message on topic ${topic}: ${message.toString()}`);
        if(topic=="nguyenha25012002/feeds/temperature"){
          var temperature= message.toString();
          io.emit('temperatureUpdate', temperature);
        }
        else if(topic=="nguyenha25012002/feeds/humidity"){
          var humidity= message.toString();
          io.emit('humidityUpdate', humidity);
        }
    });
// }, 30000);

const router = require("./router");

app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.use("/api", router);

// const PORT =  3000;
