var Fs = require('fs');

var add = function (out, dir) {
  Fs.readdirSync(dir).forEach(function(name) {
    var fullName = dir + '/' + name;
    if (Fs.statSync(fullName).isDirectory()) {
      add((out[name] = out[name] || {}), fullName);
    } else if (name.match(/\.js$/)) {
      if (name === 'xwiki.js') { return; }
      var reqPath = fullName.replace(/\.js$/, '').replace(__dirname, '.');
      out[name.replace(/\.js$/, '')] = require(reqPath);
    }
  });
};
add(module.exports, __dirname);
