const mongoose = require('mongoose');

const deviceSchema = new mongoose.Schema({
  // Define device schema fields
});

module.exports = mongoose.model('Device', deviceSchema);
