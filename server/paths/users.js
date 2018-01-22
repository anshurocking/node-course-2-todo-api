const mongoose = require('mongoose');

const users = mongoose.model('users',{
  email: {
    type: String,
    required: true,
    trim: true,
    minlength: 1
  }
});

module.exports = {users};
