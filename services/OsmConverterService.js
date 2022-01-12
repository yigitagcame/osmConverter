const OsmConverterService = {};

OsmConverterService.toGeoJson = function(osm) {
  const osmtogeojson = require('osmtogeojson');

  try {
    return osmtogeojson(osm);
  } catch {
    return false;
  }
};

module.exports = OsmConverterService;
