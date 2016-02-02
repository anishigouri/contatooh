var MongoClient = require('mongodb').MongoClient;
var ObjectID = require('mongodb').ObjectID;

var _idProcurado = new ObjectID('56a209f81f576e4f0526f3c6');

MongoClient.connect('mongodb://127.0.0.1:27017/contatooh',
    function(erro, db) {
        if(erro) throw err;
        db.collection('contatos').findOne({_id: _idProcurado},
            function(erro, contato) {
                if(erro) throw erro;
                console.log(contato);
            }
        );
    }
);
