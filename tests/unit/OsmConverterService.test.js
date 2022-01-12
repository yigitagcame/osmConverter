const OsmConverterService = require('../../services/OsmConverterService');

test('an unsuccessful osm to geojson convert', async function() {
  const geoJson = OsmConverterService.toGeoJson('osm convention extra content');

  expect(geoJson).toBeFalsy();
});

test('a successful osm to geojson convert', async function() {
  const geoJson = OsmConverterService.toGeoJson(osmSample());

  expect(geoJson).toBeTruthy();
});

/**
 * @return {string} Sample OSM data.
 */
function osmSample() {
  return {
    'version': 0.6,
    'generator': 'Overpass API 0.7.57.1 74a55df1',
    'osm3s': {
      'timestamp_osm_base': '2022-01-12T12:36:00Z',
      'copyright': 'The data included in this document is from '+
        'www.openstreetmap.org. The data is made available under ODbL.',
    },
    'elements': [
    ],
  };
}
