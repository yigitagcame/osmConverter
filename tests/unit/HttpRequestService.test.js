const HttpRequestService = require('../../services/HttpRequestService');

test('a successful http get request', async function() {
  const getRequest = await HttpRequestService.get('https://google.com');

  expect(getRequest).toBeTruthy();
});
