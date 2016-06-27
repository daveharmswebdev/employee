'use strict';

var Employee = function(first, last) {
	this.firstName = first;
	this.lastName = last;
	this.location = '';
};
Employee.prototype.getName = function() {
	return `${this.firstName} ${this.lastName}`;
};
Employee.prototype.setAssignment = function(location) {
	this.assigment = location;
}

module.exports = Employee;