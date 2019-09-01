const express = require("express");
const router = express.Router();
const request = require("request");

const sendRequest = (path, res) => {
  request(
    `https://api.weatherbit.io/v2.0/current?city=${path}&key=e5908d73d226497e9c8cc70d970e2f6a`,
    (error, response, body) => {
      if (error) {
        res.send(error);
        return;
      }
      if (response.statusCode === 204) {
        res.send("Wrong city or country");
        return;
      }
      res.send(JSON.parse(response.body));
    }
  );
};

router.get("/:city?", (req, res) => {
  const path = req.path.toUpperCase();
  sendRequest(path, res);
});

router.get("/:city?,:country?", (req, res) => {
  const path = req.path.toUpperCase();
  sendRequest(path, res);
});

module.exports = router;
