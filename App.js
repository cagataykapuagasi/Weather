const app = require("express")();
const weatherRoute = require("./routes/weather");
const port = process.env.PORT || 3000;

app.use((req, res, next) => {
  console.log(`path: ${req.path} method: ${req.method}`);
  next();
});

app.use("/weather", weatherRoute);

app.get("*", (req, res) => {
  res.sendStatus(404);
});

app.listen(port, () => {
  console.log(`Port: ${port}`);
});
