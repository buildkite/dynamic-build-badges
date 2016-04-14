function paramStr(str) {
  // Escapes the special shields.io characters
  return str.replace('-','--').replace('_','__');
}

function url(label, value, color) {
  return 'https://img.shields.io/badge/' + paramStr(label) + '-' + paramStr(value) + '-' + color + '.svg';
}

module.exports = {
  url: url
};
