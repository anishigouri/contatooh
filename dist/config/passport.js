var passport = require('passport');
var GitHubStrategy = require('passport-github').Strategy;
var mongoose = require('mongoose');

module.exports = function() {

    var Usuario = mongoose.model('Usuario');

    passport.use(new GitHubStrategy({
        clientID: 'cb5322f7c7319ad028c6',
        clientSecret: 'f5e7a0a09f0a26c18de2a79c9ea199467af1d27b',
        callbackURL: 'http://localhost:3000/auth/github/callback'
    }, function(accessToken, refreshToken, profile, done) {
        Usuario.findOrCreate(
            {"login": profile.username},
            {"nome": profile.username},
            function(erro, usuario) {
                if(erro) {
                    console.log(erro);
                    return done(erro);
                }
                return done(null, usuario);
            }
        );
    }));

    passport.serializeUser(function(usuario, done) {
        done(null, usuario._id);
    });

    passport.deserializeUser(function(id, done) {
        Usuario.findById(id).exec()
        .then(function(usuario) {
            done(null, usuario);
        });
    })
}
