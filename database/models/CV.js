const mongoose = require('mongoose');

const schema = new mongoose.Schema(
  {
    firstName: { type: String, required: true, min: 2, max: 50 },
    lastName: { type: String, required: true, min: 2, max: 50 },
    email: { type: String, required: true },
    nationality: { type: String, required: true, min: 2, max: 25 },
    in5years: { type: String, required: true, min: 100, max: 1000 },
    gender: { type: String, required: true, enum: ['male', 'female'] },
    checkboxes: { type: Array, required: true },
    workExp: {
      type: String,
      required: true,
      enum: ['0-1', '1-3', '3-5', '5+'],
    },
    salary: {
      from: { type: String, required: true, min: 2, max: 4 },
      to: { type: String, required: true, min: 2, max: 4 },
    },
  },
  { versionKey: false }
);

module.exports = mongoose.model('CV', schema);
