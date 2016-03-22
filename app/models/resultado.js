var mongoose = require('mongoose');

module.exports = function() {
    var schema = mongoose.Schema({
        calendario: {
            type: mongoose.Schema.ObjectId,
            required: true,
            ref: 'Calendario'
        },
        pilotos: [{
            voltaRapida: {
                type: String,
                required: true
            },
            piloto: {
                type: mongoose.Schema.ObjectId,
                required: true,
                ref: 'Piloto'
            }
        }]
    });

    return mongoose.model('Resultado', schema);
}
