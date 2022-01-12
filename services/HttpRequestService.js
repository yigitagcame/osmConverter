const HttpRequestService = {};
const axios = require('axios');

HttpRequestService.get = async function(url, params = null) {
  return await axios.get(url, {params: params}).then(function(res) {
    return [res.status, res.data];
  }).catch(function(error) {
    if (error.response) {
      return [error.response.status, error.response.data];
    } else {
      return [503, 'Service Unavailable!'];
    }
  });
};

module.exports = HttpRequestService;
