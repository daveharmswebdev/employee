"use strict";

var Employee = require('../src/employee');
var Clinician = require('../src/clinician');

var daveClinician = new Clinician('Dave', 'Harms', 'RN');

console.log(daveClinician, daveClinician.getName());
