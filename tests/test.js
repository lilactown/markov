"use strict";

let Markov = require('../markov.js'),
	assert = require('assert');

(function () {
	console.log('Testing single word seed... ');
	let markov = new Markov.Chain(1);

	markov.Build('asdf');
	assert.strictEqual(markov.Generate(1), 'asdf');
})();

(function () {
	console.log('Testing small seed text...');
	let markov = new Markov.Chain();
	let contents = 'This is just a simple test. This is another very simple test. There are so many simple tests used in this test that I\'m not sure it\'s even that simple anymore.';
	let length = contents.split(' ').length;

	markov.Build(contents)
	assert(markov.Generate(length).length > 0);
})();

console.log('All assertions passed.');