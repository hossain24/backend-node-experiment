const router = require('express').Router();
const Video = require('./../models/video');

router.route('/').get((req, res) => {
    Video.find()
        .then(videos => res.json(videos))
        .catch(err => res.status(400).json('Error: ' + err));
});

module.exports = router;