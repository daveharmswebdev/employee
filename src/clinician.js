'use strict';

var Employee = require('../src/employee');

var Clinician = function(first, last, specialty) {
	this.specialty = specialty;
	this.firstName = first;
	this.lastName = last;
};
Clinician.prototype = new Employee();
Clinician.prototype.getName = function() {
	return `${this.firstName} ${this.lastName}`;
};

module.exports = Clinician;