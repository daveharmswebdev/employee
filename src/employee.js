'use strict';

var Employee = function(first, last) {
	this.firstName = first;
	this.lastName = last;
};
Employee.prototype.getName = function() {
	return `${this.firstName} ${this.lastName}`;
};

module.exports = Employee;