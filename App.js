const app = require("express")();
const weatherRoute = require("./routes/weather");
const port = process.env.PORT || 3000;

app.use((req, res, next) => {
  console.log(`${req.path} path ${req.method} method called`);
  next();
});

app.use("/weather", weatherRoute);

app.get("*", (req, res) => {
  res.sendStatus(404);
});

app.listen(port, () => {
  console.log(`localhost:${port} -> üzerinden apiye ulaşabilirsiniz !!! `);
});
