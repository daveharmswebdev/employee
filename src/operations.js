'use strict';

var Employee = require('../src/employee');

var Operations = function(first, last, responsibility) {
	this.title = 'operations';
	this.firstName = first;
	this.lastName = last;
	this.responsibility = responsibility;
};
Operations.prototype = new Employee();
module.exports = Operations;