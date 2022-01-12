const express = require('express');
const router = express.Router();
const OsmMapController = require('./controllers/OsmMapController');

router.get('/:minLong/:minLat/:maxLong/:maxLat', OsmMapController.get);

module.exports = router;
