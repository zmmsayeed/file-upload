const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const userSchema = new Schema({
    email: String,
    password: String,
    firstName: String,
    lastName: String,
    avatar: String
})

// const userModel = mongoose.model('user', userSchema);
// export default userModel;

module.exports =  mongoose.model('User', userSchema)