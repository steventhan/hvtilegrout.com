const express = require("express");
const app = express();

const PORT = process.env.PORT || 3001;

app.use(express.static("./build"));

app.get("*", (req, res) => {
  res.sendFile("index.html", {root: "./build"});
});


app.listen(3001, () => console.log(`Server started on port ${PORT}`));
