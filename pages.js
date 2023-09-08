const express = require("express");
const pages = express.Router();

pages.get("/", (req, res) => {
  res.render("home", { layout: "rootLayout", title: "home" });
});
pages.get("/about", (req, res) => {
  res.render("about", { layout: "rootLayout", title: "about" });
});
pages.get("/dataSiswa", (req, res) => {
  const dataSiswa = [
    {
      nama: "ahmad",
      umur: 20,
    },
    {
      nama: "abdul",
      umur: 21,
    },
    {
      nama: "siti",
      umur: 21,
    },
  ];
  res.render("dataSiswa", { layout: "rootLayout", title: "about", dataSiswa });
});
pages.get("/saya", (req, res) => {
  res.send({
    nama: "saya",
    umur: 20,
    asal: "jakarta",
  });
});

module.exports = pages;
