"use strict";

var Employee = require('../src/employee');
var Clinician = require('../src/clinician');
var Operations = require('../src/operations');

var daveClinician = new Clinician('Dave', 'Harms', 'RN');
daveClinician.setAssignment('San Francisco field office');
var jeffOperations = new Operations('Jeff', 'Jerry', 'Developer');
jeffOperations.setAssignment('Austin field office');
var janClinician = new Clinician('Jan', 'Hooks', 'FNP');
janClinician.setAssignment('Boston headquarters');
var bettyOperations = new Operations('Betty', 'White', 'HR');
bettyOperations.setAssignment('San Francisco field office');

function report(object) {
	var job = object.title === 'clinician' ? object.specialty : object.responsibility;
	var report = `${object.getName()} works as a ${object.title}, in the ${object.assigment}, and is a ${job}.`
	console.log(report);
}

report(daveClinician);
report(jeffOperations);
report(janClinician);
report(bettyOperations);

