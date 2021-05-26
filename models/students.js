const mongoose = require('mongoose');

let Schema = mongoose.Schema;

let StudentSchema = new Schema({
    first_name: String,
    last_name: String,
    gpa: Number,
    credits: Number,
    major: String
});

module.exports = mongoose.model('Student', StudentSchema);