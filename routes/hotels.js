const express = require("express");
const router = express.Router();

router.get("/", (req, res) => {
  res.send({ success: true, msg: "Hotel Fetch SuccessFully!" }).json();
});

router.post("/", (req, res) => {
  res.send({ success: true, msg: "Hotel Added SuccessFully!" }).json();
});

router.get("/:id", (req, res) => {
  res
    .send({ success: true, msg: `Single Hotel Fetch By ${req.params.id}` })
    .json();
});

router.put("/:id", (req, res) => {
  res.send({ success: true, msg: `Update Hotel ${req.params.id}` }).json();
});

router.delete("/:id", (req, res) => {
  res.send({ success: true, msg: `Delete Hotel ofId ${req.params.id}` }).json();
});

module.exports = router;
