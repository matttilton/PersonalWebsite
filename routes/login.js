var express = require('express');
var router = express.Router();
var bcrypt = require('bcrypt');
var passport = require('passport');
var knex = require('../lib/db.js');
var LocalStrategy = require('passport-local').Strategy;
var bcrypt = require('bcrypt');

passport.serializeUser(function (user, done) {
    done(null, user);
});

passport.deserializeUser(function (user, done) {
    done(null, user);
})

passport.use(new LocalStrategy(
    function (username, password, done) {
        var username = username.toLowerCase();
        knex.select().from('users').where({ username: username }).then(function (user) {
            if (!user[0]) {
                return done(null, false, { message: 'Incorrect username or password.' });
            }

            console.log(user);
            bcrypt.compare(password, user[0].Password).then(function (result) {
                if (!result) {
                    // console.log('here');
                    return done(null, false, { message: 'Incorrect username or password.' })
                }
                // console.log('here2');
                return done(null, user[0].Username)
            });
        }).catch(function (err) {
            if (err) { return done(err); };
        });
    }
))

/* GET home page. */
router.get('/', function (req, res, next) {
    res.render('login');
});

router.post('/', passport.authenticate('local'), function (req, res, next) {
    res.redirect('/');
});

router.get('/Logout', function(req, res, next) {
    req.logout();
    res.redirect('/');
})

router.post('/Logout', function(req, res, next) {
    req.logout();
    res.redirect('/');
})

module.exports = router;