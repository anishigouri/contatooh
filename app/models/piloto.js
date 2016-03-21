var mongoose = require('mongoose');

module.exports = function() {
    var schema = mongoose.Schema({
        imagemCapacete: {
            type: String,
            required: true
        },
        imagemPiloto: {
            type: String,
            required: true
        },
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

    return mongoose.model('Piloto', schema);
}
