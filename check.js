var fs = require('fs');
var path = require('path');

var repo = path.dirname(require.resolve('small-test-repo/package.json'));
fs.createReadStream(path.join(repo, 'EXAMPLE')).pipe(process.stdout);
