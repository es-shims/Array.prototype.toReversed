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

	t.test('getters', { skip: !Object.defineProperty }, function (st) {
		var called = [];
		var o = [0, 1, 2];
		Object.defineProperty(o, '0', {
			enumerable: true,
			get: function () {
				called.push(0);
				return 'a';
			}
		});
		Object.defineProperty(o, '1', {
			enumerable: true,
			get: function () {
				called.push(1);
				return 'b';
			}
		});
		Object.defineProperty(o, '2', {
			enumerable: true,
			get: function () {
				called.push(2);
				return 'c';
			}
		});

		st.deepEqual(
			toReversed(o),
			['c', 'b', 'a'],
			'array with getters is reversed as expected'
		);
		st.deepEqual(
			called,
			[2, 1, 0],
			'indexes are retrieved in reverse order'
		);

		st.end();
	});

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
