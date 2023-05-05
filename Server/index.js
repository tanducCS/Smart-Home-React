const express = require('express');
const app = express();
const cors = require("cors");
app.use(cors());

const server = require('http').Server(app);
const io = require('socket.io')(server, {
    cors: {
      // origin: "https://smart-home-react-pi.vercel.app",
      origin: "http://localhost:3000",
      methods: ["GET", "POST"]
    }
  });
  
  
const mqtt = require('./controllers/controller');

const PORT = process.env.PORT || 3000;
// Start the server and listen for connections
server.listen(PORT, () => {
  console.log('Server started on port 3000');
});

// Update the temperature every 30 seconds and send it to the client
mqtt.subscribe(function(topic, message) {
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

const router = require("./router");

app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.use("/api", router);


