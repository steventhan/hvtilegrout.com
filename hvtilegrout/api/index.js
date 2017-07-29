const api = require("express").Router();


api.post("/email", () => {
  console.log("post request");
});


module.exports = api;
