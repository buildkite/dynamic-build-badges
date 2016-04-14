var http = require('http');
var url = require('url');
var shields = require('./shields');
var buildkiteApi = require('./buildkite-api')(process.env.BUILDKITE_API_KEY);

var server = http.createServer(function(request, response){
  badgeUrl(request, function(url) {
    response.writeHead(302, { 'Location': url });
    response.end('');
  })
});

server.listen(process.env.PORT || 8080, function() {
  console.log("Server listening on: http://localhost:%s", this.address().port);
});

function badgeUrl(request, callback) {
  var parsedUrl = url.parse(request.url, true)
  var pathMatch = parsedUrl.pathname.match(/^\/(.+)\/(.+)\/(.+)$/);

  if (pathMatch) {
    fetchBadgeUrl(pathMatch[1], pathMatch[2], pathMatch[3], parsedUrl.query, callback);
  } else {
    callback(shields.url('Badge syntax error', 'Path invalid', 'red'));
  }
}

function fetchBadgeUrl(orgSlug, pipelineSlug, metadataField, options, callback) {
  var label = options.label || metadataField;
  var branch = options.branch || 'master';
  var state = options.state || 'passed';

  buildkiteApi.fetchBuild(orgSlug, pipelineSlug, branch, state, function(err, build) {
    if (err) {
      callback(shields.url(label, err, 'red'));
    } else {
      var metadataValue = build.meta_data[metadataField] || "missing";
      callback(shields.url(label, metadataValue, colorForBuild(build, options)));
    }
  });
}

function colorForBuild(build, options) {
  // TODO: Add smarts to this function to calculate red -> green if a specific
  // option is passed in
  if (options.color) {
    return options.color;
  } else {
    return 'green';
  }
}