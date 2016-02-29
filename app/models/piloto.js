var mongoose = require('mongoose');

module.exports = function() {
    var schema = mongoose.Schema({
        nomeCompleto: {
            type: String,
            required: true
        },
        dataNascimento: {
            type: Date,
            required: true
        },
        cpf: {
            type: String,
            required: true
        },
        naturalidade: {
            type: String,
            required: true
        },
        nacionalidade: {
            type: String,
            required: true
        },
        rg: {
            type: String,
            required: true
        },
        dataEmissao: {
            type: Date,
            required: true
        },
        orgaoExpedidor: {
            type: String,
            required: true
        },
        altura: {
            type: String,
            required: true
        },
        peso: {
            type: String,
            required: true
        },
        tipoSanguineo: {
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
            required: false
        },
        endereco: {
            type: String,
            required: false
        },
        numero: {
            type: String,
            required: false
        },
        uf: {
            type: String,
            required: false
        },
        municipio: {
            type: String,
            required: false
        },
        bairro: {
            type: String,
            required: false
        }
    });

    return mongoose.model('Piloto', schema);
}
