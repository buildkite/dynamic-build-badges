var querystring = require('querystring');
var https = require('https');

module.exports = function buildkiteApi(apiKey) {
  function fetchBuild(orgSlug, pipelineSlug, branch, state, callback) {
    var options = {
      protocol: 'https:',
      hostname: 'api.buildkite.com',
      port: 443,
      path: '/v2/organizations/' + orgSlug + '/pipelines/' + pipelineSlug + '/builds?' + querystring.stringify({
        branch: branch,
        state: state,
        per_page: 1
      }),
      headers: {
        'Authorization': 'Bearer ' + apiKey
      }
    };

    https.get(options, function(res) {
      if (res.statusCode == 200) {
        var body = '';
        res.on('data', function(chunk) { body += chunk; });
        res.on('end', function() {
          callback(null, JSON.parse(body)[0]);
        });
        res.resume();
      } else {
        callback(new Error('Buildkite API returned ' + res.statusCode), null);
      }
    }).on('error', function(e) {
      callback(e, null);
    });
  }

  return {
    fetchBuild: fetchBuild
  }
}
