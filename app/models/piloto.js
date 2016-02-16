var mongoose = require('mongoose');

module.exports = function() {
    var schema = mongoose.Schema({
        nomeCompleto: {
            type: String,
            required: true
        }
    });

    return mongoose.model('Piloto', schema);
}
