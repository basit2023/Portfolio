const express = require("express");
const cors = require("cors");
const dotenv = require("dotenv");
const path = require("path");

//dotenv configuartion
dotenv.config();

//rest object
const app = express();

//midlewares
app.use(cors());
app.use(express.json());

// Set X-Robots-Tag header to allow indexing
app.use((req, res, next) => {
  res.setHeader("X-Robots-Tag", "index, follow, all");
  next();
});

// static files access
app.use(express.static(path.join(__dirname, "./client/build")));

// Explicitly serve sitemap and robots if they are missing from build
app.get("/sitemap.xml", (req, res) => {
  res.sendFile(path.join(__dirname, "./client/public/sitemap.xml"));
});
app.get("/robots.txt", (req, res) => {
  res.sendFile(path.join(__dirname, "./client/public/robots.txt"));
});

//routes
app.use("/api/v1/portfolio", require("./routes/portfolioRoute"));

app.get("*", function (req, res) {
  res.sendFile(path.join(__dirname, "./client/build/index.html"));
});

//port
const PORT = process.env.PORT || 8080;

//listen
app.listen(PORT, () => {
  console.log(`Server Runnning On PORT ${PORT} `);
});