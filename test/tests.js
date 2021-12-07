'use strict';

module.exports = function (toReversed, t) {
	var three = [1, 2, 3];
	var result = toReversed(three);
	t.deepEqual(
		result,
		[3, 2, 1],
		'array is reversed'
	);
	t.notEqual(three, result, 'original array is not returned');
	t.deepEqual(three, [1, 2, 3], 'original array is unchanged');

	three.reverse();
	t.deepEqual(three, result, 'mutated original matches result');

	t.deepEqual(
		toReversed('abc'),
		['c', 'b', 'a'],
		'string reverses to array'
	);
	var halfPoo = '\uD83D';
	var endPoo = '\uDCA9';
	var poo = halfPoo + endPoo;
	t.deepEqual(
		toReversed('a' + poo + 'c'),
		['c', endPoo, halfPoo, 'a'],
		'code point is split as expected'
	);
};
