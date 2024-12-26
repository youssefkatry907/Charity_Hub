const mongoose = require('mongoose');

const charitySchema = new mongoose.Schema({
  name: { type: String, },
  description: { type: String },
  goal: { type: Number, },
  raised: { type: Number, default: 0 },
  createdAt: { type: Date, default: Date.now() },
});

const Charity = mongoose.model('Charity', charitySchema);
  
module.exports = Charity;