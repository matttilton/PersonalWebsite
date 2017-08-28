var express = require('express');
var router = express.Router();
var fs = require('fs');
var knex = require('../lib/db.js')
var deasync = require('deasync');
/* GET home page. */
router.get('/', function (req, res, next) {
  if (req.isAuthenticated()) {
    res.render('nodeflix');
  } else {
    res.redirect('/');
  }
});

router.get('/shows', function (req, res, next) {
  if (req.isAuthenticated()) {
    getShows(
      function (x) {
        res.send(x);
      }
    )
  } else {
    res.status(401);
    res.send();
  }
});

router.get('/movies', function (req, res, next) {
  if (req.isAuthenticated()) {
    getMovies(
      function (x) {
        res.send(x);
      }
    )
  } else {
    res.status(401);
    res.send();
  }
});

router.get('/:thing', function (req, res, next) {
  // if (req.isAuthenticated()) {
  knex.select().from('shows').where({URL: req.params.thing}).then(function (shows) {
    knex.select().from('seasons').where({Show: shows[0].ID}).then(function (seasons) {
      var episodessorted = []
      var seasonsprocessed = 0;
      for (var each in seasons) {
        episodessorted.push([])
        var lock = false;
        deasync.loopWhile(function() {return lock;});
        lock = true;
        knex.select().from('episodes').where({show: shows[0].ID, Season: seasons[each].Number}).then(function (episodes) {
          for (var every in episodes) {
            episodessorted[parseInt(episodes[every].Season) - 1].push(episodes[every]);
          }
          lock = false;
          seasonsprocessed = seasonsprocessed + 1;
          if (seasonsprocessed == seasons.length) {
            res.render('seasonsandepisodes', {sortedepisodes: episodessorted});
          }
        })
      }
    });
  });
  // res.render()
  // } else {
  //   res.redirect('/');
  // }
});

var getShows = function (callback) {
  knex.select('*').from('shows').then(function (x) {
    callback(x);
  });
}

var getMovies = function (callback) {
  knex.select('*').from('movies').then(function (x) {
    callback(x);
  })
}

module.exports = router;