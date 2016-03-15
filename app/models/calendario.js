var mongoose = require('mongoose');

module.exports = function() {
    var schema = mongoose.Schema({
        dataHora: {
            type: Date,
            required: true
        },
        pista: {
            type: mongoose.Schema.ObjectId,
            required: true,
            ref: 'Pista'
        }
    });

    return mongoose.model('Calendario', schema);
}
