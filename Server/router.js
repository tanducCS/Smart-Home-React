
const express = require("express");
const router = express.Router();

const {fetchTemp} = require('./controllers/Temperature/temp');

router.get("/getTemp", (req, res) => {
  fetchTemp((err, data) => {
    if (err) {
      console.log(err);
      res.status(500).send("Error");
    } else {
      console.log(data);
      res.json(data);
    }
  });
});

module.exports = router;
