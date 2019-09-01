const express = require("express");
const router = express.Router();
const request = require("request");

router.get("/:name?,:country?", (req, res) => {
  request(
    `https://api.weatherbit.io/v2.0/current?city=${req.path.toUpperCase()}&key=e5908d73d226497e9c8cc70d970e2f6a`,
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
});

module.exports = router;
