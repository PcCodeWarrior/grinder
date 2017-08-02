const mongoose = require('mongoose');

//const Schema = mongoose.Schema;  can be destructured as:
const {Schema} = mongoose;

const userSchema = new Schema({
    googleId: String
});

mongoose.model('users', userSchema);


