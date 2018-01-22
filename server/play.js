const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost:27017/UsersData');

const users = mongoose.model('users',{
  email: {
    type: String,
    required: true,
    trim: true,
    minlength: 1
  }
});

// const newUser = new users({email: 'anshugoyal.ubs@gmail.com'});

const newUser = new users({email: '              '});
newUser.save().then((doc) => {
  console.log(doc);
}, (e) => {
  console.log('Unable to save the new user', e);
}
);
