const mongoose = require('mongoose');

const schema = new mongoose.Schema(
  {
    id: { type: Number, required: true },
    first_name: { type: String, required: true, min: 2, max: 50 },
    last_name: { type: String, required: true, min: 2, max: 50 },
    email: { type: String, required: true },
    gender: { type: String, required: true, min: 4, max: 6 },
    ip_address: { type: String, required: true, min: 4, max: 12 },
  },
  { versionKey: false }
);

module.exports = mongoose.model('User', schema);
