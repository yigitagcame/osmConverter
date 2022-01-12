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

  let [httpStatus, httpResponse] = await HttpRequestService.get('https://www.openstreetmap.org/api/0.6/map', {bbox: coordinates.join(',')});

  if (httpStatus != 200) return res.status(httpStatus).json(httpResponse);

  let geoJson = OsmConverterService.toGeoJson(httpResponse);

  if (!geoJson) {
    httpStatus = 400;
    geoJson = 'Invalid Osm Data!';
  }

  return res.status(httpStatus).json(geoJson);
};

module.exports = OsmMapController;
