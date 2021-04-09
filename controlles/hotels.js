const Hotel = require('../model/Hotel');

// @desc     get All Hotels
// url(get)  /api/v1/hotels
// Type      Public
exports.getHotels = async (req, res, next) => {  
  try {
    const hotels = await Hotel.find();
    console.log(hotels)
    res.status(200).json({ success : true, data : hotels })
  } catch (err) {
    res.status(400).json({ success : false })
  }
};

// @desc      add Hotels
// url(post)  /api/v1/hotels
// Type       Public
exports.addHotels = async(req, res, next) => {
  try {
    const hotel = await Hotel.create(req.body);

    res.status(201).json({ success : true, data : hotel })
  } catch (err) {
    res.status(400).json({ success : false })
  }
};

// @desc       fetch Single Hotels
// url(get)    /api/v1/hotels/:id
// Type        Public
exports.getHotel = async (req, res, next) => {
  try{
    const hotel = await Hotel.findById(req.params.id);

    res.status(200).json({ success : true, data : hotel })
  } catch (err) {
    res.status(400).json({ success : false })
  }
};

// @desc       update Hotels
// url(put)    /api/v1/hotels/:id
// Type        Public
exports.updateHotel = async (req, res, next) => {
  try {
    const hotel = await Hotel.findByIdAndUpdate(req.params.id, req.body, {
      new : true,
      runValidators : true
    })

    res.status(200).json({ success : true, data : hotel })
  } catch(err) {
    res.status(400).json({ success : false })
  }
  res.send({ success: true, msg: `Update Hotel ${req.params.id}` }).json();
};

// @desc       update Hotels
// url(delete) /api/v1/hotels/:id
// Type        Public
exports.deleteHotel = async (req, res, next) => {
  try {
    const hotel = await Hotel.findByIdAndRemove(req.params.id)
    res.status(200).json({ success : true, data : {} })

  } catch (err) {
    res.status(400).json({ success : false })
  }
};
