var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var postSchema = new mongoose.Schema({
    created_by: { type: Schema.Types.ObjectId, ref: 'User' },
    created_at: {type: Date, default: Date.now},
    text: String
});

var userSchema = new mongoose.Schema({
    username: String,
    email: { type: 'string', required: true, format: 'email', unique: true},
    password: String, //hash created from password
    created_at: {type: Date, default: Date.now}
});

mongoose.model('Post', postSchema);
mongoose.model('User', userSchema);
