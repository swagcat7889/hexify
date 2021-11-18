'use strict'
const readline = require('readline');
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
  terminal: false
});
const arg = process.argv[2];

if (arg == '--encode' || arg == '-e') {
  rl.on('line', function(line){
      process.stdout.write(Buffer.from(line, 'utf-8').toString('hex'));
      process.stdout.write('\n');
  });
} else if (arg == '--decode' || arg == '-d') {
    rl.on('line', function(line){
      process.stdout.write(Buffer.from(line, 'hex').toString());
      process.stdout.write('\n');
  });
} else {
  rl.on('line', function(line){
    process.stdout.write(Buffer.from(line, 'utf-8').toString('hex'));
    process.stdout.write('\n');
  });
}
