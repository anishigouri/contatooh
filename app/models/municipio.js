var mongoose = require('mongoose');

module.exports = function() {
    var schema = mongoose.Schema({
        uf: {
            type: String,
            required: true
        },
        municipio: {
            type: String,
            required: true
        }
    });

    return mongoose.model('Municipio', schema);
}
