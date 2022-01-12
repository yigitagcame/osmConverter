const OsmMapController = {};
const HttpRequestService = require('../services/HttpRequestService');
const OsmConverterService = require('../services/OsmConverterService');

OsmMapController.get = async function(req, res) {
  const coordinates = [
    req.params.minLong,
    req.params.minLat,
    req.params.maxLong,
    req.params.maxLat,
  ];

  const [osmStatus, osmResponse] = await HttpRequestService.get('https://www.openstreetmap.org/api/0.6/map', {bbox: coordinates.join(',')});

  if (osmStatus != 200) return res.send(osmResponse);

  const geoJson = OsmConverterService.toGeoJson(osmResponse);

  if (!geoJson) geoJson = 'Invalid Osm Data!';

  return res.send(geoJson);
};

module.exports = OsmMapController;
