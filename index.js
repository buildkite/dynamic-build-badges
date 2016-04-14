var http = require('http');
var url = require('url');
var shields = require('./shields');
var buildkiteApi = require('./buildkite-api')(process.env.BUILDKITE_API_KEY);

var server = http.createServer(function(request, response){
  if (request.url == '/') {
    response.end("Use the following markdown in your Readme:\n" +
                 '![](//' + request.headers.host + '/my-org/my-pipeline/my-meta-data)');
  } else {
    badgeUrl(request, function(url) {
      response.writeHead(302, { 'Location': url });
      response.end('');
    })
  }
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

  var badgeUrlOptions = {};
  if (options.style) badgeUrlOptions.style = options.style;
  if (options.logo) badgeUrlOptions.logo = options.logo;
  if (options.logoWidth) badgeUrlOptions.logoWidth = options.logoWidth;

  buildkiteApi.fetchBuild(orgSlug, pipelineSlug, branch, state, function(err, build) {
    if (err) {
      callback(shields.url(label, String(err), 'red', badgeUrlOptions));
    } else {
      var metadataValue = build.meta_data[metadataField] || "missing";
      callback(shields.url(label, metadataValue, colorForBuild(build, options), badgeUrlOptions));
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