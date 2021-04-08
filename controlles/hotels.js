const Hotel = require('../model/Hotel');

// @desc   get All Hotels
// url(get)     /api/v1/hotels
// Type    Public
exports.getHotels = (req, res, next) => {



  res.send({ success: true, msg: "Hotel Fetch SuccessFully!" }).json();
};

// @desc   add Hotels
// url(post)     /api/v1/hotels
// Type    Public
exports.addHotels = (req, res, next) => {
  

  const hotel = Hotel.create(req.body);

  console.log('data',hotel);

  res.send({ success: true, msg: "Hotel Added SuccessFully!" }).json();
};;

// @desc   fetch Single Hotels
// url(get)     /api/v1/hotels/:id
// Type    Public
exports.getHotel = (req, res, next) => {
  res
    .send({ success: true, msg: `Single Hotel Fetch By ${req.params.id}` })
    .json();
};

// @desc    update Hotels
// url(put)     /api/v1/hotels/:id
// Type    Public
exports.updateHotel = (req, res, next) => {
  res.send({ success: true, msg: `Update Hotel ${req.params.id}` }).json();
};

// @desc    update Hotels
// url(delete)     /api/v1/hotels/:id
// Type    Public
exports.deleteHotel = (req, res, next) => {
  res.send({ success: true, msg: `Delete Hotel ofId ${req.params.id}` }).json();
};
