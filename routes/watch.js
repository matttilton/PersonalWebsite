var express = require('express');
var router = express.Router();
var fs = require('fs');
var knex = require('../lib/db.js');

router.get('/', function (req, res, next) {
    if (req.isAuthenticated()) {
        res.redirect('/Nodeflix');
    } else {
        res.redirect('/');
    }
});

router.get('/movie/:thing', function (req, res, next) {
    if (req.isAuthenticated()) {
        res.render('watchmovie', {src: '/Nodeflix/watch/movie/' + req.params.thing + '/data'});
    } else {
        res.redirect('/');
    }
});

router.get('/episode/:thing', function (req, res, next) {
    if (req.isAuthenticated()) {
        res.render('watchmovie', {src: '/Nodeflix/watch/episode/' + req.params.thing + '/data'});
    } else {
        res.redirect('/');
    }
});

router.get('/movie/:thing/data', function (req, res, next) {
    if (req.isAuthenticated()) {
        knex.select('*').from('movies').where({
            URL: req.params.thing
        }).then(function (x) {
            fs.stat(x[0].Location + '.mp4', function (err, stats) {
                if (err) {
                    if (err.code === 'ENOENT') {
                        // 404 Error if file not found
                        return res.sendStatus(404);
                    }
                    res.end(err);
                }
                var range = req.headers.range;
                if (!range) {
                    console.log(req.headers);
                    // 416 Wrong range
                    return res.sendStatus(416);
                }
                var positions = range.replace(/bytes=/, "").split("-");
                console.log(positions[0]);
                var start = parseInt(positions[0], 10);
                var total = stats.size;
                var end = positions[1] ? parseInt(positions[1], 10) : total - 1;
                var chunksize = (end - start) + 1;

                var maxChunk = 1024 * 1024; // 1MB at a time
                if (chunksize > maxChunk) {
                    end = start + maxChunk - 1;
                    chunksize = (end - start) + 1;
                }

                res.writeHead(206, {
                    "Content-Range": "bytes " + start + "-" + end + "/" + total,
                    "Accept-Ranges": "bytes",
                    "Content-Length": chunksize,
                    "Content-Type": "video/mp4"
                });

                fs.ReadStream(x[0].Location + '.mp4', {
                    start: start,
                    end: end
                }).pipe(res);
            });
        });
    } else {
        res.redirect('/');
    }
});

router.get('/episode/:thing/data', function (req, res, next) {
    if (req.isAuthenticated()) {
        knex.select('*').from('episodes').where({
            URL: req.params.thing
        }).then(function (x) {
            fs.stat(x[0].Location + '.mp4', function (err, stats) {
                if (err) {
                    if (err.code === 'ENOENT') {
                        // 404 Error if file not found
                        return res.sendStatus(404);
                    }
                    res.end(err);
                }
                var range = req.headers.range;
                if (!range) {
                    console.log(req.headers);
                    // 416 Wrong range
                    return res.sendStatus(416);
                }
                var positions = range.replace(/bytes=/, "").split("-");
                console.log(positions[0]);
                var start = parseInt(positions[0], 10);
                var total = stats.size;
                var end = positions[1] ? parseInt(positions[1], 10) : total - 1;
                var chunksize = (end - start) + 1;

                var maxChunk = 1024 * 1024; // 1MB at a time
                if (chunksize > maxChunk) {
                    end = start + maxChunk - 1;
                    chunksize = (end - start) + 1;
                }

                res.writeHead(206, {
                    "Content-Range": "bytes " + start + "-" + end + "/" + total,
                    "Accept-Ranges": "bytes",
                    "Content-Length": chunksize,
                    "Content-Type": "video/mp4"
                });

                fs.ReadStream(x[0].Location + '.mp4', {
                    start: start,
                    end: end
                }).pipe(res);
            });
        });
    } else {
        res.redirect('/');
    }
});

module.exports = router;