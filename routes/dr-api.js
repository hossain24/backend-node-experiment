const router = require('express').Router();
const fetch = require('node-fetch');

router.route('/').get((req, res, next) => {
    const url = 'http://www.dr.dk/mu/Schedule/2016-03-12%40dr.dk/mas/whatson/channel/DR2?merge=True';
    fetch(url)
        .then(res => res.json())
        .then(json => {
            res.json(json);
        });
});

module.exports = router;