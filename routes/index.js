var express = require("express");
var router = express.Router();
var axios = require("axios");

/* GET home page. */
router.post("/login", function (req, res, next) {
  // res.render('index', { title: 'Express' });
  // console.log(req.body);
  console.log(req.body.ip);
  console.log("用户ip"+req.ip);
  // console.log(req.headers["user-agent"]);
  let data = {
    userName: req.body.userName,
    email: req.body.email,
    mobile: req.body.mobile,
    // eslint-disable-next-line @iceworks/best-practices/no-secret-info
    password: req.body.password,
    loginType: req.body.loginType,
  };
  axios
    .post(
      "http://openapi.xianyun.site/xianyun-consumer/api/consumer/user/login/check",
      data,
      {
        headers: {
          "User-Agent": req.headers["user-agent"],
          "ip":req.body.ip
        },
      }
    )
    .then((result) => {
      console.log(result.data);
      res.json(result.data);
    });
});

router.post("/register", (req, res) => {
  const data = req.body;

  axios
    .post(
      "http://openapi.xianyun.site/xianyun-consumer/api/consumer/user/register",
      data
    )
    .then((result) => {
      console.log(result);
      res.json(result.data);
    });
});

router.post("/register/smtp", (req, res) => {
  console.log(req.body);
  const data = req.body;
  axios
    .post(
      "http://openapi.xianyun.site/xianyun-consumer/api/consumer/user/smtp",
      data
    )
    .then((result) => {
      console.log(result.data);
      res.json(result.data);
    });
});
router.post("/register/sms", (req, res) => {
  console.log(req.body);
  const data = req.body;
  axios
    .post(
      "http://openapi.xianyun.site/xianyun-consumer/api/consumer/user/sms",
      data
    )
    .then((result) => {
      console.log(result.data);
      res.json(result.data);
    });
});

router.post("/register/smtp/check", (req, res) => {
  console.log(req.body);
  const data = req.body;
  axios
    .post(
      "http://openapi.xianyun.site/xianyun-consumer/api/consumer/user/smtp/check",
      data
    )
    .then((result) => {
      res.json(result.data);
    });
});
router.post("/register/sms/check", (req, res) => {
  console.log(req.body);
  const data = req.body;
  axios
    .post(
      "http://openapi.xianyun.site/xianyun-consumer/api/consumer/user/sms/check",
      data
    )
    .then((result) => {
      res.json(result.data);
    });
});

router.get("/user/info", (req, res) => {
  console.log(req.headers.token);
  axios
    .post(
      "http://openapi.xianyun.site/xianyun-consumer/api/consumer/user/info",
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

router.post("/user/info/update", (req, res) => {
  console.log(req.body);
  axios
    .post(
      "http://openapi.xianyun.site/xianyun-consumer/api/consumer/user/info/update",
      req.body,
      {
        headers: {
          Token: req.headers.token,
          "Content-Type": "application/json",
        },
      }
    )
    .then((result) => {
      res.json(result.data);
    });
});

module.exports = router;
