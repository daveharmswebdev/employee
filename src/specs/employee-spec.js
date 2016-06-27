'use strict';

var Employee = require('../employee.js');
var Clinician = require('../clinician.js');
var Department = require('../department.js');
var Operations = require('../operations.js');

describe('specs for employee.js', function() {

	let testEmp = new Employee("Dave", "Harms");

	it('employee should be defined', function() {
		expect(testEmp).toBeDefined();
	});
	it('should have a last name', function() {
		expect(testEmp.lastName).toEqual('Harms');
	});
	it('should have a first name', function() {
		expect(testEmp.firstName).toEqual('Dave');
	});
});

describe('specs for department', function() {

	let testDepartment = new Department('IT');

	it('Department should be defined', function() {
		expect(testDepartment).toBeDefined();
	});

	it('there should be a department name', function() {
		expect(testDepartment.name).toEqual('IT');
	});
	// it('', function() {
	// 	expect().toEqual();
	// })
	// it('', function() {
	// 	expect().toEqual();
	// })	
});

describe('specs for clinician.js', function() {
	
	let testC = new Clinician('Dave', 'Harms', 'RN');

	it('clinician should be defined', function() {
		expect(testC).toBeDefined();
	});
	it('clinician should have a name', function() {
		expect(testC.getName()).toEqual('Dave Harms');
	});
	it('clinican should have specialty', function() {
		expect(testC.specialty).toEqual('RN');
	});	
});

describe('specs for operations', function() {

	let testO = new Operations('John', 'Doe', 'Developer');

	it('Operations to be defined', function() {
		expect(testO).toBeDefined();
	});

	it('there should be a responsibility variable', function() {
		expect(testO.responsibility).toEqual('Developer');
	});

});