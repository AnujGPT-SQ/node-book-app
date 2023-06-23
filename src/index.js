const express = require("express");
const mongoose = require("mongoose");
const route = require("./routes/route");
const app = express();
const port = 3000;
app.use(express.json());
mongoose
  .connect(
    "mongodb+srv://anujgupta:6N7ZwCdBKlMdXJxj@cluster0.b5g40mr.mongodb.net/",
    {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    }
  )

  .then(() => console.log("mongoDB is connected Done"))
  .catch((err) => console.log(err));

app.use("/", route);
app.listen(port, () => {
  console.log("server app listening on port " + port);
});
