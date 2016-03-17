var mongoose = require('mongoose');

module.exports = function() {
    var schema = mongoose.Schema({
        posicao: {
            type: String,
            required: true
        },
        pontos: {
            type: String,
            required: true
        }
    });

    return mongoose.model('Pontuacao', schema);
}
