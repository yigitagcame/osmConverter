const HttpRequestService = require('../../services/HttpRequestService');

test('a successful http get request', async function() {
  const [responseStatus, responseBody] = await HttpRequestService.get('https://google.com');

  expect(responseStatus).toBe(200);
  expect(responseBody).toBeDefined();
});

test('a successful http get request to non exist page', async function() {
  const [responseStatus, responseBody] = await HttpRequestService.get('https://www.google.com/brokenpath');

  expect(responseStatus).toBe(404);
  expect(responseBody).toBeDefined();
});

test('an unsuccessful http get request handled', async function() {
  const [responseStatus, responseBody] = await HttpRequestService.get('https://www.');

  expect(responseStatus).toBe(503);
  expect(responseBody).toEqual('Service Unavailable!');
});
