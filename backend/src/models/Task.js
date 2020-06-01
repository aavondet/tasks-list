const mongoose = require('mongoose');
const Schema = mongoose.Schema;

var task = new Schema({
    name: {
        type: String,
        required: true
    },
    user: {
        type: String,
        required: true
    },
    due: {
        type: Date,

    }
},{
    collection: 'Tasks'
});

module.exports = mongoose.model('Task', task);