var express = require("express");
const fs = require("fs");
const path = require("path");
var multer = require("multer");
var oss = require("ali-oss");
var router = express.Router();

const scret = require("../scret");

var client = oss(scret);

const UPLOAD_PATH = path.join(__dirname, "../tmp");

/* GET users listing. */
router.post(
  "/upload",
  multer({ dest: `${UPLOAD_PATH}` }).single("pic"),
  function (req, res, next) {
    console.log(UPLOAD_PATH)
    var file = req.body;
    console.log(file);
    res.send("111");
  }
);

module.exports = router;
