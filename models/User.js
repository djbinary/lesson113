const mongoose = require('mongoose');
const {Schema} = mongoose;
//This is the same as const Schema = mongoose.userSchema;

// mongoose requires setting the parameters for the collection. So we define them here
const userSchema = new Schema ({
  googleId: String,
  credits: {type: Number, default:0},
    userEmail: String,
  userName: String
});

//saving the schema into mongoDB in users collection - Creating a model Class:
mongoose.model('users', userSchema);
