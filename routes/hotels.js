const express = require("express");

const {
  getHotel,
  getHotels,
  addHotels,
  updateHotel,
  deleteHotel,
} = require("../controlles/hotels");
const router = express.Router();

router.route("/").get(getHotels).post(addHotels);
router.route("/:id").get(getHotel).put(updateHotel).delete(deleteHotel);

module.exports = router;
