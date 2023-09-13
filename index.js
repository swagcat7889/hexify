'use strict';
const process = require('node:process');

process.stdin.on('data', async (chunk) => {
	process.stderr.write(`${chunk.toString('hex')}`);
});

process.stdin.on('close', async () => {
	process.stderr.write('\n');
});
