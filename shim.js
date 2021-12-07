'use strict';

var define = require('define-properties');
var getPolyfill = require('./polyfill');

module.exports = function shim() {
	var polyfill = getPolyfill();
	define(
		Array.prototype,
		{ toReversed: polyfill },
		{ toReversed: function () { return Array.prototype.toReversed !== polyfill; } }
	);
	return polyfill;
};
