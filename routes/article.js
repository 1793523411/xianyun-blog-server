var express = require("express");
var router = express.Router();
var axios = require("axios");

router.post("/add", (req, res) => {
  console.log(req.body);
  axios
    .post("http://openapi.xianyun.site/xianyun-blog/blog/add", req.body, {
      headers: {
        Token: req.headers.token,
        "Content-Type": "application/json",
      },
    })
    .then((result) => {
      console.log(result.data);
      res.json(result.data);
    });
});

router.get("/getList/all", (req, res) => {
  axios
    .post(
      "http://openapi.xianyun.site/xianyun-blog/blog/list",
      {},
      {
        headers: {
          Token: req.headers.token,
          "Content-Type": "application/json",
        },
      }
    )
    .then((result) => {
      console.log(result.data);
      res.json(result.data);
    });
});

router.post("/del", (req, res) => {
  axios
    .get(
      "http://openapi.xianyun.site/xianyun-blog/blog/delete/" + req.body.id,
      {
        headers: {
          Token: req.headers.token,
          "Content-Type": "application/json",
        },
      }
    )
    .then((result) => {
      console.log(result.data);
      res.json(result.data);
    });
});

router.post("/getById", (req, res) => {
  axios
    .post(
    //   "http://openapi.xianyun.site/xianyun-blog/blog/list",
      "http://openapi.xianyun.site/xianyun-blog/blog/view/user1882632/article/details/随机编号",
      {
        id: req.body.id,
      },
      {
        headers: {
          Token: req.headers.token,
          "Content-Type": "application/json",
        },
      }
    )
    .then((result) => {
      console.log(result.data);
      res.json(result.data);
    });
});


module.exports = router;
