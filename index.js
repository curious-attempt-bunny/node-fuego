var spawn = require('child_process').spawn;
var path  = require('path');

module.exports = function() {
  var gtp = spawn(path.join(__dirname, 'fuego-r1675', 'fuegomain', 'fuego'));
  var callback = null;

  gtp.stdout.on('data', function (data) {
    var response = /= ((?:.|\n)*)/g.exec(data);
    if (callback && response) {
      callback(null, response[1].trim());
    } else {
      console.error("Unexpected stdout: "+data);
    }
  });

  gtp.stderr.on('data', function (data) {
    console.log('stderr: ' + data);
  });

  gtp.on('close', function (code) {
    console.log('child process exited with code ' + code);
  }); 

  return {
    send: function(command, next) {
      callback = next;
      gtp.stdin.write(command+"\n");
    },
  
    exit: function(command, next) {
      gtp.stdin.end();
      if (next) {
        next();
      }
    }
  };
};
