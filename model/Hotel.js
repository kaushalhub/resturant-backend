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

  location: {
    // GeoJSON Point
    type: {
      type: String,
      enum: ["Point"],
    },
    coordinates: {
      type: [Number],
      required: false,
      index: "2dsphere",
    },
    formattedAddress: String,
    street: String,
    city: String,
    state: String,
    zipcode: String,
    country: String,
  },

  website: {
    type: String,
    match: [
      /https?:\/\/(www\.)?[-a-zA-Z0-9@:%._\+~#=]{1,256}\.[a-zA-Z0-9()]{1,6}\b([-a-zA-Z0-9()@:%_\+.~#?&//=]*)/,
      "Please use a valid URL with HTTP or HTTPS",
    ],
  },

  phone: {
    type: String,
    maxlength: [20, "Phone number can not be longer than 20 characters"],
  },

  email: {
    type: String,
    match: [
      /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/,
      "Please add a valid email",
    ],
  },

  isVerified: {
    type: Boolean,
    default: false,
  },

  address: {
    type: String,
    require: [true, "Please add address"],
  },
  hotel_type: {
    type: String,
    require: [true, "Please add Hotel_type"],
  },
  averageCost: Number,
  averageRating: {
    type: Number,
    min: [1, "Rating must be at least 1"],
    max: [10, "Rating must can not be more than 10"],
  },
});

module.exports = mongoose.model("Hotel", HotelSchema);
