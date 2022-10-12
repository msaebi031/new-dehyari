// server.js
const next = require("next");
const express = require("express");
const multer = require("multer");
const fs = require("fs");
const server = express();
server.use(express.json()); // for json
server.use(express.urlencoded({ extended: true })); // for form data

require("dotenv").config();

const dev = process.env.NODE_ENV !== "production";
const hostname = "localhost";
const port = 3000;
const app = next({ dev, hostname, port });

const handle = app.getRequestHandler();

var storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, "public/uploads");
  },
  filename: function (req, file, cb) {
    cb(null, file.originalname);
  },
});

var upload = multer({ storage: storage }).any();

/******************************************************************/
const sequelize = require("./server/utils/database");
const News = require("./server/models/news");
const Login = require("./server/models/login");
const Alert = require("./server/models/alert");
/******************************************************************/

app.prepare().then(async () => {
  sequelize.sync({ News, Login, Alert }).catch();

  server.post("/upload", (req, res) => {
    upload(req, res, function (err) {
      console.log(res.name);
      fs.renameSync(
        `public/uploads/${req.files[0].originalname}`,
        `public/uploads/${req.body.name}.png`
      );
      res.json({ result: true, name: req.body.name });
    });
  });

  server.post("/rename", (req, res) => {
    fs.renameSync(
      `public/uploads/${req.body.name}.png`,
      `public/uploads/${req.body.newName}.png`
    );
    res.json({ result: true });
  });

  server.post("/delete", (req, res) => {
    fs.unlinkSync(`public/uploads/${req.body.name}.png`);
    res.json({ result: true });
  });

  //   server.all("/api/:path*", function (req, res) {
  //     if (req.body?.token === "YvAbguq8tdjdmyNwYWmdtBocPxKFpQr4") {
  //       return handle(req, res);
  //     } else {
  //       return res.json({ result: false });
  //     }
  //   });

  server.all("*", (req, res) => {
    return handle(req, res);
  });

  server.listen(port, (err) => {
    if (err) throw err;
    console.log(`> Ready on http://localhost:${port}`);
  });
});
