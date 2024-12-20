const mongoose = require('mongoose');

const CharitySchema = new mongoose.Schema({
  name: { type: String, required: true },
  description: { type: String },
  goal: { type: Number, required: true },
  raised: { type: Number, default: 0 },
  createdAt: { type: Date, default: Date.now },
});

module.exports = mongoose.model('Charity', CharitySchema);