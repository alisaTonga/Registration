const {Schema, model} = require('mongoose')

const TokenScheme = new Schema({
    user: {type: Schema.Types.ObjectId, ref: 'User'},
    refreshToken: {type: String, required: true},
})
module.exports = model('Token', TokenScheme);