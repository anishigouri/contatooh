var express = require('express');
var load = require('express-load');
var bodyParser = require('body-parser');
var cookieParser = require('cookie-parser');
var session = require('express-session');
var passport = require('passport');

//Usado para segurança da aplicação, ocultar header e etc...
var helmet = require('helmet');

module.exports = function() {
    var app = express();

    //configuração de ambiente
    app.set('port', 3000);

    //middleware
    app.use(express.static('./public'));
    app.set('view engine', 'ejs');
    app.set('views', './app/views');

    //permite acessar o os dados da requisição através de req.body
    app.use(bodyParser.json({limit: '50mb'}));
    app.use(bodyParser.urlencoded({extended: true, limit: '50mb'}));

    //Informamos qual verbo pretendemos usar(GET, POST...)
    app.use(require('method-override')());

    app.use(cookieParser());
    app.use(session(
        { secret: 'homem avestruz',
          resave: true,
          saveUninitialized: true
        }
    ));

    app.use(passport.initialize());
    app.use(passport.session());

    app.use(helmet());

    app.use(helmet.xframe());

    app.use(helmet.xssFilter());

    app.use(helmet.nosniff());

    //Esconde a tecnologia usada na aplicação
    app.disable('x-powered-by');

    //Gera um informação falsa sobre a aplicação
    app.use(helmet.hidePoweredBy({setTo: 'PHP 5.5.14'}));

    //home(app);
    load('models', {cwd: 'app'})
        .then('controllers')
        .then('routes/auth.js')
        .then('routes')
        .into(app);

    app.get('*', function(req, res) {
        res.status(404).render('404');
    });

    return app;

}
