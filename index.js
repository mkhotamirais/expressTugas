const express = require("express");
const pages = require("./pages");
const expressLayouts = require("express-ejs-layouts");
const app = express();

app.set("view engine", "ejs");
app.use(expressLayouts);

app.use(pages);

app.listen(3000, () => console.log("App is running..."));
