var fuego = require('..');
var test = require('tape');

test('responds to version', function(t) {
  var gtp = fuego();
  gtp.send('version', function(error, response) {
    gtp.exit();
    t.notOk(error);
    t.ok(response);
    t.equal(response, "1.1.SVN");
    t.end();
  });
});

test('lists commands', function(t) {
  var gtp = fuego();
  gtp.send('list_commands', function(error, response) {
    gtp.exit();
    t.notOk(error);
    t.ok(response);
    t.notEqual(response.indexOf("all_legal"), -1);
    t.notEqual(response.indexOf("version"), -1);
    t.end();
  });
});
