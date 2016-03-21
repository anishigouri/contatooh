var mongoose = require('mongoose');

module.exports = function() {
    var schema = mongoose.Schema({
        imagem: {
            type: String,
            required: false
        },
        nome: {
            type: String,
            required: true
        },
        email: {
            type: String,
            required: false
        },
        telefone: {
            type: String,
            required: false
        },
        celular: {
            type: String,
            required: false
        },
        cep: {
            type: String,
            required: true
        },
        endereco: {
            type: String,
            required: true
        },
        numero: {
            type: String,
            required: true
        },
        uf: {
            type: String,
            required: true
        },
        municipio: {
            type: mongoose.Schema.ObjectId,
            required: true,
            ref: 'Municipio'
        },
        bairro: {
            type: String,
            required: true
        }
    });

    return mongoose.model('Pista', schema);
}
