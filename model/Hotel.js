const mongoose = require("mongoose");

const HotelSchema = new mongoose.Schema({
  name: {
    type: String,
    require: [true, "Please Add Name"],
    unique: false,
    maxlength: [50, "Please add Max length of name"],
  },
  description: {
    type: String,
    require: [true, "Please add description"],
  },
  slug: String,
  gstNumber: String,

  //   localtion: {
  //     // Geolocation
  //     type: {
  //       points: [String],
  //     },
  //     coordinates: {
  //       type: [number],
  //       require: false,
  //       index: "2dsphere",
  //     },
  //   },
  address: {
    type: String,
    require: [true, "Please add address"],
  },
  hotel_type: {
    type: String,
    require: [true, "Please add Hotel_type"],
  },
  averageCost: String,
  averageRating: String,
});

module.exports = mongoose.model("Hotel", HotelSchema);
