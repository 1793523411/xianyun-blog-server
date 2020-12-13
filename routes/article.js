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
      {
        queryParams: {
          pageNum: 1,
          pageSize: 2,
        },
      },
      {
        headers: {
          Token: req.headers.token,
          Cookie:"JSESSIONID=E91556F6E8F37C8F388512C6CD54BE0E",
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
  console.log(req.body);
  axios
    .get(
      //   "http://openapi.xianyun.site/xianyun-blog/blog/list",
      `http://openapi.xianyun.site/xianyun-blog/blog/${req.body.url}/article/details/${req.body.uniqueId}`,
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

router.post("/update", (req, res) => {
  console.log(req.body);
  axios
    .post("http://openapi.xianyun.site/xianyun-blog/blog/update", req.body, {
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

router.post("/filter", (req, res) => {
  console.log(req.body);
  axios
    .post("http://openapi.xianyun.site/xianyun-blog/blog/list", req.body, {
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

router.post('/page', (req, res) => {
  console.log(req.body)
  axios.post("http://openapi.xianyun.site/xianyun-blog/blog/list?pageNum=" + req.body.pageNum + "&&pageSize=" + req.body.pageSize, req.body, {
    headers: {
      Token: req.headers.token,
      "Content-Type": "application/json",
    },
  }).then((result) => {
    console.log(result.data)
    res.json(result.data)
  })
})

router.get('/getallTag', (req, res) => {
  axios.get(' http://openapi.xianyun.site/xianyun-blog/blog/view/listTagsAndClass', {
    headers: {
      Token: req.headers.token,
      "Content-Type": "application/json",
      Cookie:"JSESSIONID=E91556F6E8F37C8F388512C6CD54BE0E",
    },
  }).then(result => {
    console.log(result.data)
    res.json(result.data)
  })
})

module.exports = router;
