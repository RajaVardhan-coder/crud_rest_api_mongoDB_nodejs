const mongoose = require('mongoose')


const User = mongoose.Schema({
    username : {
        type: String,
        required: true
    }
})

module.exports = mongoose.model('user',User)