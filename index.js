var readline = require('readline');
var rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
  terminal: false
});

rl.on('line', function(line){
    process.stdout.write(Buffer.from(line, 'utf-8').toString('hex'));
});
