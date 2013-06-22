var exec = require('child_process').exec;

console.error("Building... (this will take a few minutes)");
exec('cd fuego-r1675 && ./configure && make',
  function (error, stdout, stderr) {
    console.log('stdout: ' + stdout);
    console.log('stderr: ' + stderr);
    if (error !== null) {
      console.log('exec error: ' + error);
      throw error;
    }
});
