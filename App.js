const app = require("express")();
const weatherRoute = require("./routes/weather");
const port = process.env.PORT || 3000;

app.use((req, res, next) => {
  console.log(`${req.path} urline ${req.method} istek atılıyor...`);
  next();
});

app.use("/weather", weatherRoute);

app.get("/weather/:name?", (req, res, next) => {
  res.send({
    message: `Welcome ${req.params.name || ""}`
  });
});

app.get("*", (req, res) => {
  res.sendStatus(404);
});

app.listen(port, () => {
  console.log(`localhost:${port} -> üzerinden apiye ulaşabilirsiniz !!! `);
});
