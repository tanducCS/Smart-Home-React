const express = require("express");
const cors = require('cors')
const app = express()
 
app.use(cors())

const router = require("./router");

app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.use("/api", router);

const PORT =  3000;

app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
