const express = require("express");
const router = express.Router();
const request = require("request");

router.get("/:name?", (req, res) => {
  request(
    `https://api.weatherbit.io/v2.0/current?city=${req.path},tr&key=e5908d73d226497e9c8cc70d970e2f6a`,
    (error, response, body) => {
      if (error) {
        res.send(error);
        return;
      }
      if (response.statusCode === 204) {
        res.send("Please send city param");
        return;
      }
      res.send(response);
    }
  );
});

module.exports = router;
