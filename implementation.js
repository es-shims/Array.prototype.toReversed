'use strict';

var callBound = require('call-bind/callBound');
var $slice = callBound('Array.prototype.slice');
var $reverse = callBound('Array.prototype.reverse');

module.exports = function toReversed() {
	return $reverse($slice(this));
};
