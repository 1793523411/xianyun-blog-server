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
    var file = req.file;
    console.log(file);
    if (!file || file.length === 0) {
    } else {
      var num = parseInt(Math.random() * 100000);
      let oldname = file.path;
      let newname = `${file.destination}/${num}-${file.originalname}`;
      fs.rename(oldname, newname, (err) => {
        if (err) {
          let response = {
            message: "fail",
            err: err,
          };
          res.json("error");
        }else{
          console.log(`./tmp/${num}-${file.originalname}`)
          client.put(`avator/${num}-${file.originalname}`, `./tmp/${num}-${file.originalname}`).then(result => {
            console.log(result)
            res.json({
              url:result.url
            })
          })
        }
      })
    }
  }
);

router.get('/test',(req,res,next) =>{
  res.json('111')
})

module.exports = router;
